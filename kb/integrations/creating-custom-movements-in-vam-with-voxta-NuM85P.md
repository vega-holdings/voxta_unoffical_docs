---
id: NuM85PLZP8F05iRykcAE2
slug: creating-custom-movements-in-vam-with-voxta-NuM85P
type: qa
title: "Voxta Clients and Integrations: Desktop App, Voxy, and Virt-A-Mate"
topics:
  - integrations
  - setup
  - configuration
keywords:
  - Voxta
  - Voxy
  - Virt-A-Mate
  - VAM
  - desktop app
  - 2D avatars
  - 3D animations
  - Action List Manager
  - ALM
  - Timeline
  - animation
  - custom actions
  - trigger
  - integration
  - setup
  - configuration
  - download
  - portal
  - voxydesktopcompanion.exe
  - vision
  - character cards
  - action inference
  - scenario
  - scripter
  - companion
  - backend
  - frontend
confidence: 0.9
authority: 0.2
contributor: sraura
sources:
  - messageId: "1343854782934286453"
    author: sraura
    timestamp: 2025-12-22T21:01:41.202Z
    url: ""
created: 2025-12-22T21:01:41.202Z
updated: 2025-12-23T13:32:46.691Z
---

# Voxta Clients and Integrations: Desktop App, Voxy, and Virt-A-Mate

> Voxta is the core AI server that powers interactions; it includes a 2D desktop chat app and can connect to external clients like Voxy (3D desktop companion) and Virt-A-Mate (adult VR). This guide explains how to set up and use these integrations, including custom animations in VAM.

## Answer

# Voxta Clients and Integrations: Desktop App, Voxy, and Virt-A-Mate

Voxta is the core AI server that powers conversational interactions, handling speech recognition, text generation, and processing. It can be used with various front-end clients and integrations, each offering different levels of immersion and interactivity. This guide covers three primary ways to interact with Voxta:

- The built-in **Voxta Desktop App** (2D chat interface)
- **Voxy**, a separate 3D desktop companion client
- **Virt-A-Mate (VAM)**, a VR adult experience where Voxta can trigger custom animations

All these options rely on the Voxta backend, so ensure Voxta is installed and running before setting up any client.

## Voxta Desktop App (2D)

The Voxta installation includes a desktop application that provides a text-based chat interface with 2D avatars. Key features:

- **2D Avatars**: Static or emotion-based images that change according to the conversation context.
- **Background Images**: Customizable backgrounds to set the scene.
- **Lightweight**: Runs alongside the Voxta server with minimal system impact.

This app is ideal for users who prefer a simple, low-resource chat experience. No additional download is required; it is part of the standard Voxta package.

## Voxy Desktop Companion (3D)

Voxy is a standalone front-end client that connects to Voxta to deliver a fully animated 3D character on your desktop. Unlike the 2D app, Voxy allows the avatar to move, bounce, and react in real time, creating a more engaging companion experience.

### Download and Setup

1. **Prerequisite**: Voxta must be installed and running.
2. **Download**: Obtain the latest version of Voxy from the Voxta portal (the same location where you downloaded Voxta Server).
3. **Launch**: Run `voxydesktopcompanion.exe` to start Voxy.
4. **Select Character**: In Voxy's interface, choose a character that you have already created and configured in Voxta.
5. **Apply Avatar**: Use one of the default avatars provided by Voxy or add your own custom avatar.

### Advanced Features

- **Vision**: To enable vision capabilities (allowing the AI to see your screen), configure the character card in Voxta accordingly. Voxy itself does not handle vision settings; it relies on Voxta's configuration.

Voxy runs independently of the Voxta desktop app, so you can have both clients connected simultaneously, but typically you would choose one based on your preference.

## Voxta with Virt-A-Mate (VAM)

Virt-A-Mate (VAM) is a VR adult sandbox that can be enhanced with Voxta's conversational AI. However, Voxta does **not** generate or control complex character movements on its own. To enable Voxta to trigger custom animations (e.g., dances, gestures, scene changes), you must combine it with VAM's animation and triggering plugins.

### Voxta's Role in VAM

- **Conversation Management**: Voxta handles the dialogue and can send commands to VAM based on the conversation.
- **Action Inference**: Voxta decides when a character should perform an action, but the action itself must be pre‑made and linked to a trigger.
- **Vision (Optional)**: Voxta can take snapshots of the VAM scene to provide context to the AI, influencing which actions are triggered.

### Essential Tools

- **Timeline**: A VAM plugin for creating and editing complex animations (character movements, object animations, scene transitions).
- **Action List Manager (ALM)**: A VAM plugin that manages triggers and actions. ALM can start, stop, or control Timeline animations based on events such as keyboard shortcuts, UI buttons, or Voxta commands.  
  *Alternative triggering systems like the built-in **Scenario** or **Scripter** plugins can also be used, but ALM is widely adopted and offers robust integration.*

### How Voxta Triggers Animations

1. **Create the Animation**: Design the exact movement sequence in Timeline.
2. **Define an Action in ALM**: Set up an ALM action that plays that specific Timeline clip.
3. **Integrate with Voxta**: Configure Voxta to send a command that ALM recognizes (e.g., a specific keyword or event). Some ALM versions may have built‑in support for Voxta events.
4. **Test**: Ensure that when Voxta receives the appropriate conversational cue, it sends the command and the animation plays correctly.

### Learning Resources

- **[ALM 101 Presentation](https://docs.google.com/presentation/d/1i6Ab4vXnNnssFH8SDRQfkociqNbKSKL4wK9Dl0uRMr8/edit?usp=drivesdk)**: A comprehensive guide to using Action List Manager.
- Examine pre‑made VAM scenes that combine ALM and Timeline to see practical examples.

### Important Notes

- **Voxta and ALM are not animation engines**. They cannot generate movement from text alone; they only trigger animations that you have pre‑built.
- The character can only perform actions that have been explicitly defined and linked in the scene.
- If your goal is purely physical interaction without conversation, you may not need Voxta—standard VAM tools (Timeline, triggers) are sufficient.

By combining Voxta, ALM (or similar), and Timeline, you can create rich, interactive VAM experiences where the AI character can initiate custom movements and scene changes based on the conversation.

---

This merged guide covers the main ways to use Voxta with external clients and integrations. For further details, refer to the official Voxta documentation or community resources.

---

*Extracted from Discord. Primary contributor: sraura*