---
title: "Understanding Large Language Model Parameters"
url: "https://doc.voxta.ai/docs/llm-parameters/"
scraped_at: "2025-12-19T04:37:56.668Z"
---
[Voxta Documentation](https://doc.voxta.ai/)
[](https://doc.voxta.ai/tools/search/)
  * [](https://doc.voxta.ai/docs/)
  * [Voxta Cloud](https://doc.voxta.ai/cloud/)
  * [Virt-A-Mate](https://doc.voxta.ai/vam/)
  * [Voxy](https://doc.voxta.ai/voxy/)


**Documentation** [What is Voxta?](https://doc.voxta.ai/docs/what-is-voxta/) [Getting Started](https://doc.voxta.ai/docs/getting-started/) **Installing** [Install Server](https://doc.voxta.ai/docs/install-server/) [Update Server](https://doc.voxta.ai/docs/update-server/) **Interface** [Menu](https://doc.voxta.ai/docs/menu/) [Chat](https://doc.voxta.ai/docs/chat/) [Profile](https://doc.voxta.ai/docs/profile/) [Characters](https://doc.voxta.ai/docs/characters/) [Services](https://doc.voxta.ai/docs/services/) [Add Service](https://doc.voxta.ai/docs/add-service/) [Wizard](https://doc.voxta.ai/docs/wizard/) [Benchmarks](https://doc.voxta.ai/docs/benchmarks/) [Chat History](https://doc.voxta.ai/docs/chat-history/) [Diagnostics](https://doc.voxta.ai/docs/diagnostics/) [Test Services](https://doc.voxta.ai/docs/test-services/) [Prompt Formatting](https://doc.voxta.ai/docs/prompt-formatting/) [Prompt Templates](https://doc.voxta.ai/docs/prompt-templates/) [Playgrounds](https://doc.voxta.ai/docs/playgrounds/) [Terminal](https://doc.voxta.ai/docs/terminal/) **Creator Studio** [Scenarios](https://doc.voxta.ai/docs/scenarios/) [Memory Books](https://doc.voxta.ai/docs/memory-books/) [Actions](https://doc.voxta.ai/docs/actions/) [Events](https://doc.voxta.ai/docs/events/) [Contexts](https://doc.voxta.ai/docs/contexts/) [Templates](https://doc.voxta.ai/docs/templates/) [Flags](https://doc.voxta.ai/docs/flags/) [Scripting](https://doc.voxta.ai/docs/scripting/) [App Triggers](https://doc.voxta.ai/docs/app-triggers/) [App Triggersv2](https://doc.voxta.ai/docs/app-triggersv2/) [Packages](https://doc.voxta.ai/docs/packages/) [Messages](https://doc.voxta.ai/docs/messages/) [Asset Formats](https://doc.voxta.ai/docs/asset-formats/) **Services** [Services Overview](https://doc.voxta.ai/docs/services-overview/) [✨ Voxta Cloud](https://doc.voxta.ai/docs/voxta-cloud/) [✨ F5-TTS](https://doc.voxta.ai/docs/f5-tts/) [✨ Coqui](https://doc.voxta.ai/docs/coqui/) [✨ Azure Speech Service](https://doc.voxta.ai/docs/azure-speech-service/) [✨ Deepgram](https://doc.voxta.ai/docs/deepgram/) [✨ ExLlamaV2](https://doc.voxta.ai/docs/exllamav2/) [✨ llama.cpp](https://doc.voxta.ai/docs/llama.cpp/) [✨ WhisperLive](https://doc.voxta.ai/docs/whisperlive/) [✨ ElevenLabs](https://doc.voxta.ai/docs/elevenlabs/) [✨ KoboldAI](https://doc.voxta.ai/docs/koboldai/) [✨ NovelAI](https://doc.voxta.ai/docs/novelai/) [✨ Text To Speech HTTP API](https://doc.voxta.ai/docs/text-to-speech-http-api/) [✨ OpenAI](https://doc.voxta.ai/docs/openai/) [✨ OpenAI Compatible](https://doc.voxta.ai/docs/openai-compatible/) [✨ OpenRouter](https://doc.voxta.ai/docs/openrouter/) [✨ Text Generation Web UI](https://doc.voxta.ai/docs/text-generation-web-ui/) [🔘 Silero](https://doc.voxta.ai/docs/silero/) [🔘 Vosk](https://doc.voxta.ai/docs/vosk/) [🚧 Azure Bing Search](https://doc.voxta.ai/docs/azure-bing-search/) [🚧 Text Generation Inference](https://doc.voxta.ai/docs/text-generation-inference/) [🚧 Windows Speech](https://doc.voxta.ai/docs/windows-speech/) [✨ ChromaDB](https://doc.voxta.ai/docs/chromadb/) [✨ Florence-2 Vision](https://doc.voxta.ai/docs/florence-2-vision/) [✨ Kokoro TTS](https://doc.voxta.ai/docs/kokoro-tts/) [NAudio](https://doc.voxta.ai/docs/naudio/) [Voxta Utilities](https://doc.voxta.ai/docs/voxta-utilities/) **Articles** [Large Language Models](https://doc.voxta.ai/docs/large-language-models/) [RunPod](https://doc.voxta.ai/docs/runpod/) [XTTS Server](https://doc.voxta.ai/docs/xtts-server/) [LLM Parameters](https://doc.voxta.ai/docs/llm-parameters/) [Troubleshooting & Solutions](https://doc.voxta.ai/docs/troubleshooting-solutions/) [Glossary](https://doc.voxta.ai/docs/glossary/) **FAQ** [Voxta Cloud Credits FAQ](https://doc.voxta.ai/docs/voxta-cloud-credits-faq/) [Voxta server FAQ](https://doc.voxta.ai/docs/voxta-server-faq/) [Voxta VAM plugin FAQ](https://doc.voxta.ai/docs/voxta-vam-plugin-faq/) **About** [Patreon](https://doc.voxta.ai/docs/patreon/) [Terms](https://doc.voxta.ai/docs/terms/) [AI Safety](https://doc.voxta.ai/docs/ai-safety/)
# Understanding Large Language Model Parameters
Ever wondered why sometimes your virtual character sounds too formal or maybe a bit too random? That’s because their behavior is guided by something called Large Language Model Parameters. These settings act as the control panel for customizing your character’s speech. By fine-tuning them, you can make your AI friend communicate more to your liking. We’ll walk you through how to adjust these settings for more enjoyable conversations ahead.
> Note: All parameters and values described in this guide have been sourced from the Oobabooga Text Generation WebUI, a user-friendly interface for running and interacting with large language models. The examples provided are exaggerated illustrations designed to help users grasp how different parameters might function in real-world use cases with LLMs. While the name of the parameters may vary depending on the service you’re using, the core concepts remain consistent. It’s worth noting that due to the inherent differences between large language models, a setting that works effectively for one model might not produce the same results for another.
## Temperature
Range: `0.00` - `1.99`
Temperature is the key parameter that controls the randomness of your virtual character’s responses. In essence, it determines how “freewheeling” or “conservative” your AI friend will be when talking to you.
  * Low temperatures (near `0`) are deterministic. Your virtual character will always choose the most likely word or phrase, making them sound very predictable. If you want your virtual character to give more straightforward and predictable answers, keep the temperature low.
  * High temperatures (around `1.5` or more) are highly random. At this setting, your character is more likely to say something unexpected, creative, or even nonsensical. If you’re looking for more adventurous or unexpected responses, feel free to turn up the temperature, but be prepared for some quirks.
  * Typically, values around `0.7` provide a reasonable balance.


> Example 1: Temperature near `0.00`
>   * At a setting of near `0.00`, the model becomes deterministic, meaning it will always opt for the most likely response.
>   * Output: [The cat sat on the mat]
> 

> Example 2: Temperature `0.70`
>   * A moderate setting like `0.70` introduces some randomness but generally stays predictable.
>   * Output: [The cat sat on the couch]
> 

> Example 3: Temperature `1.50`
>   * Cranking it up to `1.50` makes your character highly unpredictable, potentially leading to creative or unusual outputs.
>   * Output: [The cat sat on the clouds of imagination]
> 

## Top_p
Range: `0.00` - `1.00`
Top_p, also known as “nucleus sampling,” is a parameter that affects the range of possible words your virtual character can use in its responses. Essentially, it controls how adventurous or conservative the model will be in choosing the next word.
  * Lower Top_p Value: To make the conversation more focused and predictable, opt for a lower top_p setting.
  * Higher Top_p Value: If you want your virtual character to give diverse and possibly unexpected answers, consider setting a higher top_p value.


If not set to 1, select tokens with probabilities adding up to less than this number. Higher value = higher range of possible random results.
> Example 1: top_p `0.5`
>   * Following probabilities for the next words: red + ripe = `0.4` + `0.25` = `0.65`
> 

> Example 2: top_p `0.8`
>   * Following probabilities for the next words: red + ripe + delicious + green + juicy = `0.4` + `0.25` + `0.1` + `0.05` + `0.03` = `0.83`
> 

> Example 3: top_p `0.95`
>   * With this higher value, many more words would be included in the set, even those with much lower probabilities. This would lead to more diverse and potentially more random completions.
> 

## Typical_p
Range: `0.00` - `1.00`
The [typical_p](https://arxiv.org/abs/2202.00666) parameter allows you to control how “conventional” or “creative” your virtual character’s responses will be. In simple terms, it sets a minimum threshold for how likely a word or phrase needs to be in order to be considered by the model.
If not set to 1, select only tokens that are at least this much more likely to appear than random tokens, given the prior text.
  * High Typical_p Value: If you prefer conversations that are more along the lines of what you’d expect, set a high “typical_p” value.
  * Low Typical_p Value: If you’re in the mood for something more unpredictable or creative, try setting a lower “typical_p” value.


> Example 1: typical_p is set to `1.00` (default)
>   * The model will generate based on its usual behavior. It might produce:
>   * “The cat is on the roof.”
> 

> Example 2: typical_p is set to a value less than 1 (e.g., `0.5`)
>   * The model might consider words that are less typical but still make some sense:
>   * “The cat is on the hunt.”
> 

> Example 3: typical_p is set to a very low value (close to `0`)
>   * This would allow even more unusual combinations, potentially leading to creative or nonsensical results:
>   * “The cat is on the rainbow.”
> 

## Top_k
Range: `0` - `200` words
The “top_k” parameter helps you control the diversity of words your virtual character can use in its responses. Unlike “top_p,” which works based on probabilities, “top_k” simply takes the top-most likely words and considers them for the next part of the sentence.
When “top_k” is set, the model only considers the ‘k’ most likely next words for its response. A higher “top_k” value means more word choices are available, making the conversation potentially more varied. A lower value limits the model to the most likely next words, making it more predictable.
  * Higher Top_k Value: If you want your virtual character to have more diverse word choices, a higher “top_k” value is the way to go. But be cautious, as setting it too high could make the output less coherent.
  * Lower Top_k Value: For more predictable and focused conversations, a lower “top_k” value is recommended.


> Example 1: Top_k `1`
>   * Limiting it to just the top word narrows down the possibilities significantly.
>   * Next Most Likely Word: 1) red
> 

> Example 2: Top_k `3`
>   * With a setting of 3, the model has more room for variation but still stays fairly predictable.
>   * Next Most Likely Words: 1) red 2) ripe 3) delicious
> 

> Example 3: Top_k `5`
>   * A setting of 5 expands the range further, adding more options for the model to consider.
>   * Next Most Likely Words: 1) red 2) ripe 3) delicious 4) green 5) juicy
> 

