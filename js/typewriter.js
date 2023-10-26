// https://www.youtube.com/watch?v=8i2K7uwh124

export const typeWriter = {
    streamMessage: function(messageObject) {
        /**
         * message: string,
         * speed: integer (representing milliseconds),
         * target: string (id name of target element to stream to)
         */

        if(!messageObject || !messageObject.message) {
            return;
        }

        const target = document.querySelector(messageObject.target);

        let characters = [];
        messageObject.message.split("").forEach(character => {
            let span = document.createElement("span");
            span.textContent = character;
            target.appendChild(span);
            characters.push({
                span: span,
                isSpace: character === " ",
                delayAfter: messageObject.speed,
                classes: []
            })
        });

        function revealOneCharacter(list) {
            let next = list.splice(0,1)[0];
            next.span.classList.add("revealed");

            let delay = next.isSpace ? 0 : next.delayAfter;

            if(list.length > 0) {
                setTimeout(function() {
                    revealOneCharacter(list);
                }, delay);
            }
        }

        revealOneCharacter(characters);

    }
}