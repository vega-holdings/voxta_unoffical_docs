---
id: 8elWD9vt16frhnv8k8H0I
slug: web-search-connection-refused-azure-bing-search-8elWD9
type: troubleshooting
title: "Web Search Connection Refused: Azure Bing Search API Configuration and
  Availability"
topics:
  - troubleshooting
  - configuration
  - integrations
keywords:
  - web search
  - bing
  - azure
  - "5001"
  - connection refused
  - assistant
  - Azure Bing Search
  - API Key
  - Grounding with Bing Search
  - Microsoft
  - Service unavailable
confidence: 0.9
authority: 0.2
contributor: cyberdelique
sources:
  - messageId: "1383619581498757173"
    author: cyberdelique
    timestamp: 2025-12-22T23:03:26.946Z
    url: ""
  - messageId: "1383622476717625385"
    author: cyberdelique
    timestamp: 2025-12-22T23:03:26.946Z
    url: ""
created: 2025-12-22T23:03:26.946Z
updated: 2025-12-23T04:35:48.556Z
---

# Web Search Connection Refused: Azure Bing Search API Configuration and Availability

> Web search in Voxta requires a valid Azure Bing Search API key. If you encounter connection errors (e.g., port 5001), ensure the key is configured; note that Microsoft may have discontinued new resource creation, and the alternative 'Grounding with Bing Search' is not compatible.

## Answer

# Web Search Connection Refused: Azure Bing Search API

When using Voxta's web search functionality (for characters marked as 'Assistant'), you may encounter a connection error such as "connection refused on port 5001". This indicates that the web search provider is not reachable or properly configured.

Voxta's web search relies on the **Azure Bing Search API**, an external service provided by Microsoft. To use this feature, you must have a valid Azure Bing Search API subscription and an API key, which you then configure in Voxta's settings.

## How to Fix

1. **Obtain an Azure Bing Search API key**  
   - If you already have a subscription, retrieve your API key from the Azure portal.  
   - If you do not have a subscription, note that Microsoft may have discontinued the ability to create new Azure Bing Search resources. Check the current status on Microsoft's official documentation.

2. **Configure the API key in Voxta**  
   - In Voxta's settings, locate the web search configuration section.  
   - Enter your API key and save the changes.

After configuration, restart Voxta and the web search should function correctly.

## Important Notes

- **Service Availability**  
  Users have reported that Microsoft may no longer allow creation of new Azure Bing Search resources. If you are unable to obtain a key, the web search feature may not be available to you.

- **Alternative "Grounding with Bing Search"**  
  Microsoft offers a different service called "Grounding with Bing Search" as part of the Azure AI Agent Service. This is **not** a compatible drop-in replacement for the Azure Bing Search API used by Voxta. It cannot be used to enable web search in Voxta at this time.

- **Local vs. External**  
  The web search feature is not pre-installed locally; it requires an external Azure service subscription.

If you continue to experience issues, ensure your network allows outbound connections to Azure services and that your API key is valid and not expired.

---

*Extracted from Discord. Primary contributor: cyberdelique*