## Repetition_penalty
Range: `1.00` - `1.50`
The repetition_penalty parameter is designed to help you minimize how often your virtual character repeats the same phrases or words. The value for this parameter starts at 1, and increasing it will reduce the likelihood of repetition in the conversation.  
The repetition_penalty applies an exponential penalty to the likelihood of repeating tokens (words or parts of words). A setting of 1 means no penalty is applied, and the model behaves as it normally does. Values greater than 1 discourage repetition, leading to more varied responses.
  * Repetition_penalty = `1.00`: If you don’t mind some repetition, or prefer it for a more natural conversation, keep the setting at 1.
  * Repetition_penalty > `1.00`: If you want to minimize repetition and have a more varied conversation, opt for a value greater than `1.00`.


> Example 1: Repetition_penalty `1.00`
>   * At the default setting of `1.00`, there’s no penalty for repetition. The model will generate responses based purely on its training.
>   * Output: “I love eating [ice cream], [ice cream] is my favorite dessert because [ice cream] is so delicious and creamy.”
> 

> Example 2: Repetition_penalty `1.20`
>   * A higher value like `1.20` discourages the model from repeating phrases, making the conversation more dynamic.
>   * Output: “I love eating [ice cream] because it’s creamy, sweet, and offers a variety of flavors to enjoy.”
> 

