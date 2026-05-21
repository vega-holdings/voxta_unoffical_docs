
Voxta supports scripting in scenarios, scenarios, events and actions. Scripts use JavaScript modules, and supports most modern features of JavaScript. Scripts can be used to generate replies, modify state, and interact with the app running the chat.

Because scripts are modules, you can `import { chat} from "@voxta";` to access Voxta’s chat state, and you can use `import` with scenario scripts ( `import { myCode } from "./my_file";`). Scripts live for the duration of the chat instance, so if you exit the chat, variables will be reset; use `chat.setFlags()` and `chat.variables` to persist data across chat sessions.

## Triggers

Scripts must export a function called `trigger`, that will be called when the event or action happens.

```js
import { chat } from "@voxta";

export function trigger(e) {
    // Your code here
}

```

## The `chat` object

You can import the `chat` object from the `@voxta` package to act on the current chat.

### Sending a message

You can use script to generate replies. Here is an example of all possible reply types you can see. See [Messages](https://doc.voxta.ai/docs/messages) for more information.

```js
export function trigger(e) {
    // Message types:
    chat.instructions('Instructions');
    chat.note('Note');
    chat.secret('Secret');
    chat.event('Event');
    chat.story('Story');
    // Write as the user
    chat.userMessage('User');
    // Write as the character
    chat.characterMessage('Character');
    // Write as a character using their role
    chat.roleMessage('main', 'Your message here');
    // Customize the reply, e.g. generate a secret using story writer:
    chat.customMessage({
        // The role (User, Assistant, Event, Secret, Note or Instructions)
        role: 'Secret',
        // The text to write, or to send to the story writer
        text: 'Generated Secret',
        useStoryWriter: true,
        // Do not define for default; controls story writer generation
        maxNewTokens: 10,
        maxSentences: 5,
        // Do not define for default; whether to reply automatically
        triggerReply: false,
        // Do not define for default; whether to narrate
        narrate: false,
    });
}

```

Examples:

1. Trigger a reply as the user (you):

```js
import { chat } from "@voxta";

export function trigger(e) {
    chat.userMessage('Hey, How are you?');
}

```

![user reply](https://doc.voxta.ai/images/uploads/snag-0532.jpg)

2. Trigger a reply as a character:

```js
import { chat } from "@voxta";

export function trigger(e) {
    chat.characterMessage('Hey, I am Voxta, nice to meet you!');
}

```

![char reply](https://doc.voxta.ai/images/uploads/snag-0535.jpg)

3.Trigger a reply as a character with an assigned scenario role.

```js
import { chat } from "@voxta";

export function trigger(e) {
    chat.roleMessage('role2', 'How are you doing today?');
}

```

![role2 char](https://doc.voxta.ai/images/uploads/snag-0538.jpg)

### Character

You can get the main character by doing `e.character`

```js
import { chat } from "@voxta";

export function trigger(e) {
    const name = e.character.name;
}

```

You can also access other characters by their role, for example `chat.roles.role1`.

```js
import { chat } from "@voxta";

export function trigger(e) {
    const name = chat.roles.role1.name;
}

```

You can finally get all characters using `chat.characters`.

```js
import { chat } from "@voxta";

export function trigger(e) {
    chat.characters.forEach(c => {
        console.log("Character: " + c.name);
    });
}

```

### User

Get the user’s name using `e.user.name`.

```js
import { chat } from "@voxta";

export function trigger(e) {
    const name = e.user.name;
}

```

### Arguments

Get the action invocation arguments using `e.arguments["some_name"]` or `e.arguments.some_name`.

Note: Arguments can only be defined by providers at the moment.

```js
import { chat } from "@voxta";

export function trigger(e) {
    const speed = e.arguments.speed;
}

```

### Stateful variables and flags

You can use `variables` and `flags` to store data across chat sessions. `variables` is a map (dictionary) in which you can store values of integers, strings, booleans or floats. Flags are a set of values that can be present or missing, and can then be used to filter contexts and actions (see [Flags](https://doc.voxta.ai/docs/flags)).

```js
export function trigger(e) {
    // Set a variable
    chat.variables.myVariable = 123;
    // Or
    chat.set("myVariable", 123);
    // Get a variable, remember that it can be undefined!
    const myVariable1 = chat.variables.myVariable;
    // Or, using a default value
    const myVariable2 = chat.get("myVariable", 0);
    // Set a single flag
    chat.setFlag('my_flag');
    // Replaces an enum flag (any my_flag.anything will be replaced by this)
    chat.setFlag('my_flag.enum_value');
    // Unset a single flag
    chat.unsetFlag('my_flag); OR chat.setFlag('!my_flag);
    // Set multiple flag (set flag, set enum flag, unset flag)
    chat.setFlags('my_flag', 'my_enum_flag.enum_value', '!another_flag');
    // Check flags
    if (chat.hasFlag('my_flag')) {
        // Do something
    }
};

```

It is often a good idea to initialize values in your scenario initialization script, for example:

```js
import { chat } from "@voxta";

chat.addEventListener('start', () => {
    chat.variables.myVariable = 0;
});

```

Because those are normal variables, you can also do things like `chat.variables.counter++` or `chat.variables.score += 5` when they are correctly initialized.

### Expiring flags

You can set flags that expire after a certain amount of time. This is useful for temporary flags that should only be active for a short period of time, such as cooldowns.

```js
export function trigger(e) {
    // Set a flag that expires in 10 conversation messages (excluding events)
    chat.setFlag('cooldown_flag', { messages: 10 });

    // Set a flag that expires in 2 minutes
    chat.setFlag('cooldown_flag', { seconds: 2 * 60 });
};

```

### Enable or disable roles

Use this to toggle whether a character assigned to a role is included in the chat or not.

```js
    export function trigger(e) {
        chat.setRoleEnabled("role2", true);
    };

```

### App Triggers

This is a very powerful way to interact with the app running your chat. See your application’s documentation for more details on the triggers it provides.

```js
export function trigger(e) {
    // Trigger an app event, provide arguments as strings, booleans or floats
    chat.appTrigger('my_event', "arg1", "arg2");
};

```

You can also run app triggers in the messages queue, for example if you want a sound to play after some messages.

```js
export function trigger(e) {
    chat.queueAppTrigger('my_event', "arg1", "arg2");
};

```

### Set Context

When an action is triggered, you may want to set a context string such as `{{ char }} wearing a crown` to represent a change, instead of setting a flag and relying on the context tab.

```js
export function trigger(e) {
    // The flag parameter is optional
    chat.setContext("context_name", "{{ char }} is wearing a crown.", "my_flag");
};

```

You can also clear the context by omitting the second parameter.

### Chat Time

You can get the time in seconds since the chat started using `chat.time`.

## The `e` object

The `e` object is passed to the `trigger` function and contains information about the action and message.

### Message

You can read the role and text of the incoming message that triggered the script using `e.message`.

```js
export function trigger(e) {
    // NOTE: Role can be User, Assistant, Story, etc.
    const role = e.message.role;
    const text = e.message.text;
};

```

When the script is triggered by a character message, you can read the character’s name and scenario role using `e.character`.

```js
export function trigger(e) {
    // NOTE: This is the scenario role, e.g. role1
    const scenarioRole = e.character.scenarioRole;
    const name = e.character.name;
};

```

You can also access `id`, `senderId` (the character or user ID that sent the message), `index` (the index of the message), `conversationIndex` (only counting user and character messages), and `role` (which can be `Assistant`, `User`, `Event` etc.).

### After Speech

You may want to trigger the action after the character finishes talking. This is useful for playing sounds or animations after the character finishes speaking.

```js
export function trigger(e) {
    e.afterSpeech(() => {
        console.log('This will be called after speech completes');
    });
};

```

### Chat Flow

You can force the next reply to be a specific character or user, overriding the normal flow of the chat.

```js
import { chat } from "@voxta";

export function trigger(e) {
    // Force the next reply to be from a specific character
    e.chatFlow(chat.roles.main);
    // Force the next reply to be from the user
    e.chatFlow(chat.user);
};

```

### Evaluate Next Event

By default, when an event is evaluated, no other events are evaluated. You can force the next event to be evaluated by calling `e.evaluateNextEvent()`. This can be useful when you want an event to evaluate before others or if you need multiple events to work in tandem.

```js
export function trigger(e) {
    // Instead of stopping, the next valid event will be executed
    e.evaluateNextEvent();
};

```

## The `character` object

The `character` object has these properties:

- `id`: The character’s unique identifier.
- `name`: The character’s name.
- `scenarioRole`: The character’s role in the scenario.
- `assets`: A list of asset paths for that character.

## Import and Export

You can create reusable functions and values in scenario scripts. For example, in your scenario script you could define a function like this in a file named `lib`:

```js
import { chat } from "@voxta";

export function winRound(e, points) {
    const newScore = chat.set("score", chat.get("score", 0) + points);
    chat.note(`${e.character.name} won this round! The score is now: ${score} points`);
};

```

In your trigger, you can now use it like this:

```js
import { winRound } from './lib';

export function trigger(e) {
    winRound(e, 10);
};

```

You can also export variables, however remember than if you expert a scalar (e.g. `export let score = 5;`) you cannot update it, due to the way modules work. You should do instead `export let score = { value: 5 };` and then update it as `score.value += 10;`. Do prefer chat variables for anything that should be persisted.

## Dynamically defined actions

You can define actions in your scripts using `setActions`. The first parameter specifies the context key, and the second is an array of actions, same as if you defined them in the [actions tab](https://doc.voxta.ai/docs/actions/).

For action effects, you have to listen to the `action:action_name` event.

```js
import { chat } from '@voxta';

// Define actions dynamically
chat.setActions('my_context_key', {
    name: 'adjust_desk_height',
    layer: 'desk_control',
    timing: 'AfterAssistantMessage'
    description: 'Adjust the desk height, value must be between 0 (sitting) and 5 (standing)',
    arguments: [\
        { name: 'height', type: 'integer', description: 'Desk height, between 0 (sitting) and 5 (standing)' },\
    ],
});

// Listen to actions
chat.addEventListener('action:adjust_desk_height', (e) => {
  // Do stuff
});

```

## Event listeners

You can listen to events in the chat using `chat.addEventListener(event, callback)`. The callback will be called when the event happens. You can use this to trigger actions or modify the chat state.

List: start, userMessageReceived generating speechStart speechComplete

### Init event ( `init`)

The `init` event is triggered when starting a session, this is typically used to initialize local variables.

```js
import { chat } from "@voxta";

chat.addEventListener('init', () => {
    console.log("Initializing...");
});

```

### Start event ( `start`)

The `start` event is triggered when the chat begins, before any messages are sent.

Use `e.hasBootstrapMessages` to check if the chat has messages from either the character or the scenario.

```js
import { chat } from "@voxta";

chat.addEventListener('start', (e) => {
    console.log("Chat started!");
});

```

### Start event ( `resume`)

The `resume` event is triggered when an existing chat is loaded, before any messages are sent.

```js
import { chat } from "@voxta";

chat.addEventListener('resume', (e) => {
    console.log(`Chat resumed! Last message was ${e.message.text}`);
});

```

### Transcription started event ( `transcriptionStarted`)

The `transcriptionStarted` event is triggered when the user starts talking (at least two words).

```js
import { chat } from "@voxta";

chat.addEventListener('transcriptionStarted', (e) => {
    console.log(`User started talking...`);
});

```

### Transcription finished event ( `transcriptionFinished`)

The `transcriptionFinished` event is triggered when the user starts talking (at least two words).

```js
import { chat } from "@voxta";

chat.addEventListener('transcriptionFinished', (e) => {
    if (e.text) {
        console.log(`User said: ${e.text}`);
    } else {
        console.log(`User stopped talking...`);
    }
});

```

### User message received event ( `userMessageReceived`)

The `userMessageReceived` event is triggered when the user sends a message.

```js
import { chat } from "@voxta";

chat.addEventListener('userMessageReceived', (e) => {
    console.log(`User message received: ${e.message.text}`;
});

```

You can re-write the user’s message when receiving `userMessageReceived`:

```js
chat.addEventListener("userMessageReceived", (e) => {
    e.rewriteUserMessage(e.message.text.replace(/John/, 'Jane'));
});

```

### Generating reply event ( `generating`)

The `generating` event is triggered when the chat is generating a reply.

```js
import { chat } from "@voxta";

chat.addEventListener('generating', (e) => {
    console.log(`Generating reply from ${e.character.name}...`);
});

```

### Generating reply complete event ( `generatingComplete`)

The `generating` event is triggered when the chat is done generating a reply.

```js
import { chat } from "@voxta";

chat.addEventListener('generating', (e) => {
    console.log(`Generated reply from ${e.character.name}: ${e.message.text}`);
});

```

### Typing start event ( `typingStart`)

The `typingStart` event is triggered when the chat starts typing. Similar to `transcriptionStarted`.

```js
import { chat } from "@voxta";

chat.addEventListener('typingStart', (e) => {
    console.log('User has started typing...');
});

```

### Speech complete event ( `typingEnd`)

The `typingEnd` event is triggered when the chat stops typing. Similar to `transcriptionFinished`.

```js
import { chat } from "@voxta";

chat.addEventListener('typingEnd', (e) => {
    console.log(`User has stopped typing...`);
});

```

### Custom application events ( `app:*`)

The `app:` event is triggered when the client application dispatches it. The name of the event is therefore specific to the client.

```js
import { chat } from "@voxta";

chat.addEventListener('app:hover', (e) => {
    console.log(`User hovered over: ${e.arguments.limbName}`);
});

```

### Action events ( `action:*`)

The `action:` event is triggered when action inference is called. The name of the event is the one of the action, regardless of the layer or context key.

The `arguments` property contains any arguments provided with the action.

```js
import { chat } from "@voxta";

chat.addEventListener('action:my_action', (e) => {
    console.log(`Action ${e.action} called on layer ${e.layer} and context key ${e.contextKey} for character ${e.character.name} following message ${e.message.text} with argument myValue = '${e.arguments.myValue}'.`);
});

```
See [Studio](https://doc.voxta.ai/docs/scenarios/) for more information on how to use scenarios and app triggers.

## App Triggers

You can invoke Virt-A-Mate triggers from stages and scenarios.

To invoke an action trigger:

```js
import { chat } from "@voxta";

export function trigger(e) {
  // Play a Timeline animation on the Person atom
  chat.appTrigger(
    'Action',
    // The atom
    'Person',
    // The storable
    'plugin#2_VamTimeline.AtomPlugin',
    // The action name
    `Play ${name}`
  );
}

```

To invoke a storable param:

```js
import { chat } from "@voxta";

export function trigger(e) {
  // Set the Alpha value of the Mat storable on the Cube atom
  chat.appTrigger(
    // Can either be String, StringChooser, Bool, Float or Color
    'Float',
    // The atom
    'Cube',
    // The storable
    'Mat',
    // The param name
    `Alpha`,
    // The value
    0.5
  );
}

```
Using [scripting](https://doc.voxta.ai/docs/scripting), you can call triggers so that the chat and [scenario](https://doc.voxta.ai/docs/scenarios) can respond to events in the app.

### Voxta UI (Voxta.Talk)

Available triggers:

| Trigger | Description |
| --- | --- |
| `Emote(emoji?: string, color?: string)` | Send a message to the chat. |
| `SelectView(view: ChatView)` | Changes the chat mode to `talk`, `portrait` or `chat`. |
| `SetAvatar(assetPath: string, characterId?: string, applyToCharacterId?: string, until?: AvatarExpiration)` | Changes the avatar image to another using an asset from the character. |
| `SetAvatarFromScenario(assetPath: string, applyToCharacterId?: string, until?: AvatarExpiration)` | Changes the avatar image to another using an asset from the scenario. You can also use `'narrator'` as the `characterId` to set the narrator image. |
| `PlayCharacterAudio(assetPath: string, characterId?: string, method: AudioMethod)` | Plays a sound from the character assets. |
| `PlayScenarioAudio(assetPath: string, method: AudioMethod)` | Plays a sound from the scenario assets. |

Types:

| Type | Description |
| --- | --- |
| `ChatView` | `talk` (voice only), `portrait` (avatar view) or `chat` (full view). |
| `AudioMethod` | `voice` (queued), `music` (single track), `sfx` (plays immediately). |
| `AvatarExpiration` | `untilNextMessage` (waits for the next message to start), `untilEndOfSpeech` (stays until the current speech is complete), undefined (stays until end of session). |

Here are some examples of calling a trigger from an action:

#### Sends a tree emoji to the chat

```js
import { chat } from "@voxta";

export function trigger(e) {
    // Voxta UI Emote trigger with the emoji and color arguments
    chat.appTrigger("Emote", "🌳", "#00ff00");
}

```

![tree](https://doc.voxta.ai/images/uploads/snag-0107.gif)

#### Changes the chat mode to \`talk\`, \`portrait\` or \`chat\`

```js
import { chat } from "@voxta";

export function trigger(e) {
  chat.appTrigger("SelectView", "chat");

}

```

![chatview](https://doc.voxta.ai/images/uploads/chatview.gif)

#### Changes the avatar image to another using an asset from the character

```js
import { chat } from "@voxta";

export function trigger(e) {
  chat.appTrigger("SetAvatar", "Avatars/Laugh.png");
}

```

![avatarchange](https://doc.voxta.ai/images/uploads/avatarchange.gif)

#### Plays a sound from the character assets (voice)

> The voice will be queued with the speech, which is helpful for sounds like laughs, sighs, etc. It was created using character audio. Note that the character ID can be left undefined to automatically select the current character (this works for “before/after character” but not for “after user,” as the speaker is not yet determined).

```js
import { chat } from "@voxta";

// You need to place your audio files in the character assets folder.
export function trigger(e) {
  chat.appTrigger('PlayCharacterAudio', 'Sounds/laugh.wav', undefined, 'voice');
}

```

#### Plays a sound from the scenario assets (voice)

```js
import { chat } from "@voxta";

// You need to place your audio files in the scenario assets folder.
export function trigger(e) {
  chat.appTrigger('PlayScenarioAudio', 'Sounds/laugh.wav', undefined, 'voice');
}

```

#### Play Queued Audio Playback After Speech

> Plays the audio right after the character finishes talking

```js
import { chat } from "@voxta";

// You need to place your audio files in the scenario assets folder.
export function trigger(e) {
  chat.queueAppTrigger('PlayScenarioAudio', 'Sounds/ping.mp3', 'sfx');
}

```

#### Plays a sound from the scenario assets (sound effect)

> Playing sfx will just play it right away

```js
import { chat } from "@voxta";

export function trigger(e) {
  chat.appTrigger('PlayScenarioAudio', 'Sounds/ping.mp3', 'sfx');
}

```

#### Plays a sound from the scenario assets (music)

> Music plays one track at a time and will stop when exiting the chat

```js
import { chat } from "@voxta";

export function trigger(e) {
  chat.appTrigger('PlayScenarioAudio', 'Sounds/music.mp3', 'music');
}

```

### Virt-A-Mate Triggers (Voxta.VirtAMate)

See [Virt-A-Mate](https://doc.voxta.ai/vam/app-triggers) for more information.


Actions use action inference to determine what action to take before or after a message. This is used to make visual reactions, such as smiling or moving around.

## Action name

Action names are very important, this is what the LLM will need to generate. For example, avoid action names like `jrs_045` and prefer action names such as `smile`, `sit_down` etc. Only use lower case letters, numbers and underscores.

## Layers

Layers are used to group actions together. Only one action by layer/timing can be selected per turn, and all layers will be executed in alphabetical order.

A good example of layers could be having an emotions layer (smile, frown, etc.) and a movement layer (sit\_down, stand\_up, etc.). It is recommended to avoid layers when possible, since they require a full inference pass for each layer.

## Timing

When should be action be executed.

- After User: After the user sends a message, before any character reply.
- Before Char.: Before a character replies to the user, another character or an event.
- After Char.: After a character replies. This can happen before or while the character is speaking.
- Manually: The only way to trigger this event is by sending a `/trigger event_name` message.

## Prompt

There are two prompts for actions. The main `prompt` is what is shown to action inference and should explain when to choose that action. For example, `sit_down` could have `When {{ char }} wants to sit down or when {{ user }} instructs it.` The `short desc.` prompt is optional, and will help make the character aware that they can do that action. For example, `sit_down`’s short description could be `sit down`. Use this fields for larger actions such as moving around.

## Conditions

### Target

Filters which role can do the action.

### Match

Allows specifying a regular expression to only react to specific words or patterns. This can be useful for actions that should only be triggered in response to a request, or to avoid running an action inference layer unless necessary, saving resources.

### Once

When enabled, this filter will automatically set an invisible `_event_name` flag, and a `!_event_name` condition so the action can only be executed once.

### Flags

See [Flags](https://doc.voxta.ai/docs/flags/) for more information on flag conditions.

## Effects

### Set Flags

Set flags when the action is executed. See [Flags](https://doc.voxta.ai/docs/flags/) for more information.

## Note, Instructions, Secret, Event, Story

See [Messages](https://doc.voxta.ai/docs/messages/) for more information on the different type of messages.

For story, you can also specify the maximum tokens and maximum sentences to generate. This allows you to make shorter or longer stories as needed.

## Script

See [Scripting](https://doc.voxta.ai/docs/scripting/) for more information.

## Interface

You can reorder contexts, they will be used in the order they are displayed. You can also edit or delete them. Toggle them off to prevent them from being used, e.g. for testing.
Most dynamic fields, such as a character’s profile or a scenario, can contain replacements and conditions. The syntax uses [Scriban](https://github.com/scriban/scriban/blob/master/doc/language.md), a templating language that allows you to create complex expressions and conditions.

Here is an example of what you can do:

```scriban
{{ user }} and {{ char }} finally arrive to the designated location.
{{~ if has_flag "night" ~}}
It was dark, they had no idea where the box was.
{{~ else ~}}
It was day, they could clearly see the box.
{{~ end ~}}

```

No all fields are supported in all contexts.

| Template | Type | Description |
| --- | --- | --- |
| `user` | `text` | The user’s name |
| `user_description` | `text` | The user’s description |
| `char` | `text` | The main character’s name |
| `char_description` | `text` | The main character’s appearance |
| `char_personality` | `text` | The main character’s personality |
| `char_profile` | `text` | The main character’s profile |
| `char_has_tag "tag_name"` | `function` | Check whether the character has a given tag on it |
| `explicit` | `boolean` | If the scenario or one character is marked as explicit |
| `now` | `text` | The date and time (if the character is time aware and the scenario is not roleplay) formatted in the character’s culture |
| `last_function_call` | `ActionInvocation` | The last action that was invoked. Has `name`, `signature`, `short` and `timestamp` (relative) properties. |
| `character` | `Character` | The main character. Has `id`, `name`, `tags`, `description`, `personality` and `profile`. |
| `chars` | `string[]` | All character names in the scenario. |
| `characters` | `Character[]` | All characters in the scenario. |
| `other_chars` | `string[]` | All character names in the scenario except the main one. |
| `other_characters` | `Character[]` | All characters in the scenario except the main one. |
| `scenario` | `string` | The scenario text. |
| `scenario_chars` | `{ [role: string]: string }` | Character names by role. For example, `scenario_chars.main`. |
| `scenario_characters` | `{ [role: string]: Character }` | Characters by role. For example, `scenario_characters.main.id`. |
| `has_flag "flag_name"` | `function` | Check whether the chat has a given [flag](https://doc.voxta.ai/doc/flags/) on it |
| `variables.variable_name` | `function` | Get a chat variable for printing or conditions, see [scripting](https://doc.voxta.ai/doc/scripting/) |
| `context` | `string[]` | The list of all resolved contexts |
| `chat_flow` | `string` | The chat flow, e.g. `Story` or `Chat`. |
| `chat_style` | `string` | The style of chat, e.g. `Companion`, `Storytelling`, `Roleplay`, `Assistant`. |

## Flags in Voxta

Flags are a simple yet powerful way to determine which actions and contexts are applicable at any moment in time. They are a simple list of strings, for example `is_thirsty`, `wears_hat`, etc. You can then use these flags to filter actions (e.g. filter out the action `remove_hat` when `wears_hat` is set) and contexts (only show `{{ char }} is thirsty` when `is_thirsty` is set).

Flags can be used in conditions, scripts, and can be set directly from actions too.

## Enum Flags (Exclusive Flags)

Some flags are mutually exclusive, and it quickly can become a pain to unset all variants of that flag. A typical example would be if you have a character that can be `standing`, `sitting`, `dancing` or `crouching`, you would have to unset all other flags when setting one. To make this easier, you can use enum flags.

To simplify this, Voxta supports **enum flags** using a **dot-separated syntax**:

```json
pose.standing
pose.sitting
pose.dancing

```

An enum flag uses the syntax `flag.value`. If you set the flag `pose.standing`, then if you had a flag such as `pose.sitting` before, it will automatically be unset.

## Unsetting flags

It is possible to set a flag by prefixing it with `!`, which will un-set it. For example, if you have the flag `standing` and you set `!standing`, this will remove the flag `standing`.

For enums, the behavior is slightly different. If you have `pose.standing` and you set `!pose.standing`, the flag `pose.standing` will be removed, but if you had the flag `pose.sitting`, it will remain. If you use `!pose` however, all `pose.*` flags will be removed.

## Flag conditions

You can make actions and contexts dependent on a specific set of flags using basic javascript-like conditions.

The simplest examples would be:

- `pose.standing`: Only if the flag `pose.standing` is set.
- `!pose.standing`: Only if the flag `pose.standing` is not set.

But you can also combine flags:

- `pose.standing && !door.closed`: Only if the flag `pose.standing` is set and the flag `door.closed` is not set.
- `hold.empty_bottle || hold.empty_glass`: Only if one of the flags `hold.empty_bottle` or `hold.empty_glass` is set.

You can also use `()` to group conditions.

## Message Types

There are a few special message types that you can use in your scenarios:

- 👁 Char. means visible by the character;
- 👁 User means visible by the user (you);
- Reply means that the message triggers a follow-up reply;
- Narrated only applies in scenarios with a narrator, whether the text will be read;

| Template | Command | Description | 👁 Char. | 👁 User | Reply | Narrated |
| --- | --- | --- | --- | --- | --- | --- |
| `{{ char }}` | N/A | A message from the first character in the chat | YES | YES | YES | N/A |
| `{{ user }}` | `your message` | A message from the user | YES | YES | YES | N/A |
| `{{ scenario_chars.your_role_name }}` | N/A | A message from a character assigned to a scenario or stage role | YES | YES | YES | N/A |
| `{{ event }}` | `/event text` | A narrated event | YES | YES | YES | YES |
| `{{ story }}` | `/story prompt` | A narrated event generated by the story writer | YES | YES | YES | YES |
| `{{ note }}` | `/note text` | A silent note | YES | YES | NO | NO |
| `{{ secret }}` | `/secret text` | A hidden note | YES | NO | NO | NO |
| `{{ instructions }}` | `/instructions text` | Information for the user | NO | YES | NO | NO |
| N/A | `/noreply text` | A user message that does not trigger a reply | YES | YES | NO | N/A |

## Custom Messages

You can also create fully custom messages using `/message`, or `customMessage` using [scripting](https://doc.voxta.ai/docs/scripting/).

The syntax is `/message --arg1 "value1" --arg2 --etc -- message`.

Arguments:

| Name | Value | Description |
| --- | --- | --- |
| role | `Secret`, `Note`, `Instructions`, `Event`, `User`, `Assistant` | The type of message |
| character | `"character name"` | The name of the character |
| scenario-role | `role_name` | The name of the scenario role |
| use-story-writer | `boolean` | Use the story writer to generate the message |
| max-new-tokens | `number` | The maximum number of new tokens to generate |
| max-sentences | `number` | The maximum number of sentences to generate |
| reply | `boolean` | The message triggers a follow-up reply |
| narrate | `boolean` | The message is narrated |
| `--` | `string` | The message content (until the end of the block) |

Examples:

Generate a secret message using the story writer:

```bash
/message --role Secret --use-story-writer --max-new-tokens 200 --max-sentences 2 -- Then something incredible happens!

```

Write a message as one of the characters:

```bash
/message --character "Catherine" -- Hi! It's me, Catherine!

```

Write a message as one of the scenario roles:

```bash
/message --scenario-role "main" -- I'm this story's main character.

```

Write a note but disable narration for it

```bash
/message --role Note --narrate false -- A loud noise is heard in the distance.

```
Scenarios are a powerful way to define actions and events, either for storytelling or to better support your app or scene.

Scenarios are backed by Stages, which are very similar to scenarios.

- Stage: Integration capabilities of the application or scene. For example, if the character is in a room and can sit down or stand up, the stage would define the actions, when they can happen, and how to inform the AI.
- Scenario: Defines the situation in which the character finds themselves. For example, while the stage states that the character can stand up or sit down, the scenario would define that the character is in a virtual room, meeting the user for the first time. Scenarios can also define their own actions, as well as define events to do drive roleplay or storytelling.

For example, if you are building your own application, you may want to make a Stage to map all of your application capabilities (standing up, sitting down, etc.) and use Scenario to define the situation in which the character and the user finds themselves (you are a desktop avatar, etc.).

## Tabs

### General

- Stage (Scenarios Only): In Scenarios, you can specify the stage in which your scenario happens. When the app lists available scenarios, it will only list the ones that matches its stage. Scenarios that define a stage MUST have the exact same list of roles as the stage.
- Chat Flow (Scenarios Only): Chat is the normal mode in which you and one or multiple avatars can discuss. Story excludes the user completely from the conversation.
- Attached Memory Book (Scenarios Only): Provides additional information about the world for this scenario.
- Narrator (Scenarios Only): The narrator is the voice used to read events.
- App (Stages Only): The app that this stage is for. This is what allows a given stage to be provided as an option for apps that supports more than one stage (e.g. Virt-A-Mate).

### Roles

Roles are placeholders for characters in chats. You can assign characters to roles in scenarios, and optionally disable them by default (for example, when you want to introduce some characters later following an event).

The Name of the role is important, it will be used to reference your role in templates. You can either use `{{ char }}` to specific the _first role_, or `{{ scenario_roles.your_role_name }}` to refer to the name of a character assigned to that role.

### Scenario

#### Scenario Template

The Scenario field is a template used to override the character’s template. If not set, the first character’s scenario will be used.

#### Bootstrap Messages

The Boostrap Messages is used to kickstart the chat, and override the character’s greeting. Here is a list of all possible messages you can create. See [Messages](https://doc.voxta.ai/docs/messages/) for more information on the different type of messages.

```scriban
{{ char }}: The first character
{{ user }}: The user
{{ scenario_chars.your_role_name }}: A specific character in the chat
{{ event }}: A narrated event, visible to the character and the user
{{ note }}: A silent note, visible to the character and the user
{{ secret }}: A silent note, visible only to the character
{{ instructions }}: A silent note, visible only to the user

```

Those messages will be created one after the other.

You can also finish your bootstrap with `{{ user }}: ...` to allow the user to start the conversation.

### Scripts

The initialization script will be run when the chat is started.

The Scenario Script and Stage Script can be referenced by actions and events, using `import { your_exports } from "@voxta/scenario";` and `import { your_exports } from "@voxta/stage";` respectively.

See [Scripts](https://doc.voxta.ai/docs/scripting/) for more information.

### Events

Events are used to drive roleplay or storytelling. They can be triggered at specific times or following specific messages.

See [Events](https://doc.voxta.ai/docs/events/) for more information.

### Actions

Actions use action inference to determine what action to take before or after a message. This is used to make visual reactions, such as smiling or moving around.

See [Actions](https://doc.voxta.ai/docs/actions/) for more information.

### Contexts

Contexts are sentences added to the chat prompt just before the character’s answer, providing context to the reply. It can contain facts about the environment, the pose, or the character’s feelings.

See [Contexts](https://doc.voxta.ai/docs/contexts/) for more information.

### Impersonation

In some scenarios, you may want to play a role rather than “being yourself” This allows you to override your name and your description for the scenario.

Characters are the AI personalities you can interact with. They are the core of Voxta, and you can create as many as you want.

![](https://doc.voxta.ai/images/uploads/snag-0422.jpg)

Check out this video for instructions on settings up your own characters

Creating an AI Character in Voxta - YouTube

Voxta

6.22K subscribers

[Creating an AI Character in Voxta](https://www.youtube.com/watch?v=1oP74QMwNHM)

Voxta

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=1oP74QMwNHM)

0:00

0:00 / 3:57•Live

•

[Watch on YouTube](https://www.youtube.com/watch?v=1oP74QMwNHM "Watch on YouTube")

# Edit Character

This page is where users craft their AI characters. The page is laid out with various input fields and options that allow for the detailed customization of an AI’s appearance, personality, and interactive capabilities.

## Character

A character is an identity and a story for the AI.

![](https://doc.voxta.ai/images/uploads/snag-0533.jpg)

**Choose an Avatar**: Users can upload an avatar for their AI character here. The recommended dimension is 200x200 pixels to ensure proper display.

**Name:** A text field for entering the character’s name. This name is the primary identifier for the AI character within the Voxta ecosystem.

**Creator Name:** A text field where the user credits themselves as the creator of the AI character.

**Creator Notes:** An optional field for additional information or backstory to aid in the character’s development.

**Tags:** A feature for adding keywords that assist in categorizing and locating the AI character within the app.

## Character Card

The Character Card page lets you tell the AI character how to act and talk. You’ll give it a personality, look, and even write out how it should speak in certain situations.

![](https://doc.voxta.ai/images/uploads/snag-0534.jpg)

**Personality:** List traits that will shape how the AI character talks and reacts, like “caring” or “funny.”.

**Appearance:** Describe what the AI characte looks like, for example, “female, twenties, cool, dark hair.”

**Scenario:** Explain where the AI character fits into your life. Is it a friend, an assistant? This helps decide how it will respond to you.

**Message Examples:** Write out some lines you’d expect the AI character to say. This teaches it how to speak.

**First Message:** Set up a first greeting. This is what the AI character will say when it starts a chat.

**System Prompt:** Add any extra bits you want every message from the AI character to include. This will be appended to the default system prompt.

**Post History Instructions:** This part is for instructions that help the AI character stay on track with the conversation.

## Configuration

These settings are part of customizing how the AI interacts, taking into account language preferences, content restrictions, and user engagement to create a more personalized experience.

![](https://doc.voxta.ai/images/uploads/snag-0535.jpg)

**Culture (Language):** Select the language and regional settings for your AI character. This will adjust the AI’s language services to match your choice, ensuring it uses appropriate regional formats and expressions.

**Explicit Content:** Flags it for NSFW content. You can hide those characters in your profile options. Also Toggle this to let the AI character know if it can speak freely or needs to restrict its language. Turning this on informs the system prompt that the AI doesn’t have to filter its speech for adult content, allowing for more relaxed conversations.

**Notify When Away:** When enabled, the AI character will notice when there’s a break in the interaction and will acknowledge when you return. This makes the AI seem more attentive to your presence.

**Time Awareness:** This setting allows the AI character to have an understanding of the current time, which could influence its interactions, making them more context-relevant.

## Text To Speech (Voice)

![](https://doc.voxta.ai/images/uploads/snag-0539.jpg)

**Enable Thinking Speech**: When this is checked, it will play sounds to indicate that the AI is processing and generating a response.

**Default Voice:** This is the default voice selection for any text-to-speech service where you haven’t chosen a specific voice.
Events are used to drive roleplay or storytelling. They can be triggered at specific times or following specific messages.

Events are the same as actions, except that they are triggered automatically rather than relying on action inference.

See [Actions](https://doc.voxta.ai/docs/actions/) for more information on filters and triggers not defined here.

## Conditions

### Target, Match, Once and Flags

See [Actions](https://doc.voxta.ai/docs/actions/).

### Probability

The probability of the event being triggered. This will be on top of other conditions, therefore if you define that an event should have 50% probability and should happen between 5 and 10 messages after a flag, at the 5th message the probability will be 10% (half of 20%), and at the 10th message the probability will be 50% until the event is triggered.

### Messages Count

The number of messages that should be sent before the event is triggered. This is useful to trigger events after a certain amount of time has passed.

By default, the messages count will be based on the start of the chat (you can see message numbers in the Voxta UI, in the inspector by clicking Show Hidden) but you can also specify a “since flag”, which will base the count on the last time the flag was set. This behavior can be used to make looping events! For example, you can make the message “5 message since flag my\_flag” and make that message set “my\_flag”, effectively making the event trigger every 5 messages.

### Chat Time

Works the same was as messages count, but based on the real time since the chat started or the last time the flag was set.

Keep in mind that chat time is always calculated from the last message’s time since chat start; that means that if you exit the chat one hour after a character’s message and come back, the chat time since the last message will be reset.

## Interface

You can reorder contexts, they will be used in the order they are displayed. You can also edit or delete them. Toggle them off to prevent them from being used, e.g. for testing.

## Useful event patterns

- You can specify a Set Flag “event1” after some event, and then for another event, you can specify “since flag event1” to trigger the event after the first one. This way, you can create long sequences and easily adjust the length between each part.
- You can also do branching by using a script to set one flag or another, and set a custom flag. For example, `go_left` and `go_right` can both set the flag `direction_chosen`, but each specify a different flag. You can create trees like this.
- An event can re-set a flag, if you need to create loops for example.

