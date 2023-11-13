// https://www.youtube.com/watch?v=8i2K7uwh124

export const typeWriter = {
    streamMessage: function(messageObject) {
        /**
         * messages: Array<String>,
         * speed: Integer (representing milliseconds),
         * target: String (id name of target element to stream to)
         * triggerOnFinish: Boolean
         */

        if(!messageObject || !messageObject.messages) {
            console.log('Error: no message provided to typewriter!');
            return;
        }
        const target = document.querySelector(messageObject.target);
        const streamingTarget = target.querySelector('.text-message');
        const blinkingArrow = target.querySelector('.blinking-arrow');
        let finishedStreaming = false;
        let messageEnded = false;
        let revealAllCharacters = false;
        let currentMessageArray = 0;
        let characters = [];
  
        function textboxHandler() {
            revealAllCharacters = true;
            if(finishedStreaming) {
                revealAllCharacters = false;
                if(messageEnded) {
                    target.removeEventListener("click", textboxHandler);
                    if(messageObject.triggerOnFinish) {
                        htmx.trigger(target, "triggerOnFinish")
                        return;
                    }
                    streamingTarget.innerHTML = "";
                    target.classList.toggle('revealed');
                }
                blinkingArrow.classList.toggle('revealed');
                streamingTarget.innerHTML = "";
                prepareCharacterArray();
                revealOneCharacter(characters);
            }
        }
  
        function prepareCharacterArray() {
            characters = [];
            messageObject.messages[currentMessageArray].split("").forEach(character => {
                let span = document.createElement("span");
                span.textContent = character;
                streamingTarget.appendChild(span);
                characters.push({
                    span: span,
                    isSpace: character === " ",
                    delayAfter: messageObject.speed,
                    classes: []
                })
            });
        }

        function revealOneCharacter(list) {
            if(finishedStreaming) {
                finishedStreaming = false;
            }
            let next = list.splice(0,1)[0];
            next.span.classList.add("revealed");
            next.classes.forEach((classItem) => {
                next.span.classList.add(classItem);
            });
            let delay = next.isSpace || revealAllCharacters ? 0 : next.delayAfter;

            if(list.length > 0) {
                setTimeout(function() {
                    revealOneCharacter(list);
                }, delay);
            } else {
                finishedStreaming = true;
                if(currentMessageArray < messageObject.messages.length-1) {
                    blinkingArrow.classList.toggle('revealed');
                    currentMessageArray++;
                } else {
                    messageEnded = true;
                }

            }
        }

        target.addEventListener(
            "click",
            textboxHandler,
          );

        target.classList.toggle('revealed');
        prepareCharacterArray();
        revealOneCharacter(characters);

    }
}