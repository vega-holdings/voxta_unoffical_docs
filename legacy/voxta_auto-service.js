// ==UserScript==
// @name         Voxta Auto-Service Switcher (Enhanced)
// @namespace    http://tampermonkey.net/
// @version      4.1
// @description  Enhanced service switcher with welcome message handling
// @author       You
// @match        https://localhost:5384/chat*
// @grant        GM_xmlhttpRequest
// @require      https://cdnjs.cloudflare.com/ajax/libs/microsoft-signalr/6.0.1/signalr.min.js
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Service configurations
    const DESIRED_SERVICES = {
        "TextGen": "[[YOUR SERVICE ID]]",
        "TextToSpeech": "[[YOUR SERVICE ID]]",
        "SpeechToText": "[[YOUR SERVICE ID]]",
        "ActionInference": "[[YOUR SERVICE ID]]",
        "Summarization": "[[YOUR SERVICE ID]]",
        "ComputerVision": "[[YOUR SERVICE ID]]",
        "Memory": "[[YOUR SERVICE ID]]",
    };

    const TARGET_CHARACTER_ID = "[[YOUR CHAR ID]]";

    // Simple EventEmitter implementation
    class EventEmitter {
        constructor() {
            this.events = {};
        }

        on(event, callback) {
            if (!this.events[event]) {
                this.events[event] = [];
            }
            this.events[event].push(callback);
        }

        emit(event, data) {
            if (this.events[event]) {
                this.events[event].forEach(callback => callback(data));
            }
        }
    }

    // Event bus singleton
    const eventBus = new EventEmitter();

    class VoxtaWSClient {
        constructor() {
            this.connection = null;
            this.sessionId = null;
            this.serviceUpdatePending = false;
            this.setupEventListeners();
            this.initializeAsync();
        }

        async initializeAsync() {
            const wsUrl = 'https://localhost:5384/hub';

            try {
                this.connection = new signalR.HubConnectionBuilder()
                    .withUrl(wsUrl, {
                        skipNegotiation: true,
                        transport: signalR.HttpTransportType.WebSockets
                    })
                    .withAutomaticReconnect([0, 1000, 5000, null])
                    .configureLogging(signalR.LogLevel.Information)
                    .build();

                this.setupSignalRHandlers();
                await this.connection.start();
                console.log("[🔗] Connected to Voxta SignalR hub");
                this.authenticate();
            } catch (error) {
                console.error("[❌] Connection error:", error);
                setTimeout(() => this.initializeAsync(), 5000);
            }
        }

        setupEventListeners() {
            eventBus.on('welcome', (message) => {
                if (message?.assistant?.id === TARGET_CHARACTER_ID) {
                    console.log("[🎯]  detected in welcome message");
                    this.serviceUpdatePending = true;
                    this.updateAllServices();
                }
            });

            eventBus.on('chatStarting', (message) => {
                this.sessionId = message.sessionId;
                console.log("[📝] Chat starting, session ID:", this.sessionId);
            });

            eventBus.on('chatStarted', (message) => {
                // Only update services if we haven't already done so from welcome message
                if (!this.serviceUpdatePending &&
                    message?.characters?.some(char => char.id === TARGET_CHARACTER_ID)) {
                    console.log("[🎯]  detected in chatStarted");
                    this.updateAllServices();
                }
            });
        }

        setupSignalRHandlers() {
            this.connection.on("ReceiveMessage", (message) => {
                console.log("[📨] Received message:", message.$type);

                switch (message.$type) {
                    case 'welcome':
                        eventBus.emit('welcome', message);
                        break;
                    case 'chatStarting':
                        eventBus.emit('chatStarting', message);
                        break;
                    case 'chatStarted':
                        eventBus.emit('chatStarted', message);
                        break;
                }
            });

            this.connection.onreconnecting(() => {
                console.log("[🔄] Reconnecting...");
                this.serviceUpdatePending = false;
            });

            this.connection.onreconnected(() => {
                console.log("[✅] Reconnected");
                this.authenticate();
            });
        }

        authenticate() {
            console.log("[🔑] Authenticating...");

            this.connection.invoke("SendMessage", {
                $type: "authenticate",
                client: "Voxta.Monkey",
                clientVersion: "1.0",
                scope: ["role:app"],
                capabilities: {
                    audioInput: "WebSocketStream",
                    audioOutput: "Url",
                    acceptedAudioContentTypes: ["audio/x-wav", "audio/mpeg"],
                    visionCapture: "PostImage",
                    visionSources: ["Screen", "Eyes", "Attachment"]
                }
            }).then(() => {
                console.log("[✅] Authentication successful");
            }).catch(error => {
                console.error("[❌] Authentication failed:", error);
            });
        }

        updateAllServices() {
            console.log("[🔄] Updating all services to desired configuration");
            Object.entries(DESIRED_SERVICES).forEach(([service, serviceId]) => {
                this.updateService(service, serviceId);
            });
        }

        updateService(service, serviceId) {
            console.log(`[🔄] Updating ${service} to ${serviceId}`);

            GM_xmlhttpRequest({
                method: "PUT",
                url: `https://localhost:5384/api/service-types/${service}`,
                headers: {
                    "Content-Type": "application/json"
                },
                data: JSON.stringify({
                    enabled: true,
                    defaultServiceId: serviceId
                }),
                onload: (response) => {
                    if (response.status === 200) {
                        console.log(`[✅] ${service} updated successfully`);
                    } else {
                        console.error(`[❌] Failed to update ${service}:`, response.responseText);
                    }
                },
                onerror: (error) => {
                    console.error(`[❌] Error updating ${service}:`, error);
                }
            });
        }
    }

    // Initialize when SignalR is loaded
    const initClient = () => {
        if (typeof signalR !== 'undefined') {
            console.log("[🚀] Initializing enhanced Voxta client...");
            new VoxtaWSClient();
        } else {
            requestAnimationFrame(initClient);
        }
    };

    initClient();
})();
