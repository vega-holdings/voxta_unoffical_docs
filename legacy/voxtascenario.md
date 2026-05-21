```markdown
# Comprehensive Voxta Scenario Documentation

This document provides a comprehensive guide to creating scenarios in Voxta, combining information from official Voxta documentation, and video tutorials. It aims to be detailed and accessible to users of all levels, providing examples and clear explanations for each feature.

## I. Introduction to Voxta Scenarios

Voxta scenarios are the foundation for creating interactive and dynamic experiences with AI characters. They allow you to define the context, characters, and flow of conversations, enabling complex roleplay and storytelling.

### What are Scenarios?

*   **Interactive Environments:** Scenarios are environments where users can interact with AI characters.
*   **Storytelling and Roleplay:** They facilitate narrative-driven experiences, ranging from simple conversations to complex branching stories.
*   **Customizable Interactions:** Scenarios allow for deep customization of character behavior, responses, and actions within a defined context.
*   **Beyond Basic Chat:** Scenarios go beyond simple chatbot interactions by incorporating events, actions, scripts, and context to create dynamic and engaging experiences.

### Key Components of a Voxta Scenario

*   **Characters:** The AI personalities that participate in the scenario.
*   **Roles:** Define how characters are used within a specific scenario, assigning unique names and behaviors.
*   **Scenario Card:** Contains general information about the scenario (title, description, creator, etc.) and core settings.
*   **Chat Flow:** Determines the interaction style (Story Mode or Chat Mode).
*   **Bootstrap Messages:** Initial messages or scene descriptions to start the scenario.
*   **Scripts:** Advanced programming for complex scenario logic and interactions.
*   **Events:** Triggered occurrences that drive the scenario forward based on conditions and timing.
*   **Actions:** Character reactions and behaviors triggered by events or dialogue.
*   **Context:** Additional information provided to the AI to guide responses and maintain scenario consistency.
*   **Conditions:** Logic that determines when Events, Actions, and Context are activated.
*   **Message Types:** Different types of messages (Notes, Instructions, Secrets, Events, Story) with varying visibility and functionality.

## II. Character Preparation

Characters are the AI personalities that populate your scenarios. Before creating a scenario, you need to have your characters defined.

### Built-in vs. Custom Characters

*   **Built-in Characters:** Voxta provides default characters upon installation.
    *   **Caution:**  These are linked to core Voxta functions and scenes.
    *   **Recommendation:**  **Avoid using built-in characters directly** in scenarios to prevent conflicts.
    *   **Cloning:** If you want to use a built-in character as a starting point, **clone it** and modify the clone.
*   **Custom Characters:**
    *   **Recommended Approach:** Create your own characters from scratch for full customization.
    *   **Importing:** You can also import characters created by the Voxta community.

### Character Card Customization

The Character Card is where you define the AI's personality, appearance, and behavior.

*   **Avatar Image:**
    *   A 2x3 image representing the character.
    *   No specific requirements beyond dimensions are mentioned.
*   **Metadata Fields:**
    *   For organizational purposes (e.g., version tracking, creator information).
    *   Not critical for basic scenario functionality.
*   **Character Card (Core Definition):**
    *   **Message Examples:** Examples of how the character speaks and responds. Crucial for guiding the AI's conversational style.
    *   **Profile and Personality:** Defines the character's background, traits, motivations, and mannerisms. This section heavily influences the AI's in-scenario behavior and roleplay.
    *   **Appearance:** Describes the character's visual aspects if a narrator is used in the scenario to describe the scene.
*   **Default Scenario Section (Character Card):**
    *   **Not used in scenarios.** Information here will **not** appear in your created scenarios. This section might be for default chat mode outside of scenarios.
*   **Technical Stuff Section (Character Card):**
    *   Considered more technical and is not essential for basic scenario creation.

**Example: Character Card Snippet**

```
**Character Profile:**

Name: Anya Petrova
Age: 28
Occupation: Cyberpunk Bounty Hunter
Personality:  Anya is cynical, resourceful, and fiercely independent. She's seen the dark side of the city and has a dry wit.  Despite her tough exterior, she has a hidden sense of justice.
Appearance:  Anya has short, choppy black hair, piercing blue eyes, and cybernetic enhancements visible on her arms. She wears practical, dark clothing and a worn leather jacket.

**Message Examples:**

