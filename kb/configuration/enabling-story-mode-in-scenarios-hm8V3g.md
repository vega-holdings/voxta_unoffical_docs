---
id: hm8V3gVr3NtJJQ2J0og4N
slug: enabling-story-mode-in-scenarios-hm8V3g
type: qa
title: "Scenario Chat Flow Modes: Chat vs Story, Narration, and Troubleshooting"
topics:
  - configuration
  - troubleshooting
  - scripting
  - llm
keywords:
  - scenario
  - chat flow
  - chat mode
  - story mode
  - narrator
  - user participation
  - exclude user
  - excessive narration
  - troubleshooting
  - character chat style
  - narration
  - text gen preset
  - storywriter
confidence: 0.9
authority: 0.2
contributor: _kinkyk9
sources: []
created: 2025-12-22T23:54:32.281Z
updated: 2025-12-23T04:38:19.179Z
---

# Scenario Chat Flow Modes: Chat vs Story, Narration, and Troubleshooting

> Explains the difference between Chat and Story modes in Scenario Chat Flow, how to configure them, and how to control narration through mode selection, character chat style, and text generation presets.

## Answer

# Scenario Chat Flow Modes

The Chat Flow setting determines whether the user participates in the scenario.

- **Chat mode**: The user is an active participant. In the scenario, the user is referenced as `{{ user }}` (using the username defined in the Profile tab). The user can type or speak.
- **Story mode**: The user is completely excluded from the scenario. Characters interact with each other or the narrator autonomously; the user cannot type or speak.

## Configuring Chat Flow

To change the Chat Flow mode:

1. Navigate to your Scenario settings.
2. Locate the **Chat Flow** option (typically under the **General** or **Options** tab).
3. Select **Chat** or **Story** as desired.

## Narration and Chat Style

Narration behavior differs significantly between the two modes:

- In **Story mode**, the AI is encouraged to produce a narrative that includes actions, descriptions, and pure narration. This is the default for writing stories or when the user is not participating.
- In **Chat mode**, the AI focuses on dialogue and minimizes narration, making it ideal for interactive conversations.

If you experience excessive narration, actions, or descriptions interrupting character speech, check the following:

- Ensure the Scenario Chat Flow is set to **Chat** (not Story).
- In the Character settings, set the character's chat style to **Companion** or **Roleplay** rather than **Storytelling**. The chat style also influences the amount of narration.

### Enabling Mixed Narration in Chat Mode

If you want to allow some narration while still having the user participate (mixed narration), you can adjust the text generation presets. This tells the AI to occasionally include descriptive elements even in Chat mode. Consult the Text Generation Presets documentation for details.

For advanced scripting, the `storywriter` mode can be used to enforce pure narration output.

## Troubleshooting

- **User cannot type/speak**: Verify that Chat Flow is set to **Chat**. In Story mode, the user is excluded.
- **Excessive narration**: As above, set Chat Flow to Chat and adjust character chat style.
- **Desired narration not appearing in Story mode**: Ensure the AI is not being restricted by other settings (e.g., prompt constraints). Also check that the scenario is designed for narrative output.

---

*Extracted from Discord. Primary contributor: _kinkyk9*