> Example 3: Repetition_penalty `1.50`
>   * The highest value of `1.50` strongly discourages repetition, leading to more varied and detailed responses.
>   * Output: “I love eating [ice cream]. There’s a world of sweetness in every scoop, bursting with diverse tastes and memories from summer days.”
> 

## Min_length
Range: `1` - `2000` tokens
The min_length parameter sets the minimum length for your virtual character’s responses, measured in tokens (words or parts of words). This is useful when you want to ensure that responses meet a certain length threshold.
When you set min_length, the model will generate text that contains at least as many tokens as specified. This helps to avoid overly brief or incomplete answers.
  * Lower Min_length Value: A lower min_length setting ensures that the model will produce at least a brief response but doesn’t limit the model from generating longer, more detailed answers if appropriate.
  * Higher Min_length Value: If you prefer more comprehensive answers that meet a certain length threshold, a higher min_length value is advisable.


> Example 1: Min_length set to `1`
>   * With the minimum setting of `1`, the model is allowed to produce outputs that contain just one token.
>   * Output: “Yes.”
> 

> Example 2: Min_length set to `5`
>   * Setting it to 5 ensures that the model’s responses are at least `5` tokens long, making them a bit more informative.
>   * Output: “I enjoy reading books.”
> 

> Example 3: Min_length set to `20`
>   * A higher value like `20` will result in more detailed and comprehensive responses.
>   * Output: “I enjoy reading because it allows me to escape into different worlds and perspectives, enriching my understanding.”
> 