User: "The data chip is missing!"
Anya: "Missing?  Figures.  Alright, spill it.  When did you last see it?"

User: "Thanks for your help, Anya."
Anya: "Don't mention it. Just try not to get into this mess again."

User: "What do you think about the weather today?"
Anya: "Weather?  Who cares about the weather when there are bounties to collect?"
```

## III. Scenario Creation

Creating a scenario involves setting up the environment, defining the characters' roles, and configuring the interaction flow.

### Scenario Creation Options

*   **Create from Scratch:** Start with a blank scenario and build it up step-by-step.
*   **Import Scenarios:** Import scenarios created by others.
*   **"Character Scenario"**: VXA internal type, not directly user-modifiable for scenario creation.

### Scenario Versioning and Backup

*   **No Built-in Version History:** Voxta currently lacks automatic version control for scenarios.
*   **Manual Backup Recommendation:**
    *   **Clone Scenarios Regularly:** Create copies of your scenario at different stages of development.
    *   **Download Scenarios:** Download your scenarios as backups.
    *   This allows you to revert to previous versions if you make unwanted changes or encounter issues.

### Stages and Apps

*   **Stages:** Primarily for linking Voxta to external applications, like **Verto** for 3D visualization.
    *   **Voxta-Verto Interaction:** Stages facilitate communication between Voxta and external software.
    *   **Future Deprecation:** Stages might be removed in future Voxta versions, so they are not essential for core scenario creation.
*   **Vxar UI Stage:**  For scenarios intended to function solely within Voxta's user interface, use the **"Vxar UI" stage.** This is the default and recommended stage for most scenarios.
*   **Stage and App Selection:** Chosen together during scenario creation. For internal Voxta scenarios, select "Vxar UI" as the stage.
*   **Verto Limitations:** Verto might have limitations with complex scenarios or multiple characters due to performance or character tokening limits.

### Scenario Card Basics

The Scenario Card contains general information and settings for your scenario.

*   **Title:** The name of your scenario.
*   **Description:** A brief summary of the scenario's premise and setting.
*   **Creator:** Your name or username as the scenario creator.
*   **Version:** Version number for tracking updates and iterations.
*   **Explicit Content Tag:**  Mark if the scenario contains explicit content.
    *   **Filtering:** Users can filter out explicit content in their profiles, hiding tagged scenarios and characters.

## IV. Chat Flow and Scenario Settings

The Chat Flow determines how users interact with the scenario.

### Chat Flow Modes

*   **Story Mode:** Narrative-driven, automatic scenario progression.
    *   **Observer Mode:** The user primarily observes the story unfold.
    *   **Automatic Character Interaction:** Characters interact and a narrator describes events without direct user input in the main chat flow.
    *   **Limited User Interaction:** Users can edit and regenerate story elements, but do not directly participate as a character in the primary narrative.
*   **Chat Mode:** User-participatory, interactive scenarios.
    *   **User Participation:** The user actively interacts with characters and influences the story through their messages.

### Chat Style Options (Chat Mode)

These options customize the behavior of AI characters in Chat Mode.

*   **Time Awareness:**
    *   Allows AI characters to be aware of time and potentially reference the current date or time.
    *   Specific time functions are not detailed in provided documentation.
*   **Away Messages:**
    *   Enables characters to recognize and respond to user inactivity or periods of absence.
*   **Augmentations:**
    *   Currently primarily refers to providing characters with "Searchers," granting them internet access for information retrieval via services like Azure Bing Search API.
    *   Future augmentations may expand this functionality.
*   **Role Play (Disables Chat Style Features):**
    *   When enabled, **disables Time Awareness, Away Messages, and Augmentations.**
    *   Useful for scenarios where these features are undesirable or immersion-breaking (e.g., historical settings, specific fictional universes).

### Memory Books

*   **Functionality:**  "Very efficient tool" for referencing information external to scenario and character cards.
*   **Purpose:**  Likely for providing the AI with persistent knowledge or background information that is not directly included in the character or scenario definitions.
*   **Details:** Functionality and usage are not detailed in the provided documentation or video transcripts.

### Narrator

*   **Powerful Storytelling Tool:**  Adds a narrator to describe events, character emotions, and set the scene.
*   **Scenario Enrichment:** Enhances the narrative depth and immersiveness of scenarios.
*   **Implementation Complexity:** Requires "couple extra steps to make it work properly," details of which are not provided in Part 1 or Part 2 documentation.

## V. Roles: Defining Characters in the Scenario

Roles define how pre-created characters are utilized within a specific scenario. They allow you to customize character names and presence within the scenario's context.

### Role Assignment

*   **Roles Tab:** In the Scenario editor, the "Roles" tab is where you assign pre-existing characters to roles within the current scenario.
*   **Scenario-Specific Character Instances:** Roles create specific instances of characters within the scenario.
*   **Example:** You might use the same "Anya Petrova" character in multiple scenarios, but assign her different roles (e.g., "Lead Investigator" in one scenario, "Informant" in another), each with a unique role name and potentially different starting conditions.

### Key Role Fields

*   **Name (Crucial):** The **unique identifier** for the role within the scenario.
    *   **Script and Event Referencing:** Role names are used throughout the scenario definition (scripts, events, actions, context) to refer to specific characters.
    *   **Naming Recommendations:**
        *   **Easy to Type:** Short and simple names.
        *   **Easy to Remember:**  Descriptive and relevant to the role.
        *   **Distinct:** Unique from other role names in the scenario.
    *   **Examples:** "Operator," "Raider," "Narrator," "Detective," "Civilian". Avoid generic names like "character1" or "user."
*   **Enabled (Toggle):** When enabled ("on"), the character in this role is present in the scenario from the beginning.
*   **Start (Toggle):** Appears functionally identical to "Enabled." Toggling "on" makes the character present at the scenario's start. (Further clarification needed on potential subtle differences between "Enabled" and "Start" if any exist).

### Dynamic Character Appearance

*   **Disabled Roles at Start:** If "Enabled/Start" is toggled "off" for a role, the character is initially absent from the scenario.
*   **Conditional Appearance:** Characters in disabled roles can be made to appear later in the scenario, triggered by specific events, conditions, or user actions (implementation details in Part 2 video documentation).
*   **Scenario Flexibility:** This feature enables:
    *   Scenarios with large casts where only a subset of characters are active at any time.
    *   User choices affecting which characters are present in the scenario.
    *   Story progression where characters are introduced or removed dynamically.
*   **Example (Fallout Scenario):** In the video's Fallout scenario example, "Operator" (radio operator) and "Raider" (antagonist) roles are initially disabled and are introduced later based on scenario events.

### Adding Roles During Chat Mode

*   **Dynamic Role Addition:** Voxta allows adding new characters and roles even while a scenario is actively running in Chat Mode.
*   **Pre-Setup for Advanced Features:** To fully integrate dynamically added roles into scripts, events, and other advanced scenario elements, it is recommended to define them during scenario setup, even if they are initially disabled.

## VI. Scenario Tab: Core Scenario Definition

The "Scenario" tab contains fields that define the core narrative and initial setup of your scenario.

### Bootstrap Messages and Scenario Description

*   **Bootstrap Messages Field:** Combines the functionality of "first message" (greeting) and "instructions" from older Voxta versions into a single field.
    *   **Initial Dialogue:**  Use this field to set the first lines of dialogue for characters, or to provide a starting scene description if using a narrator.
    *   **Scenario Introduction:** Sets the stage for the scenario and provides initial context to the user.
    *   **Simple Scenario Focus:** For basic scenarios, primarily use the "Scenario" field (for overall scenario description) and the "Bootstrap Messages" field for initial content.
    *   **Example Bootstrap Message:** `Narrator: You find yourself in a dimly lit tavern. A gruff voice calls out, "Welcome, traveler."`

### Advanced Scenario Features (Scripts, Events, Actions, Context)

*   **Scripts, Events, Actions, and Context Tabs:** These tabs represent advanced tools for creating complex and interactive scenarios.
*   **Part 2 Focus:** Part 2 of the video tutorial series (and its documentation) focuses on these advanced features.
*   **Power and Complexity:** These tools enable sophisticated scenario logic, dynamic character behaviors, and branching narratives.

### Impersonation (User Name Customization)

*   **Location:** Found in both Scenario Cards and Character Cards.
*   **Purpose:** Allows customization of how the user is referred to within the scenario or by a specific character.
*   **User Identity Control:**  Defines the user's in-scenario persona.
*   **Example:**
    *   **User Real Name:** "Kingy K"
    *   **Impersonation Name:** "Cookie"
    *   In the scenario, characters will refer to the user as "Cookie" instead of "Kingy K."
*   **Description Field (Impersonation):** Provides context for the impersonation (e.g., "User is known as 'Cookie' in this scenario.").
*   **Scenario-Specific Identity:** Useful for scenarios with specific roles or settings where the user needs a defined in-world identity.
*   **Example (Fallout Scenario):** User impersonated as "Vault Dweller" wearing a "Vault jumpsuit with number," establishing a specific in-scenario identity.

## VII. Events: Driving Scenario Dynamics

Events are the engine of dynamic scenarios, triggering actions and context changes based on defined conditions and timing.

### Event Triggering

*   **Conditions:** Define *how* an event is triggered.
*   **Timing:** Define *when* an event is triggered in relation to messages and character actions.

### Event Timing Options

*   **Manual:** Events triggered manually, likely through scripting or user commands (not detailed in documentation).
    *   Triggered via `/trigger event_name` message.
*   **Before Message:** Event triggers *before* a message is sent in the chat (user or character message).
*   **After Message:** Event triggers *after* a message is sent in the chat.
*   **User vs. Character Timing:** The distinction between "User" and "Character" timing is not fully elaborated in the documentation but likely relates to whether the event is triggered by user messages or character messages.

### Event Controls (Interface)

*   **Toggle On/Off:** Enable or disable an event for testing or incremental scenario building.
*   **Duplicate:** Create a copy of an event to quickly create similar events.
*   **Delete:** Remove an event.

### Conditions for Events

Conditions determine when an event is triggered.

*   **Flags:** Boolean variables representing scenario state.
    *   Events can be triggered when specific flags are set or unset.
    *   Flags can control looping events and chat time.
*   **Probability:** Adds randomness to event triggering.
    *   Used in conjunction with other conditions.
    *   Example: An event with a 50% probability and a "messages count" condition might trigger 50% of the time when the message count condition is met.
*   **Messages Count:** Triggers events based on the number of messages in the chat.
    *   **Range:** Specify a message count range using "between" and "end" fields (e.g., trigger event between message 5 and message 10).
    *   **Counter Start:** Counter starts at the first message by default but can be linked to flags for custom control.
*   **Chat Time:** Triggers events based on real-time elapsed in the chat session.
    *   **Time-Based Triggering:** Similar to "messages count" but uses time elapsed instead of message count.
    *   **Time Reference:**  Defaults to the chat start time but can be linked to flags for custom starting points.

**Example: Event - Character Enters Scene**

*   **Event Name:** `character_enters_scene`
*   **Timing:** `After Message` (User)
*   **Conditions:**
    *   **Messages Count:** `Between: 3`, `End: 3` (Triggers after the 3rd user message)
*   **Actions:**
    *   **Set Flags:** `_character_entered = true` (Sets a flag indicating the character has entered)
    *   **Note:** `Narrator: A mysterious figure emerges from the shadows.` (Adds a note to the chat)

## VIII. Actions: Character Reactions and Behaviors

Actions define what happens when events are triggered or based on dialogue analysis. They are used to control character reactions, visual changes, and other dynamic behaviors.

### Action Triggering

*   **Events:** Actions are often triggered by Events. When an Event's conditions are met, its associated Actions are executed.
*   **Action Inference Dialogue:** Actions can also be triggered based on the AI's interpretation of the dialogue flow (action inference). This allows the AI to dynamically decide which actions to take based on the conversation context.

### Action Components

*   **Action Name:** Very important for AI processing. Use descriptive, lowercase names (e.g., `smile`, `sit_down`, `express_surprise`). Avoid cryptic or technical names (e.g., `jrs_045`).
*   **Layers:** Group actions together.
    *   **Layer Execution:** Only one action per layer/timing combination is selected per turn.
    *   **Alphabetical Order:** Layers are executed in alphabetical order.
    *   **Example Layers:** "Emotions" layer (smile, frown, laugh), "Movement" layer (sit\_down, stand\_up, walk).
    *   **Recommendation:** Minimize layer usage as they require a full inference pass per layer, which can be resource-intensive. Use layers when you need to categorize actions (e.g., emotion vs. movement).
*   **Timing (Action Execution):**  When the action should be executed.
    *   **After User:** After the user sends a message, before any character reply.
    *   **Before Char.:** Before a character replies to the user, another character, or an event.
    *   **After Char.:** After a character replies. Can occur before or during character speech.
    *   **Manually:** Triggered only by the `/trigger event_name` message.

### Action Prompts

Actions have two prompt fields to guide the AI's action inference:

*   **Prompt (Main Prompt):**
    *   **Purpose:** Explains to the AI when to choose this action.
    *   **Content:** Describe the conditions or situations that should trigger the action.
    *   **Example (sit_down action):** `When {{ char }} wants to sit down or when {{ user }} instructs it.`
*   **Short Desc. (Short Description Prompt - Optional):**
    *   **Purpose:** Helps the character be aware of the action they can perform.
    *   **Usage:** For larger actions like movements or complex behaviors.
    *   **Example (sit_down action):** `sit down`

### Action Conditions

Conditions within Actions further refine when an action is triggered.

*   **Target:** Filters which character role can perform the action.
*   **Match:** Regular expression to trigger the action only for specific words or patterns in messages.
    *   **Use Case:** Trigger actions only in response to specific user requests or keywords.
    *   **Resource Optimization:** Avoid unnecessary action inference passes by limiting action triggering to relevant situations.
*   **Once:** Limits action execution to a single occurrence.
    *   **Mechanism:** When enabled, sets an invisible flag `_event_name` and adds a `!_event_name` condition to the action.
    *   **One-Time Actions:** Useful for actions that should only happen once in a scenario (e.g., a character entering the scene).
*   **Flags:**  Use flag conditions to trigger actions based on the scenario state. (See section IX. Flags for details).

### Action Effects

*   **Set Flags:** Actions can set flags when executed, modifying the scenario state. (See section IX. Flags for details).

### Action Message Types (Note, Instructions, Secret, Event, Story)

Actions can output different types of messages to the chat:

*   **Note:** Visible to both user and characters, displayed as text in the scenario.
*   **Instruction:** Invisible to characters and narrator, for internal scenario logic or instructions.
*   **Secret:** Invisible to the user but visible to characters, providing hidden information to the AI.
*   **Event:** Visible to all, displays as text, and triggers a character reply. Can be read by a narrator if defined.
*   **Story:** Similar to "Event" in visibility and reply triggering, but "Story" messages are generated by the narrator (if present) instead of being pre-written.
    *   **Story Length Control:** For "Story" messages, you can specify `maximum tokens` and `maximum sentences` to control the length of the generated narrative.

### Action Scripting

*   **Script Tab (Action):** Actions can include scripts for more complex behaviors and interactions. (See section X. Scripts for details).

### Action Interface

*   **Reordering Contexts:** Contexts within an action can be reordered and will be used in the displayed order.
*   **Edit, Delete, Toggle:** Actions can be edited, deleted, or toggled off to disable them for testing or modification.

**Example: Action - Character Smiles**

*   **Action Name:** `smile`
*   **Layer:** `emotions`
*   **Timing:** `After User`
*   **Prompt:** `When {{ char }} is happy or amused by something the {{ user }} said.`
*   **Short Desc.:** `smile`
*   **Conditions:** (None for basic smile action)
*   **Effects:**
    *   **Note:** `Narrator: {{ char }} smiles warmly.` (Adds a note to the chat)
    *   **App Trigger (Voxta UI):** `Emote("😊")` (Sends a smile emoji to the chat)

## IX. Context: Guiding AI Responses

Context layers provide additional information to the AI before it generates a character response. This information is added to the chat prompt but is not directly visible to the user as a message.

### Context Triggering

*   **Flags:** Context layers are triggered by **flags**. When a specific flag is set, the associated context layer is activated.

### Context Functionality

*   **Prompt Augmentation:** Context layers add sentences to the chat prompt *before* the character's response is generated.
*   **AI Guidance:** Provides the AI with extra information to consider when formulating replies.
*   **Scenario Consistency:** Helps maintain consistency in the scenario by providing background details, character states, and narrative direction.

### Use Cases for Context Layers

*   **Environment Description:** Provide facts about the scenario setting or environment.
    *   Example: `Context: You are in a bustling marketplace filled with exotic goods and noisy merchants.`
*   **Character Pose/State:** Describe a character's current pose or physical state.
    *   Example: `Context: {{ char }} is leaning against the bar, looking thoughtful.`
*   **Character Feelings/Internal State:** Convey a character's emotions or internal thoughts.
    *   Example: `Context: {{ char }} is secretly worried about the upcoming mission.`
*   **Story Steering:** Subtly influence the story direction without the user being explicitly aware.
*   **Secret Character Information:** Provide information to characters that the user is not privy to.

**Example: Context - Tavern Setting**

*   **Context Name:** `tavern_setting`
*   **Conditions:**
    *   **Flags:** `_in_tavern = true` (Triggered when the `_in_tavern` flag is set)
*   **Context Prompt:** `You are currently in a dimly lit tavern. The air is thick with the smell of ale and woodsmoke. Patrons chatter and laugh around you.`

## X. Conditions: Logic for Dynamic Features

Conditions are the logical rules that control when Events, Actions, and Context layers are activated. They are a central feature for creating dynamic scenarios.

### Condition Types

*   **Flags:** Boolean variables that represent the state of the scenario.
    *   **Flag-Based Triggering:** Events, Actions, and Context can be triggered based on the state of flags (set or unset).
    *   **Flag Control:** Flags can be set and unset by Actions, Events, and Scripts, creating a system of state management for the scenario.
    *   **Looping Events and Chat Time Control:** Flags can be used to manage repeating events and control the reference point for chat time-based events.
*   **Action Inference Dialogue:** Actions can be directly triggered by the AI's interpretation of the dialogue, enabling dynamic responses based on conversation flow.
*   **Probability:** Adds a chance-based element to triggering.
    *   **Combined with Other Conditions:** Probability is always used in conjunction with other condition types (e.g., Probability + Messages Count).
    *   **Random Event Occurrence:** Introduces variability and unpredictability into scenarios.
*   **Messages Count:** Triggered based on the number of messages exchanged in the scenario.
    *   **Message Range:** Define a range using "between" and "end" fields to trigger events after a specific number of messages.
    *   **Counter Control:** The message counter starts at the first message by default but can be linked to flags for custom counter management.
*   **Chat Time:** Triggered based on real-time elapsed during the chat session.
    *   **Time-Based Events:** Enables events that occur after a certain duration of interaction.
    *   **Time Reference Control:**  Defaults to chat start time but can be linked to flags to use different starting times for time-based triggers.

## XI. Scripts: Advanced Scenario Programming

Scripts provide a powerful way to add custom logic and functionality to Voxta scenarios using Javascript.

### Script Types

*   **Initialization Script:**
    *   **Execution Timing:** Runs automatically when the chat session starts.
    *   **Purpose:** Scenario setup, initializing variables, setting initial flags, and performing actions at the beginning of the scenario.
*   **Scenario Script:**
    *   **Referencing:** Can be called and executed by Actions and Events within the scenario.
    *   **Purpose:** Implement reusable logic, complex calculations, or custom functions that can be triggered from different parts of the scenario.
*   **Stage Script:**
    *   **Referencing:** Can also be called by Actions and Events.
    *   **Purpose:** Likely related to interacting with the chosen "Stage" (e.g., Vxar UI or external stages like Verto), potentially for visual updates or stage-specific actions.

### Scripting Features

*   **Import Functionality:** Scripts can import modules from `@voxta/scenario` and `@voxta/stage`.
    *   **Module System:** Suggests a modular architecture for extending scenario and stage capabilities.
    *   **Pre-built Functions:** These modules likely provide pre-built functions and utilities for scenario and stage interaction.
*   **App Triggers (Scripting Integration):** Scripts can call "app triggers" to interact with the Voxta UI or connected applications like Virt-A-Mate.
    *   **Voxta UI Triggers (Voxta.Talk):**
        *   `Emote(emoji?: string, color?: string)`: Send an emoji message to the chat.
        *   `SelectView(view: ChatView)`: Change chat view (`talk`, `portrait`, `chat`).
        *   `SetAvatar(assetPath: string, characterId?: string, applyToCharacterId?: string, until?: AvatarExpiration)`: Change character avatar image using character assets.
        *   `SetAvatarFromScenario(assetPath: string, applyToCharacterId?: string, until?: AvatarExpiration)`: Change avatar image using scenario assets (or narrator image).
        *   `PlayCharacterAudio(assetPath: string, characterId?: string, method: AudioMethod)`: Play audio from character assets.
        *   `PlayScenarioAudio(assetPath: string, method: AudioMethod)`: Play audio from scenario assets.
        *   `queueAppTrigger(triggerName: string, ...args: any[])`: Queue app triggers to be played after speech.
    *   **Virt-A-Mate Triggers (Voxta.VirtAMate):** (See separate Virt-A-Mate documentation for details).

**Example: Script - Emote Trigger**

```javascript
import { chat } from "@voxta";

