import requests

# Base URL for Voxta API
VOXTA_BASE_URL = "http://localhost/api/service-types"

# Headers for requests
HEADERS = {
    "Accept": "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "Origin": "http://localhost",
    "Referer": "http//localhost/",
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64)",
}

# Mapping of Voxta service types to their corresponding default service IDs
SERVICES = {
    "TextGen": "[your voxta service id]",  # OpenRouter
    "TextToSpeech": "[your voxta service id]",  # ElevenLabs
    "SpeechToText": "[your voxta service id]",  # VoxtaCloud
    "ActionInference": "[your voxta service id]",  # OpenRouter
    "Summarization": "[your voxta service id]",  # OpenRouter
    "ComputerVision": "[your voxta service id]",  # VoxtaCloud
    "Memory": "[your voxta service id]",  # ChromaDB
}

def configure_voxta_service(service_name, service_id):
    """Send a PUT request to configure a Voxta service with the correct default ID."""
    url = f"{VOXTA_BASE_URL}/{service_name}"
    payload = {
        "enabled": True,
        "defaultServiceId": service_id,
    }
    
    try:
        response = requests.put(url, json=payload, headers=HEADERS, verify=False)
        if response.status_code == 200:
            print(f"[✅] Successfully set {service_name} to {service_id}")
        else:
            print(f"[❌] Failed to set {service_name}: {response.status_code} {response.text}")
    except Exception as e:
        print(f"[⚠] Error setting {service_name}: {e}")

if __name__ == "__main__":
    print("[🔄] Configuring Voxta services...")
    for service, service_id in SERVICES.items():
        configure_voxta_service(service, service_id)
    print("[🎯] All Voxta services configured.")
