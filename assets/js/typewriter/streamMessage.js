/**
 * 
 * @param string dataElementId ID of the element containing the message data
 */

export function streamMessage2(dataElementId) {

    const dataElement = document.querySelector('#' + dataElementId);
    const processedData = processRawData(dataElement);
    const textBox = document.querySelector('#text-overlay');
    const streamingTarget = textBox.querySelector('.text-message');
    const blinkingArrow = textBox.querySelector('.blinking-arrow');
    let finishedStreaming = false;
    let messageHasEnded = false;
    let revealAllCharacters = false;
    let messageIndex = 0;
    let characters = [];

    textBox.addEventListener(
        "click",
        textboxHandler,
      );
    textBox.classList.toggle('revealed');

    prepareCharacterArray(processedData);
    revealOneCharacter(characters);


    // Hoisted functions

    // Handles converting data-as-HTML to a structure that is usable later
    function processRawData(dataElement) {
        const messageNodes = dataElement.children;
        let processedData = [];
        for (let i = 0; i < messageNodes.length; i++) {
            let messageObject = {
                currentMessageArray: [],
                triggerScript: messageNodes[i].dataset.trigger
            };
            const paragraphNodes = messageNodes[i].children; 
            for (let j = 0; j < paragraphNodes.length; j++) {
                messageObject.currentMessageArray.push({
                    text: paragraphNodes[j].textContent,
                    speed: paragraphNodes[j].dataset.speed,
                    trigger: paragraphNodes[j].dataset.trigger,
                    classes: Array.from(paragraphNodes[j].classList),
                });
            }
            processedData.push(messageObject);
        }
        return processedData;
    }

    // Click handler
    function textboxHandler() {
        revealAllCharacters = true;
        if(finishedStreaming) {
            revealAllCharacters = false;
            if(messageHasEnded) {
                textBox.removeEventListener("click", textboxHandler);
                streamingTarget.innerHTML = "";
                textBox.classList.toggle('revealed');
                let scriptIndex = messageIndex;
                messageIndex = 0;
                if(processedData[scriptIndex].triggerScript.length > 0) {
                    const scriptTarget = document.querySelector(processedData[scriptIndex].triggerScript);
                    htmx.trigger(scriptTarget, "triggerOnFinish")
                    return;
                }
            } else {
                blinkingArrow.classList.toggle('revealed');
                streamingTarget.innerHTML = "";
                prepareCharacterArray();
                revealOneCharacter(characters);
            }
        }
    }

    // Chunks up text to be streamed, and creates the corollary data object
    function prepareCharacterArray() {
        characters = [];
        processedData[messageIndex].currentMessageArray.forEach(messageTextObject => {
            messageTextObject.text.split("").forEach(character => {
                let span = document.createElement("span");
                span.textContent = character;
                streamingTarget.appendChild(span);
                characters.push({
                    span: span,
                    isSpace: character === " ",
                    delayAfter: messageTextObject.speed,
                    classes: messageTextObject.classes,
                })
            });
        });
    }

    // Recursive function to reveal one character at a time
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
            if(messageIndex < processedData.length-1) {
                blinkingArrow.classList.toggle('revealed');
                messageIndex++;
            } else {
                messageHasEnded = true;
            }

        }
    }

}