export function trigger(e) {
    // Voxta UI Emote trigger with the emoji and color arguments
    chat.appTrigger("Emote", "🌳", "#00ff00");
}
```

**Example: Script - Change Avatar**

```javascript
import { chat } from "@voxta";

export function trigger(e) {
    chat.appTrigger("SetAvatar", "Avatars/Laugh.png");
}
```

**Example: Script - Play Scenario Audio (Sound Effect)**

```javascript
import { chat } from "@voxta";

export function trigger(e) {
    chat.appTrigger('PlayScenarioAudio', 'Sounds/ping.mp3', 'sfx');
}
```

## XII. Message Types: Controlling Message Visibility and Function

Voxta provides different message types to control how messages are displayed and function within a scenario.

### Message Type Descriptions

*   **Note:**
    *   **Visibility:** Visible to both the user and all characters in the scenario.
    *   **Display:** Appears as standard text in the chat.
    *   **Function:** Primarily for informational messages, scene descriptions, or narrator commentary that all participants should see.
*   **Instruction:**
    *   **Visibility:** **Invisible** to characters and the narrator.
    *   **Purpose:** For internal scenario instructions, logic, or developer notes that are not meant to be seen by the user or AI.
*   **Secret:**
    *   **Visibility:** **Invisible** to the user but **visible** to characters.
    *   **Purpose:** To provide information to the AI characters without the user's knowledge. Useful for setting up character knowledge, hidden objectives, or internal states.
*   **Event:**
    *   **Visibility:** Visible to everyone (user and characters).
    *   **Display:** Appears as text in the chat.
    *   **Function:** Triggers a character reply after being displayed. Can be read by a narrator if a narrator role is defined in the scenario.
    *   **Purpose:** To introduce events, advance the plot, or initiate character interactions that require a response.
*   **Story:**
    *   **Visibility:** Visible to everyone (user and characters).
    *   **Display:** Appears as text in the chat.
    *   **Function:** Similar to "Event" in visibility and triggering character replies. However, "Story" messages are **generated by the narrator** role (if defined) instead of being pre-written.
    *   **Purpose:** To add narrative descriptions, set the scene, or provide ongoing story elements through a narrator's voice.

### Story Message Customization

*   **Token Limit:** For "Story" messages, you can specify the `maximum tokens` to control the length of the generated text.
*   **Sentence Limit:** You can also specify the `maximum sentences` to control the length of "Story" messages based on sentence count.
*   **Length Control:** These settings allow you to tailor the length and detail of narrator-generated story segments.

## XIII. Naming Conventions for AI Processing

Consistent and descriptive naming is crucial for Events, Actions, and Context layers, as these names are processed by the AI/LLM for action inference.

### Best Practices for Naming

*   **Simplicity:** Use simple, straightforward names.
*   **Descriptiveness:** Names should clearly indicate the purpose or function of the Event, Action, or Context.
*   **Lowercase:** Use lowercase letters for names.
*   **Underscores and Numbers:**  Use underscores (`_`) and numbers if needed for clarity or organization.
*   **Avoid Special Characters:**  Refrain from using capital letters and special characters in names.

**Examples of Good Action Names:**

*   `smile`
*   `frown`
*   `sit_down`
*   `stand_up`
*   `express_surprise`
*   `narrator_describes_scene`

**Examples of Bad Action Names:**

*   `jrs_045` (Cryptic and meaningless)
*   `Action1` (Generic and undescriptive)
*   `SIT_DOWN` (Uses capital letters)
*   `Smile!` (Uses special characters)

By following these naming conventions, you improve the AI's ability to correctly interpret and trigger Events, Actions, and Context layers, leading to more reliable and predictable scenario behavior.

## XIV. Conclusion

This comprehensive documentation provides a detailed overview of Voxta scenario creation, covering characters, roles, scenario settings, chat flow, and advanced features like Events, Actions, Context, Scripts, and Message Types. By understanding and utilizing these elements, you can create rich, interactive, and dynamic AI-driven experiences in Voxta. Part 2 video documentation, in particular, focuses on the advanced features essential for building complex and engaging scenarios. Experimentation and practice with these tools are key to mastering Voxta scenario creation.
```