## Max_new_tokens
Range: `1` - `4096` tokens
The max_new_tokens parameter allows you to set an upper limit on the length of your virtual character’s responses. This is measured in tokens, which can be whole words or parts of words. This setting is useful if you want to ensure that the model’s answers don’t become overly verbose or exceed a certain length.
When you set max_new_tokens, the model will limit its generated output to no more than the specified number of new tokens. This is particularly useful for keeping responses concise or fitting within certain space constraints.
  * Lower Max_new_tokens Value: If you want to keep the responses brief or have limited space, setting a lower max_new_tokens value will ensure that.
  * Higher Max_new_tokens Value: If you have the space for longer, more detailed responses, a higher max_new_tokens value will allow for that.


> Example 1: Max_new_tokens set to `1`
>   * With the minimum setting of 1, the model will produce outputs that contain just one new token.
>   * Output: “Yes.”
> 

> Example 2: Max_new_tokens set to `10`
>   * A setting of 10 limits the model’s responses to no more than 10 new tokens, keeping answers brief but meaningful.
>   * Output: “I enjoy reading.”
> 

> Example 3: Max_new_tokens set to `40`
>   * A higher value like `40` allows for more detailed responses but still puts a cap to prevent overly long answers.
>   * Output: “I enjoy reading because it allows me to explore different worlds, learn new ideas, and escape from reality for a while.”
> 

