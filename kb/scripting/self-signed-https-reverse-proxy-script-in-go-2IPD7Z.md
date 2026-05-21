---
id: 2IPD7Z8wvlnD61yxlIR8m
slug: self-signed-https-reverse-proxy-script-in-go-2IPD7Z
type: tip
title: Self-Signed HTTPS Reverse Proxy Script in Go
topics:
  - scripting
  - configuration
keywords:
  - go
  - golang
  - https
  - reverse proxy
  - self-signed
  - ssl
  - websocket
  - wss
confidence: 0.9
authority: 0.2
contributor: mrdragonfox
sources: []
created: 2025-12-23T00:07:00.326Z
updated: 2025-12-23T00:07:00.326Z
---

# Self-Signed HTTPS Reverse Proxy Script in Go

> A Go script to run a local self-signed HTTPS reverse proxy for services.

## Answer

To create a self-signed HTTPS endpoint that acts as a transparent reverse proxy (supporting both HTTPS and WebSockets), you can use the following Go script. This is useful for local integrations requiring secure contexts.

### Usage
1. Save the code as a `.go` file (e.g., `proxy.go`).
2. Update the `bindIP` variable to your local machine's IP.
3. Update the `targetURL` to the backend service you want to proxy (e.g., a local LLM or TTS server).
4. Run with `go run proxy.go`.

### Code
```go
package main

import (
    "crypto/rand"
    "crypto/rsa"
    "crypto/tls"
    "crypto/x509"
    "crypto/x509/pkix"
    "encoding/pem"
    "log"
    "math/big"
    "net"
    "net/http"
    "net/http/httputil"
    "net/url"
    "time"
)

func generateSelfSigned(host string) (tls.Certificate, error) {
    // Generate a private key
    priv, err := rsa.GenerateKey(rand.Reader, 2048)
    if err != nil {
        return tls.Certificate{}, err
    }

    // Create a certificate template
    serialLimit := new(big.Int).Lsh(big.NewInt(1), 128)
    serialNumber, err := rand.Int(rand.Reader, serialLimit)
    if err != nil {
        return tls.Certificate{}, err
    }

    template := &x509.Certificate{
        SerialNumber: serialNumber,
        Subject: pkix.Name{
            CommonName: host,
        },
        NotBefore:             time.Now().Add(-time.Hour),
        NotAfter:              time.Now().Add(365 * 24 * time.Hour), // valid for 1 year
        KeyUsage:              x509.KeyUsageDigitalSignature | x509.KeyUsageKeyEncipherment,
        ExtKeyUsage:           []x509.ExtKeyUsage{x509.ExtKeyUsageServerAuth},
        BasicConstraintsValid: true,
    }
    if ip := net.ParseIP(host); ip != nil {
        template.IPAddresses = []net.IP{ip}
    } else {
        template.DNSNames = []string{host}
    }
    derBytes, err := x509.CreateCertificate(rand.Reader, template, template, &priv.PublicKey, priv)
    if err != nil {
        return tls.Certificate{}, err
    }
    certPEM := pem.EncodeToMemory(&pem.Block{Type: "CERTIFICATE", Bytes: derBytes})
    keyPEM := pem.EncodeToMemory(&pem.Block{Type: "RSA PRIVATE KEY", Bytes: x509.MarshalPKCS1PrivateKey(priv)})

    return tls.X509KeyPair(certPEM, keyPEM)
}

func main() {
    bindIP := "192.168.0.12" // Swap for your local IP
    bindAddr := net.JoinHostPort(bindIP, "443")

    // Backend target
    targetURL, err := url.Parse("http://192.168.0.37:5384") // Swap for target IP:Port
    if err != nil {
        log.Fatalf("parse backend: %v", err)
    }
    proxy := httputil.NewSingleHostReverseProxy(targetURL)
    defaultDirector := proxy.Director
    proxy.Director = func(r *http.Request) {
        defaultDirector(r)
        if ip, _, err := net.SplitHostPort(r.RemoteAddr); err == nil {
            if prior := r.Header.Get("X-Forwarded-For"); prior != "" {
                r.Header.Set("X-Forwarded-For", prior+", "+ip)
            } else {
                r.Header.Set("X-Forwarded-For", ip)
            }
        }
        r.Header.Set("X-Forwarded-Proto", "https")
        r.Host = targetURL.Host
    }
    proxy.ErrorHandler = func(w http.ResponseWriter, r *http.Request, err error) {
        log.Printf("proxy error: %v", err)
        http.Error(w, "proxy error", http.StatusBadGateway)
    }
    cert, err := generateSelfSigned(bindIP)
    if err != nil {
        log.Fatalf("generate cert: %v", err)
    }
    tlsConfig := &tls.Config{
        Certificates: []tls.Certificate{cert},
        MinVersion:   tls.VersionTLS12,
    }
    ln, err := tls.Listen("tcp", bindAddr, tlsConfig)
    if err != nil {
        log.Fatalf("listen: %v", err)
    }
    defer ln.Close()
    log.Printf("Reverse proxy listening on https://%s -> %s", bindAddr, targetURL)
    if err := http.Serve(ln, proxy); err != nil && err != http.ErrServerClosed {
        log.Fatalf("serve: %v", err)
    }
}
```

---

*Extracted from Discord. Primary contributor: mrdragonfox*