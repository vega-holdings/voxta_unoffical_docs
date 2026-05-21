---
title: "Scripting"
url: "https://doc.voxta.ai/docs/scripting/"
scraped_at: "2025-12-19T04:37:56.664Z"
---
[Voxta Documentation](https://doc.voxta.ai/)
[](https://doc.voxta.ai/tools/search/)
  * [](https://doc.voxta.ai/docs/)
  * [Voxta Cloud](https://doc.voxta.ai/cloud/)
  * [Virt-A-Mate](https://doc.voxta.ai/vam/)
  * [Voxy](https://doc.voxta.ai/voxy/)


**Documentation** [What is Voxta?](https://doc.voxta.ai/docs/what-is-voxta/) [Getting Started](https://doc.voxta.ai/docs/getting-started/) **Installing** [Install Server](https://doc.voxta.ai/docs/install-server/) [Update Server](https://doc.voxta.ai/docs/update-server/) **Interface** [Menu](https://doc.voxta.ai/docs/menu/) [Chat](https://doc.voxta.ai/docs/chat/) [Profile](https://doc.voxta.ai/docs/profile/) [Characters](https://doc.voxta.ai/docs/characters/) [Services](https://doc.voxta.ai/docs/services/) [Add Service](https://doc.voxta.ai/docs/add-service/) [Wizard](https://doc.voxta.ai/docs/wizard/) [Benchmarks](https://doc.voxta.ai/docs/benchmarks/) [Chat History](https://doc.voxta.ai/docs/chat-history/) [Diagnostics](https://doc.voxta.ai/docs/diagnostics/) [Test Services](https://doc.voxta.ai/docs/test-services/) [Prompt Formatting](https://doc.voxta.ai/docs/prompt-formatting/) [Prompt Templates](https://doc.voxta.ai/docs/prompt-templates/) [Playgrounds](https://doc.voxta.ai/docs/playgrounds/) [Terminal](https://doc.voxta.ai/docs/terminal/) **Creator Studio** [Scenarios](https://doc.voxta.ai/docs/scenarios/) [Memory Books](https://doc.voxta.ai/docs/memory-books/) [Actions](https://doc.voxta.ai/docs/actions/) [Events](https://doc.voxta.ai/docs/events/) [Contexts](https://doc.voxta.ai/docs/contexts/) [Templates](https://doc.voxta.ai/docs/templates/) [Flags](https://doc.voxta.ai/docs/flags/) [Scripting](https://doc.voxta.ai/docs/scripting/) [App Triggers](https://doc.voxta.ai/docs/app-triggers/) [App Triggersv2](https://doc.voxta.ai/docs/app-triggersv2/) [Packages](https://doc.voxta.ai/docs/packages/) [Messages](https://doc.voxta.ai/docs/messages/) [Asset Formats](https://doc.voxta.ai/docs/asset-formats/) **Services** [Services Overview](https://doc.voxta.ai/docs/services-overview/) [✨ Voxta Cloud](https://doc.voxta.ai/docs/voxta-cloud/) [✨ F5-TTS](https://doc.voxta.ai/docs/f5-tts/) [✨ Coqui](https://doc.voxta.ai/docs/coqui/) [✨ Azure Speech Service](https://doc.voxta.ai/docs/azure-speech-service/) [✨ Deepgram](https://doc.voxta.ai/docs/deepgram/) [✨ ExLlamaV2](https://doc.voxta.ai/docs/exllamav2/) [✨ llama.cpp](https://doc.voxta.ai/docs/llama.cpp/) [✨ WhisperLive](https://doc.voxta.ai/docs/whisperlive/) [✨ ElevenLabs](https://doc.voxta.ai/docs/elevenlabs/) [✨ KoboldAI](https://doc.voxta.ai/docs/koboldai/) [✨ NovelAI](https://doc.voxta.ai/docs/novelai/) [✨ Text To Speech HTTP API](https://doc.voxta.ai/docs/text-to-speech-http-api/) [✨ OpenAI](https://doc.voxta.ai/docs/openai/) [✨ OpenAI Compatible](https://doc.voxta.ai/docs/openai-compatible/) [✨ OpenRouter](https://doc.voxta.ai/docs/openrouter/) [✨ Text Generation Web UI](https://doc.voxta.ai/docs/text-generation-web-ui/) [🔘 Silero](https://doc.voxta.ai/docs/silero/) [🔘 Vosk](https://doc.voxta.ai/docs/vosk/) [🚧 Azure Bing Search](https://doc.voxta.ai/docs/azure-bing-search/) [🚧 Text Generation Inference](https://doc.voxta.ai/docs/text-generation-inference/) [🚧 Windows Speech](https://doc.voxta.ai/docs/windows-speech/) [✨ ChromaDB](https://doc.voxta.ai/docs/chromadb/) [✨ Florence-2 Vision](https://doc.voxta.ai/docs/florence-2-vision/) [✨ Kokoro TTS](https://doc.voxta.ai/docs/kokoro-tts/) [NAudio](https://doc.voxta.ai/docs/naudio/) [Voxta Utilities](https://doc.voxta.ai/docs/voxta-utilities/) **Articles** [Large Language Models](https://doc.voxta.ai/docs/large-language-models/) [RunPod](https://doc.voxta.ai/docs/runpod/) [XTTS Server](https://doc.voxta.ai/docs/xtts-server/) [LLM Parameters](https://doc.voxta.ai/docs/llm-parameters/) [Troubleshooting & Solutions](https://doc.voxta.ai/docs/troubleshooting-solutions/) [Glossary](https://doc.voxta.ai/docs/glossary/) **FAQ** [Voxta Cloud Credits FAQ](https://doc.voxta.ai/docs/voxta-cloud-credits-faq/) [Voxta server FAQ](https://doc.voxta.ai/docs/voxta-server-faq/) [Voxta VAM plugin FAQ](https://doc.voxta.ai/docs/voxta-vam-plugin-faq/) **About** [Patreon](https://doc.voxta.ai/docs/patreon/) [Terms](https://doc.voxta.ai/docs/terms/) [AI Safety](https://doc.voxta.ai/docs/ai-safety/)
# Scripting
Voxta supports scripting in scenarios, scenarios, events and actions. Scripts use JavaScript modules, and supports most modern features of JavaScript. Scripts can be used to generate replies, modify state, and interact with the app running the chat.
Because scripts are modules, you can `import { chat} from "@voxta";` to access Voxta’s chat state, and you can use `import` with scenario scripts (`import { myCode } from "./my_file";`). Scripts live for the duration of the chat instance, so if you exit the chat, variables will be reset; use `chat.setFlags()` and `chat.variables` to persist data across chat sessions.
## Triggers
Scripts must export a function called `trigger`, that will be called when the event or action happens.
```
import { chat } from "@voxta";
export function trigger(e) {
    // Your code here
}

```

## The `chat` object
You can import the `chat` object from the `@voxta` package to act on the current chat.
### Sending a message
You can use script to generate replies. Here is an example of all possible reply types you can see. See [Messages](https://doc.voxta.ai/docs/messages) for more information.
```
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


```
import { chat } from "@voxta";
export function trigger(e) {
    chat.userMessage('Hey, How are you?');
}

```

![user reply](https://doc.voxta.ai/images/uploads/snag-0532.jpg)
  1. Trigger a reply as a character:


```
import { chat } from "@voxta";
export function trigger(e) {
    chat.characterMessage('Hey, I am Voxta, nice to meet you!');
}

```

![char reply](https://doc.voxta.ai/images/uploads/snag-0535.jpg)
3.Trigger a reply as a character with an assigned scenario role.
```
import { chat } from "@voxta";
export function trigger(e) {
    chat.roleMessage('role2', 'How are you doing today?');
}

```

![role2 char](https://doc.voxta.ai/images/uploads/snag-0538.jpg)
### Character
You can get the main character by doing `e.character`
```
import { chat } from "@voxta";
export function trigger(e) {
    const name = e.character.name;
}

```

You can also access other characters by their role, for example `chat.roles.role1`.
```
import { chat } from "@voxta";
export function trigger(e) {
    const name = chat.roles.role1.name;
}

```

You can finally get all characters using `chat.characters`.
```
import { chat } from "@voxta";
export function trigger(e) {
    chat.characters.forEach(c => {
        console.log("Character: " + c.name);
    });
}

```

### User
Get the user’s name using `e.user.name`.
```
import { chat } from "@voxta";
export function trigger(e) {
    const name = e.user.name;
}

```

### Arguments
Get the action invocation arguments using `e.arguments["some_name"]` or `e.arguments.some_name`.
Note: Arguments can only be defined by providers at the moment.
```
import { chat } from "@voxta";
export function trigger(e) {
    const speed = e.arguments.speed;
}

```

### Stateful variables and flags
You can use `variables` and `flags` to store data across chat sessions. `variables` is a map (dictionary) in which you can store values of integers, strings, booleans or floats. Flags are a set of values that can be present or missing, and can then be used to filter contexts and actions (see [Flags](https://doc.voxta.ai/docs/flags)).
```
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
```
import { chat } from "@voxta";
chat.addEventListener('start', () => {
    chat.variables.myVariable = 0;
});

```

Because those are normal variables, you can also do things like `chat.variables.counter++` or `chat.variables.score += 5` when they are correctly initialized.
### Expiring flags
You can set flags that expire after a certain amount of time. This is useful for temporary flags that should only be active for a short period of time, such as cooldowns.
```
export function trigger(e) {
    // Set a flag that expires in 10 conversation messages (excluding events)
chat.setFlag('cooldown_flag', { messages: 10 });
    // Set a flag that expires in 2 minutes
chat.setFlag('cooldown_flag', { seconds: 2 * 60 });
};

```

### Enable or disable roles
Use this to toggle whether a character assigned to a role is included in the chat or not.
```
    export function trigger(e) {
        chat.setRoleEnabled("role2", true);
    };

```

### App Triggers
This is a very powerful way to interact with the app running your chat. See your application’s documentation for more details on the triggers it provides.
```
export function trigger(e) {
    // Trigger an app event, provide arguments as strings, booleans or floats
chat.appTrigger('my_event', "arg1", "arg2");
};

```

You can also run app triggers in the messages queue, for example if you want a sound to play after some messages.
```
export function trigger(e) {
    chat.queueAppTrigger('my_event', "arg1", "arg2");
};

```

### Set Context
When an action is triggered, you may want to set a context string such as `{{ char }} wearing a crown` to represent a change, instead of setting a flag and relying on the context tab.
```
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
```
export function trigger(e) {
    // NOTE: Role can be User, Assistant, Story, etc.
const role = e.message.role;
    const text = e.message.text;
};

```

When the script is triggered by a character message, you can read the character’s name and scenario role using `e.character`.
```
export function trigger(e) {
    // NOTE: This is the scenario role, e.g. role1
const scenarioRole = e.character.scenarioRole;
    const name = e.character.name;
};

```

You can also access `id`, `senderId` (the character or user ID that sent the message), `index` (the index of the message), `conversationIndex` (only counting user and character messages), and `role` (which can be `Assistant`, `User`, `Event` etc.).
### After Speech
You may want to trigger the action after the character finishes talking. This is useful for playing sounds or animations after the character finishes speaking.
```
export function trigger(e) {
    e.afterSpeech(() => {
        console.log('This will be called after speech completes');
    });
};

```

### Chat Flow
You can force the next reply to be a specific character or user, overriding the normal flow of the chat.
```
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
```
export function trigger(e) {
    // Instead of stopping, the next valid event will be executed
e.evaluateNextEvent();
};

```

## The `character` object
The `character` object has these properties:
  * `id`: The character’s unique identifier.
  * `name`: The character’s name.
  * `scenarioRole`: The character’s role in the scenario.
  * `assets`: A list of asset paths for that character.


## Import and Export
You can create reusable functions and values in scenario scripts. For example, in your scenario script you could define a function like this in a file named `lib`:
```
import { chat } from "@voxta";
export function winRound(e, points) {
    const newScore = chat.set("score", chat.get("score", 0) + points);
    chat.note(`${e.character.name} won this round! The score is now: ${score} points`);
};

```

In your trigger, you can now use it like this:
```
import { winRound } from './lib';
export function trigger(e) {
    winRound(e, 10);
};

```

You can also export variables, however remember than if you expert a scalar (e.g. `export let score = 5;`) you cannot update it, due to the way modules work. You should do instead `export let score = { value: 5 };` and then update it as `score.value += 10;`. Do prefer chat variables for anything that should be persisted.
## Dynamically defined actions
You can define actions in your scripts using `setActions`. The first parameter specifies the context key, and the second is an array of actions, same as if you defined them in the [actions tab](https://doc.voxta.ai/docs/actions/).
For action effects, you have to listen to the `action:action_name` event.
```
import { chat } from '@voxta';
// Define actions dynamically
chat.setActions('my_context_key', {
    name: 'adjust_desk_height',
    layer: 'desk_control',
    timing: 'AfterAssistantMessage'
    description: 'Adjust the desk height, value must be between 0 (sitting) and 5 (standing)',
    arguments: [
        { name: 'height', type: 'integer', description: 'Desk height, between 0 (sitting) and 5 (standing)' },
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
### Init event (`init`)
The `init` event is triggered when starting a session, this is typically used to initialize local variables.
```
import { chat } from "@voxta";
chat.addEventListener('init', () => {
    console.log("Initializing...");
});

```

### Start event (`start`)
The `start` event is triggered when the chat begins, before any messages are sent.
Use `e.hasBootstrapMessages` to check if the chat has messages from either the character or the scenario.
```
import { chat } from "@voxta";
chat.addEventListener('start', (e) => {
    console.log("Chat started!");
});

```

### Start event (`resume`)
The `resume` event is triggered when an existing chat is loaded, before any messages are sent.
```
import { chat } from "@voxta";
chat.addEventListener('resume', (e) => {
    console.log(`Chat resumed! Last message was ${e.message.text}`);
});

```

### Transcription started event (`transcriptionStarted`)
The `transcriptionStarted` event is triggered when the user starts talking (at least two words).
```
import { chat } from "@voxta";
chat.addEventListener('transcriptionStarted', (e) => {
    console.log(`User started talking...`);
});

```

### Transcription finished event (`transcriptionFinished`)
The `transcriptionFinished` event is triggered when the user starts talking (at least two words).
```
import { chat } from "@voxta";
chat.addEventListener('transcriptionFinished', (e) => {
    if (e.text) {
        console.log(`User said: ${e.text}`);
    } else {
        console.log(`User stopped talking...`);
    }
});

```

### User message received event (`userMessageReceived`)
The `userMessageReceived` event is triggered when the user sends a message.
```
import { chat } from "@voxta";
chat.addEventListener('userMessageReceived', (e) => {
    console.log(`User message received: ${e.message.text}`;
});

```

You can re-write the user’s message when receiving `userMessageReceived`:
```
chat.addEventListener("userMessageReceived", (e) => {
    e.rewriteUserMessage(e.message.text.replace(/John/, 'Jane'));
});

```

### Generating reply event (`generating`)
The `generating` event is triggered when the chat is generating a reply.
```
import { chat } from "@voxta";
chat.addEventListener('generating', (e) => {
    console.log(`Generating reply from ${e.character.name}...`);
});

```

### Generating reply complete event (`generatingComplete`)
The `generatingComplete` event is triggered when the chat is done generating a reply.
```
import { chat } from "@voxta";
chat.addEventListener('generatingComplete', (e) => {
    console.log(`Generated reply from ${e.character.name}: ${e.message.text}`);
});

```

### Typing start event (`typingStart`)
The `typingStart` event is triggered when the chat starts typing. Similar to `transcriptionStarted`.
```
import { chat } from "@voxta";
chat.addEventListener('typingStart', (e) => {
    console.log('User has started typing...');
});

```

### Speech complete event (`typingEnd`)
The `typingEnd` event is triggered when the chat stops typing. Similar to `transcriptionFinished`.
```
import { chat } from "@voxta";
chat.addEventListener('typingEnd', (e) => {
    console.log(`User has stopped typing...`);
});

```

### Custom application events (`app:*`)
The `app:` event is triggered when the client application dispatches it. The name of the event is therefore specific to the client.
```
import { chat } from "@voxta";
chat.addEventListener('app:hover', (e) => {
    console.log(`User hovered over: ${e.arguments.limbName}`);
});

```

### Action events (`action:*`)
The `action:` event is triggered when action inference is called. The name of the event is the one of the action, regardless of the layer or context key.
The `arguments` property contains any arguments provided with the action.
```
import { chat } from "@voxta";
chat.addEventListener('action:my_action', (e) => {
    console.log(`Action ${e.action} called on layer ${e.layer} and context key ${e.contextKey} for character ${e.character.name} following message ${e.message.text} with argument myValue = '${e.arguments.myValue}'.`);
});

```

[](https://doc.voxta.ai/docs/flags/) [Next ](https://doc.voxta.ai/docs/app-triggers/)
  * [Triggers](https://doc.voxta.ai/docs/scripting/#triggers)
  * [The `chat` object](https://doc.voxta.ai/docs/scripting/#the-chat-object)
    * [Sending a message](https://doc.voxta.ai/docs/scripting/#sending-a-message)
    * [Character](https://doc.voxta.ai/docs/scripting/#character)
    * [User](https://doc.voxta.ai/docs/scripting/#user)
    * [Arguments](https://doc.voxta.ai/docs/scripting/#arguments)
    * [Stateful variables and flags](https://doc.voxta.ai/docs/scripting/#stateful-variables-and-flags)
    * [Expiring flags](https://doc.voxta.ai/docs/scripting/#expiring-flags)
    * [Enable or disable roles](https://doc.voxta.ai/docs/scripting/#enable-or-disable-roles)
    * [App Triggers](https://doc.voxta.ai/docs/scripting/#app-triggers)
    * [Set Context](https://doc.voxta.ai/docs/scripting/#set-context)
    * [Chat Time](https://doc.voxta.ai/docs/scripting/#chat-time)
  * [The `e` object](https://doc.voxta.ai/docs/scripting/#the-e-object)
    * [Message](https://doc.voxta.ai/docs/scripting/#message)
    * [After Speech](https://doc.voxta.ai/docs/scripting/#after-speech)
    * [Chat Flow](https://doc.voxta.ai/docs/scripting/#chat-flow)
    * [Evaluate Next Event](https://doc.voxta.ai/docs/scripting/#evaluate-next-event)
  * [The `character` object](https://doc.voxta.ai/docs/scripting/#the-character-object)
  * [Import and Export](https://doc.voxta.ai/docs/scripting/#import-and-export)
  * [Dynamically defined actions](https://doc.voxta.ai/docs/scripting/#dynamically-defined-actions)
  * [Event listeners](https://doc.voxta.ai/docs/scripting/#event-listeners)
    * [Init event (`init`)](https://doc.voxta.ai/docs/scripting/#init-event-init)
    * [Start event (`start`)](https://doc.voxta.ai/docs/scripting/#start-event-start)
    * [Start event (`resume`)](https://doc.voxta.ai/docs/scripting/#start-event-resume)
    * [Transcription started event (`transcriptionStarted`)](https://doc.voxta.ai/docs/scripting/#transcription-started-event-transcriptionstarted)
    * [Transcription finished event (`transcriptionFinished`)](https://doc.voxta.ai/docs/scripting/#transcription-finished-event-transcriptionfinished)
    * [User message received event (`userMessageReceived`)](https://doc.voxta.ai/docs/scripting/#user-message-received-event-usermessagereceived)
    * [Generating reply event (`generating`)](https://doc.voxta.ai/docs/scripting/#generating-reply-event-generating)
    * [Generating reply complete event (`generatingComplete`)](https://doc.voxta.ai/docs/scripting/#generating-reply-complete-event-generatingcomplete)
    * [Typing start event (`typingStart`)](https://doc.voxta.ai/docs/scripting/#typing-start-event-typingstart)
    * [Speech complete event (`typingEnd`)](https://doc.voxta.ai/docs/scripting/#speech-complete-event-typingend)
    * [Custom application events (`app:*`)](https://doc.voxta.ai/docs/scripting/#custom-application-events-app)
    * [Action events (`action:*`)](https://doc.voxta.ai/docs/scripting/#action-events-action)


[ ](https://voxta.ai/)
[ ](https://www.twitter.com/VoxtaAi) [ ](https://github.com/voxta-ai) [ ](https://www.youtube.com/@Voxta)
Made with [Docura](https://docura.github.io/)

---

## Related KB Articles

- [Managing Python Dependencies in Voxta](kb/troubleshooting/fixing-corrupted-python-installation-or-module-errors-nSf4V3.md)
- [Using the {{ char }} Placeholder](kb/configuration/using-the-char-placeholder-3ssNuo.md)
- [Changing Background Image via Script](kb/configuration/changing-background-image-via-script-3OajFF.md)
- [Managing Flags: Persistence and Expiration](kb/configuration/setting-expiring-flags-in-scripts--S_sPa.md)
