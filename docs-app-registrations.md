---
title: "App Registrations"
url: "https://doc.voxta.ai/docs/app-registrations/"
scraped_at: "2025-12-22T00:00:00.000Z"
status: "draft"
---

# App Registrations

App Registrations shows all applications (clients) that have connected to your Voxta server. Access via **Advanced > App Registrations** in the sidebar.

## Overview

Voxta is designed to work with multiple client applications:

- **Voxta UI** - The web interface you're using
- **Virt-A-Mate Plugin** - VR integration for VAM
- **Custom Apps** - Third-party or custom integrations
- **SDKs and Bots** - Programmatic access

When any application connects to Voxta, it registers itself here.

## Interface Elements

### Registered Applications List

Each registered app shows:

- **App name** - Identifier provided by the application
- **Status** - REGISTERED (successfully connected)
- **Registration date** - When the app first connected
- **Edit button** - Modify app settings

### Back Button

Return to the previous page.

## What Gets Registered

When an app connects to Voxta:

1. App sends its identifier and metadata
2. Voxta creates a registration entry
3. The app can now communicate with Voxta
4. Registration persists across sessions

## Common Registered Apps

### Voxta UI

The web interface itself registers as an app:
- Always present
- Used for browser-based interaction
- Handles audio input/output via browser

### Virt-A-Mate Plugin

The VAM integration:
- Appears when VAM connects
- Provides avatar synchronization
- Enables VR interaction

### Custom Integrations

Any app using Voxta's API:
- Discord bots
- Custom frontends
- Automation tools
- Development/testing tools

## Managing Registrations

### View Details

Click **Edit** on an app to see:
- Full app identifier
- Registration timestamp
- Connection history
- App-specific settings

### Remove Registration

If needed, you can remove app registrations:
1. Click Edit on the app
2. Look for delete/remove option
3. Confirm removal

Note: The app will re-register on next connection.

### App-Specific Settings

Some apps may have configurable settings:
- Audio routing preferences
- Feature permissions
- Connection parameters

## Security Considerations

### Local Network

By default, Voxta only accepts connections from localhost. Apps must run on the same machine.

### Network Access

If you enable network access:
- Other devices can connect
- Review registered apps regularly
- Remove unknown registrations
- Consider authentication

### Trusted Apps

Only use apps from trusted sources:
- Official Voxta integrations
- Verified community projects
- Your own development

## Troubleshooting

### App Not Appearing

- Ensure the app successfully connected
- Check Voxta is running when app connects
- Verify network/firewall settings
- Check app logs for connection errors

### App Shows Old Date

- Registrations persist from first connection
- Date doesn't update on reconnection
- This is normal behavior

### Unknown App Registered

- Could be from testing/development
- Could be from a legitimate tool
- Remove if you don't recognize it
- Check your installed software

### App Can't Connect

- Verify Voxta server is running
- Check connection URL/port
- Review firewall settings
- Check app configuration

## For Developers

### Registering Your App

When developing a Voxta integration:

1. Use the Voxta API/SDK
2. Provide a unique app identifier
3. Handle registration response
4. Store connection credentials

### App Identifiers

Use descriptive, unique identifiers:
- `com.yourcompany.appname`
- `YourApp v1.0`
- Include version for debugging

### Connection Lifecycle

1. Connect to Voxta server
2. Register app (automatic with SDK)
3. Authenticate if required
4. Begin communication
5. Handle disconnection gracefully

## Related Pages

- [Getting Started](getting-started.md) - Initial Voxta setup
- [Troubleshooting](troubleshooting-solutions.md) - Common issues
- [Terminal](terminal.md) - Advanced debugging
- [Diagnostics](diagnostics.md) - System status

---

## Related KB Articles

- [Voxta Integration with Virt-A-Mate](kb/troubleshooting/fix-for-vam-character-talking-but-not-moving-g5wN5E.md)
- [Configuring Voice Input for VAM](kb/configuration/microphone-permissions-for-voxta-and-virt-a-mate-2_xuhn.md)
- [Registering Custom UI Forms for Provider Apps](kb/configuration/registering-custom-ui-forms-for-provider-apps-WTrhNB.md)
