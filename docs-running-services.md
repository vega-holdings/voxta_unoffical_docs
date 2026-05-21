---
title: "Running Services"
url: "https://doc.voxta.ai/docs/running-services/"
scraped_at: "2025-12-22T00:00:00.000Z"
status: "draft"
---

# Running Services

The Running Services page displays all currently active modules and services during a chat session. Access via **Configuration > Running Services** in the sidebar.

## Overview

When you start a chat, Voxta activates the necessary modules:

- Text generation (LLM)
- Text-to-speech (TTS)
- Speech-to-text (STT)
- Vision, memory, and other enabled modules

The Running Services page shows what's currently running, their status, and resource usage.

## Interface Elements

### Service List

When services are running, you'll see:

- **Service name** - Which module is active
- **Status** - Running, loading, error state
- **Resource usage** - Memory, processing time
- **Connection status** - For cloud services

### Empty State

When no chat is active:

> "No services are currently running."

Start a chat to see services activate.

## When Services Run

Services start when:

1. You begin a new chat
2. You resume an existing chat
3. You use a Playground feature
4. Background processes activate

Services stop when:

1. You end the chat session
2. You close Voxta
3. Services timeout from inactivity
4. Errors force shutdown

## Service Categories

### Always Active (During Chat)

- **Chat Replies** - LLM for generating responses
- **Voice** - TTS for speaking responses
- **Speech Transcription** - STT for hearing you

### Conditionally Active

- **Action Inference** - When actions are triggered
- **Summarization** - When context needs compression
- **Vision** - When image analysis is needed
- **Image Generation** - When images are requested
- **Memory** - When long-term recall is active

### Background Services

- **Wake Word** - Listening for activation phrase
- **Audio Processing** - Noise reduction, etc.

## Monitoring Services

### Performance Indicators

Watch for:

- **Response time** - How long modules take
- **Queue depth** - Backlog of requests
- **Error rates** - Failed operations
- **Resource usage** - Memory/GPU utilization

### Health Checks

Green indicators = Healthy
Yellow indicators = Degraded
Red indicators = Error/Offline

## Common Scenarios

### Starting a Chat

1. Navigate to a character
2. Click to start chat
3. Services initialize
4. Running Services shows active modules
5. Chat begins when ready

### During Conversation

Services process in sequence:

1. **STT** processes your speech
2. **LLM** generates response
3. **TTS** synthesizes speech
4. (Optional) **Vision/Image Gen** if triggered

### Ending a Chat

1. Leave the chat or close window
2. Services begin shutdown
3. Running Services clears
4. Resources are released

## Troubleshooting

### Service Won't Start

- Check module configuration
- Verify API keys are valid
- Check network connectivity
- Review error messages
- Try restarting Voxta

### Slow Performance

- Check Running Services for bottlenecks
- Monitor resource usage
- Consider lighter modules
- Check network latency for cloud services

### Service Crashes

- Review Diagnostics page
- Check system resources
- Review Voxta logs
- May need to restart affected module

### Stuck Services

If services show as running but aren't responding:

1. End the current chat
2. Check Running Services clears
3. Start a new chat
4. If persists, restart Voxta

## Best Practices

### Before Long Sessions

- Check Running Services is clear
- Verify your Configuration is correct
- Test with a short chat first

### During Issues

- Check Running Services first
- Note which services show problems
- Cross-reference with Diagnostics

### Performance Optimization

- Disable unused services in Configuration
- Use appropriate modules for your hardware
- Monitor resource usage patterns

## Sidebar Badge

The sidebar shows running service count:

> Running Services **0**

This updates in real-time:
- **0** = No active services
- **1+** = Number of running services

## Related Pages

- [Manage Modules](manage-modules.md) - Configure modules
- [Configurations](configurations.md) - Select which modules to use
- [Diagnostics](diagnostics.md) - System health
- [Benchmarks](benchmarks.md) - Performance testing
- [Troubleshooting](troubleshooting-solutions.md) - Common issues