## Top_a
Range: `0.0` - `1.0`. Setting this to `0` disables Top_a sampling.
[Top_a](https://github.com/BlinkDL/RWKV-LM/tree/4cb363e5aa31978d801a47bc89d28e927ab6912e#the-top-a-sampling-method) sampling is a method specifically designed for **RWKV** language models by **BlinkDL**. The parameter controls how tokens are filtered based on their probabilities after applying the softmax function. Unlike Top-p or Temperature, Top_a adapts to the highest probability token in the current context to decide which tokens are considered for the next word.
  * Lower Top_a Value: A lower Top-a value similarly focuses the choices based on the highest probability token but with a narrower scope.
  * Higher Top_a Value: Increasing the Top-a value does not necessarily affect the creativity of the output but rather refines the filtering process based on the maximum probability.


> The idea of top-a:
>   * If max_prob=0.9, then remove all tokens with prob < 0.162 (so, removing all alternatives)
>   * If max_prob=0.5, then remove all tokens with prob < 0.05 (so, allowing more choices)
>   * If max_prob=0.1, then remove all tokens with prob < 0.002 (so, allowing lots of possibilities)
> 

## TFS (Tail Free Sampling)
Range: `0.0` - `1.0`
Default: `1.0` (Disables TFS)
[Tail Free Sampling](https://www.trentonbricken.com/Tail-Free-Sampling/) is an algorithm that helps the model refine its choice of next words in the text. It looks for a “tail” in the likelihood distribution of each word and narrows down the options based on this “tail.”
  * Lower Value: A lower setting (closer to 0) will make the model consider a broader range of words, resulting in more diverse text.
  * Higher Value: A higher setting (closer to 1, but not 1) makes the model more focused on the most likely next words, making the text more predictable.


> Example 1: TFS = `0.1`
>   * The model becomes more open to considering various words while still using the “tail” to eliminate the least likely ones.
>   * Output: [The cat, feeling a bit adventurous today, lounged on the balcony railing]
> 

> Example 2: TFS = `0.5`
>   * A balanced setting where the model uses the “tail” to moderately filter out less likely words.
>   * Output: [The cat chose to sit on the cozy chair]
> 

> Example 3: TFS = `0.9`
>   * The model narrows down its choices significantly, focusing on the most probable words.
>   * Output: [The cat sat on the mat]
> 

## Repetition_penalty_range
Range: `0` - `4096`
The repetition_penalty_range parameter allows you to specify how far back the model should look when applying the repetition penalty. This setting is measured in tokens, which can be whole words or parts of words.
When you set repetition_penalty_range, the model considers only the specified number of most recent tokens to apply the repetition penalty. A value of 0 means all previously generated tokens are considered, helping to minimize repetition across the entire generated text.
  * Smaller Value: A lower value limits the model’s “memory” for repetition, potentially allowing for more repeated phrases over the entire content.
  * Larger Value: A larger value means the model considers more or all previously generated tokens to minimize repetition, resulting in more varied content.


Scenario: “Cats are popular pets because…”
> Example 1: Repetition_penalty_range `0`
>   * Setting it to `0` means all prior tokens are considered for applying the repetition penalty.
>   * Output with High Repetition Penalty: “…they are cuddly. Cats are great because they are playful. Cats are loved because they are loyal. Many people like cats because they are friendly.”
> 

> This output doesn’t avoid repeating the word “cat”.
> Example 2: Repetition_penalty_range `5`
>   * With a setting of `5`, the model only considers the last five tokens for applying the repetition penalty.
>   * Output: “…playful, cuddly, fun, entertaining, and cats are loyal.”
> 

> The word “cat” repeats because the model’s “memory” for repetition is limited to the last 5 tokens.
> Example 3: Repetition_penalty_range `25`
>   * With a setting of `25`, the model considers the last `25` tokens when applying the repetition penalty.
>   * Output: “…they are always there for you with a unique way of showing affection. They are playful, loyal, and many people love them simply because they’re amazing and perfect pets.”
> 

> In this case, the word “cat” does not repeat in the follow-up sentence, as the model’s “memory” for repetition extends to the last `25` token.
## Encoder_repetition_penalty
Range: `0.8` - `1.5`
Also known as the “Hallucinations filter”. Used to penalize tokens that are not in the prior text. Higher value = more likely to stay in context, lower value = more likely to diverge.
  * A higher value means the model is more likely to use tokens that were present in the input, which can help it stay more on-topic and relevant.
  * A lower value (like 1 which is no penalty) means the model is more free to introduce new concepts, which might lead to more creative but potentially less coherent or relevant outputs.


Scenario: “The cat is playing with a ball of yarn. It’s so cute when it…”
> Example 1: encoder_repetition_penalty `1.0`
>   * A value of `1.0` means no penalty, so the model will generate text based on its learned patterns and probabilities.
>   * Output: “…chases after the yarn, like a dog chasing its tail”
> 

> Here, the generated text introduces the concept of a dog, which, while still in the realm of pets, diverges slightly from the central theme of a cat playing with yarn. This illustrates the model’s inclination to bring in related but distinct concepts when there’s no penalty.
> Example 2: encoder_repetition_penalty set to `1.5`
>   * A higher value like `1.5` means the model applies a penalty to tokens not in the prior text, making it more likely to stay on topic.
>   * Output: “…paws at the yarn, getting all tangled up”
> 

> Here, the generated text remains focused on the cat and its actions, without introducing unrelated concepts like a dog.
## No_repeat_ngram_size
Range: `0` - `20`
If not set to 0, specifies the length of token sets that are completely blocked from repeating at all. Higher values = blocks larger phrases, lower values = blocks words or letters from repeating. Only 0 or high values are a good idea in most cases.
  * A smaller value (other than 0) means shorter sequences (e.g., common phrases or words) won’t be repeated, which might lead to unnatural text generation.
  * A larger value means the model will avoid repeating longer phrases or sentences, which can help in maintaining diversity and novelty in the generated content.


For instance in the sentence “I love my cat”, the 2-grams (also called bigrams) would be: “I love”, “love my”, “my cat
> Example 1: no_repeat_ngram_size `0`
>   * Setting this parameter to 0 means there is no restriction on repeating n-grams. The model will generate the text based on its learned patterns and might repeat words, phrases, or even entire sentences depending on the context and other parameters.
>   * Output: “[The sky is blue]. [Birds are free]. [The sky is blue], just like the sea.”
>   * Here, the phrase “The sky is blue” is repeated.
> 

> Example 2: no_repeat_ngram_size `3`
>   * If we set this parameter to 3, any sequence of 3 tokens that has been already used will not be repeated.
>   * Output: “[The sky is blue]. [Birds are free]. Clouds above look like the sea.”
>   * “The sky is blue” relevant or likely, it doesn’t repeat it because it’s a 4-gram that was used before and contains a repeated 3-gram (“The sky is”).
> 

> Example 3: no_repeat_ngram_size `4`
>   * With this setting, the model is now prevented from repeating any 4-grams.
>   * Output: “[The sky is blue]. [Birds are free]. Like white cotton above the sea.”
>   * Here, the generated text avoids repeating any 4-token sequences from the previous text.
> 

## Length_penalty
Range: `-5.00`/`5.00`
> Negative values (e.g., `-5.00`): A negative value applies an exponential penalty to longer sequences and promotes shorter sequences. The more negative the value, the stronger the preference for shorter sequences.
> A value of `1.00` means no length-based adjustment is made. This doesn’t mean the lengths of the sequences won’t vary, rather, the lengths will be determined based purely on the model’s original predictions, without any length-based adjustment.
> Positive values (e.g., `5.00`): A positive value promotes longer sequences. The larger the positive value, the stronger the preference for longer sequences.
In other words, if you want the generated sequences to be shorter, you would use a more negative length_penalty, and if you want them to be longer, you would use a more positive length_penalty. This allows you to have fine control over the length of the sequences generated by the model.
# Mirostat Sampling
[Mirostat](https://openreview.net/forum?id=W1G1JZEIy5_) is designed to control perplexity during text generation. Mirostat ensures that the model maintains a consistent quality in its outputs. Mirostat’s main goal is to balance between producing text that is coherent and text that is diverse. Without such a mechanism, language models can fall into traps:
  * Boredom Traps: The generated text becomes too repetitive.
  * Confusion Traps: The generated text becomes incoherent.


By dynamically adjusting its parameters based on the feedback from generated text, Mirostat ensures that the text remains both coherent and diverse, leading to higher quality outputs. In essence, Mirostat acts as a dynamic controller for text generation, ensuring that the outputs from the model remain high-quality without requiring constant manual adjustments from the user.
## Mirostat_mode
Range: `0` - `2`
This parameter acts as the mode selector for Mirostat.
> `0`: Mirostat is disabled.
> `1`: Llama.cpp Mode - Optimized for the [llama.cpp](https://github.com/ggerganov/llama.cpp) backend.
> `2`: [Hugging Face (HF)](https://github.com/huggingface/transformers)-Integrated Mode - Tailored for backends integrated with Hugging Face Transformers (i.e., ExLlama_HF, ExLlamav2_HF, llamacpp_HF) and also (AutoGPTQ, GPTQ-for-LLaMa).
When Mirostat is enabled using the mirostat_mode, certain other sampling techniques like Top-K, Nucleus, Tail Free, and Locally Typical samplers will be ignored. This ensures that Mirostat has full control over the text generation process and there are no conflicting influences from other sampling methods.
## Mirostat_tau
Range: `0` - `10` (default value: `5`)
Represents the target entropy or the desired perplexity value for the generated text.
Adjusting this value influences the balance between coherence and diversity in the generated text. A lower value promotes more coherent and focused outputs, while a higher value leans towards diverse and potentially less structured outputs.
## Mirostat_eta
Range: `0.00` - `1` (default value: `0.1`)
Determines the learning rate of the Mirostat algorithm.
Influences how rapidly Mirostat responds to feedback from the generated text. A higher value makes Mirostat more responsive with faster adjustments, while a lower value results in slower, more gradual adjustments.
## Do_sample
Do_sample enables stochastic sampling for diverse output generation.
>   * do_sample is checked (True), the model employs a stochastic method to generate its outputs. Rather than consistently selecting the most probable next word, it randomly samples from a probability distribution of potential next words. This introduces variability and diversity to the generated outputs. However, this diversity is inherently random and isn’t directed or controlled.
>   * do_sample is unchecked (False), the model employs a deterministic approach, such as greedy decoding, where it always chooses the most probable next word or token. This method is more predictable. when using contrastive search might be a recommendation to ensure that the contrastive effect is applied in a predictable manner. In simpler terms, the program wants to ensure that the diversity in outputs comes from the contrastive mechanism itself, rather than the inherent randomness of stochastic sampling. This allows for more consistent and controlled contrasting outputs.
> 

## Penalty_alpha
Range: `0.00` - `5.00` (`0.00` is disabled)
(Contrastive Search is enabled by setting this to greater than zero and unchecking “do_sample”. It should be used with a low value of top_k, for instance, top_k = `4`)
[Penalty_alpha](https://openreview.net/forum?id=GbkWw3jwL9) is a hyperparameter that regulates the balance between the model’s confidence in its predictions and the penalty for generating outputs that are similar to the preceding context in a sequence. A value of 0 makes the model rely solely on its confidence, essentially reverting to standard greedy search. As penalty_alpha increases, greater emphasis is placed on avoiding repetitions or generating text that is too similar to the prior context, thereby promoting diversity in the generated outputs. This parameter is essential for the contrastive search decoding method to produce diverse yet semantically coherent text.
> Scenario: “The sun is…”
> Example 1: penalty_alpha = 0 (Pure Model Confidence, akin to Greedy Search)
>   * Output: “The sun is shining brightly in the blue sky. The sky is clear, and the day is warm. The weather is perfect for a day at the beach. The beach is likely to be crowded with people enjoying the sun.”
>   * The output is very consistent with typical expectations, but you might notice some repetitiveness or redundancy (e.g., mentioning the sun and the beach multiple times).
> 

> Example 2: penalty_alpha = 1 (Balanced Model Confidence and Diversity)
>   * Output: “The sun is shining brightly, casting a golden hue over the city. Birds chirp in the distance, and children play in parks. The atmosphere feels rejuvenating, a stark contrast to the gloomy days of last week.”
>   * The output maintains coherence but introduces more diverse elements (golden hue, birds, children playing) without being overly repetitive.
> 

> Example 3: penalty_alpha = 3 (Strong Emphasis on Diversity)
>   * Output: “The sun is a blazing orb, a celestial entity often worshiped in ancient cultures. Its rays touch the farthest galaxies, and its power fuels the very essence of life, from photosynthesis in plants to the circadian rhythms in animals.”
>   * The output is more diverse and less anchored to the immediate context of the prompt. It touches on broader topics and associations related to the sun.
> 

> Example 4: penalty_alpha = 5 (Extreme Emphasis on Diversity)
>   * Output: “The sun is a mysterious fusion reactor, an enigma that has inspired sonnets, dictated the agricultural practices of bygone civilizations, and challenges the realms of both science and philosophy with its relentless dance.”
>   * The output is highly diverse, potentially bordering on being abstract or tangential. It draws from a wide range of associations and might occasionally sound less coherent or more poetic.
> 

## Seed
Default value: `-1`
A seed, in the context of computing and algorithms, is an initial value fed to a random number generator. It serves as the starting point for generating a sequence of pseudorandom numbers. When a seed is set, the sequence of random numbers produced becomes deterministic and reproducible. For language models, especially when generating text, randomness can be introduced to get varied outputs. The seed ensures that this randomness is controlled and reproducible. When you provide a specific seed value, every time you run the model with that seed, you’ll get the same “random” output. This is useful for debugging, testing, or any scenario where consistent outputs are desired.
>   * Without a Fixed Seed (`-1`): The language model’s outputs can vary between runs, even with the same input, since the randomness introduced isn’t being controlled by a fixed seed.
>   * With a Fixed Seed: If you set a specific seed (other than `-1` ), the language model’s outputs will be consistent and reproducible for the same inputs.
> 

[](https://doc.voxta.ai/docs/xtts-server/) [Next ](https://doc.voxta.ai/docs/troubleshooting-solutions/)
  * [Temperature](https://doc.voxta.ai/docs/llm-parameters/#temperature)
  * [Top_p](https://doc.voxta.ai/docs/llm-parameters/#top_p)
  * [Typical_p](https://doc.voxta.ai/docs/llm-parameters/#typical_p)
  * [Top_k](https://doc.voxta.ai/docs/llm-parameters/#top_k)
  * [Repetition_penalty](https://doc.voxta.ai/docs/llm-parameters/#repetition_penalty)
  * [Min_length](https://doc.voxta.ai/docs/llm-parameters/#min_length)
  * [Max_new_tokens](https://doc.voxta.ai/docs/llm-parameters/#max_new_tokens)
  * [Top_a](https://doc.voxta.ai/docs/llm-parameters/#top_a)
  * [TFS (Tail Free Sampling)](https://doc.voxta.ai/docs/llm-parameters/#tfs-tail-free-sampling)
  * [Repetition_penalty_range](https://doc.voxta.ai/docs/llm-parameters/#repetition_penalty_range)
  * [Encoder_repetition_penalty](https://doc.voxta.ai/docs/llm-parameters/#encoder_repetition_penalty)
  * [No_repeat_ngram_size](https://doc.voxta.ai/docs/llm-parameters/#no_repeat_ngram_size)
  * [Length_penalty](https://doc.voxta.ai/docs/llm-parameters/#length_penalty)


  * [Mirostat_mode](https://doc.voxta.ai/docs/llm-parameters/#mirostat_mode)
  * [Mirostat_tau](https://doc.voxta.ai/docs/llm-parameters/#mirostat_tau)
  * [Mirostat_eta](https://doc.voxta.ai/docs/llm-parameters/#mirostat_eta)
  * [Do_sample](https://doc.voxta.ai/docs/llm-parameters/#do_sample)
  * [Penalty_alpha](https://doc.voxta.ai/docs/llm-parameters/#penalty_alpha)
  * [Seed](https://doc.voxta.ai/docs/llm-parameters/#seed)


[ ](https://voxta.ai/)
[ ](https://www.twitter.com/VoxtaAi) [ ](https://github.com/voxta-ai) [ ](https://www.youtube.com/@Voxta)
Made with [Docura](https://docura.github.io/)

---

## Related KB Articles

- [Managing LLM Response Formatting and Truncation](kb/troubleshooting/response-cutoff-and-line-breaks-nqoECO.md)
- [Optimizing LLM Memory and Context](kb/troubleshooting/storing-extended-backstory-in-memory-books-D-UN1w.md)
- [Prompt Formatting Templates](kb/troubleshooting/fix-could-not-find-prompt-formatting-template-error-ht5aNG.md)
- [Splitting Model Load Between GPU and RAM](kb/configuration/splitting-model-load-between-gpu-and-system-ram-57t8yh.md)
- [LlamaSharp GPU Offloading](kb/configuration/llamasharp-gpu-offloading-4jdJNM.md)
- [Temperature and Top-K Parameter Effects](kb/llm/temperature-and-top-k-parameter-effects-ZB-Zun.md)
