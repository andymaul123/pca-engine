/**
 * Typewriter reveals characters in a string of text one-at-a-time
 * @param {string} type
 * @returns {void}
 */

export function typeWriter(type) {
    let textOverlay = null;
    let textOverlayWrapper = null;
    let dataElement = null;

    switch(type) {
        case "message":
            textOverlay = document.querySelector('#text-overlay');
            textOverlayWrapper = textOverlay.querySelector('.wrapper');
            dataElement = textOverlay.querySelector('.text-message');
          break;
        case "dialogue":
            textOverlay = document.querySelector('#npc-dialogue');
            textOverlayWrapper = textOverlay.querySelector('.wrapper');
            dataElement = textOverlay.querySelector('.text-message');
          break;
        default:
          // code block
      }

    if(!dataElement) {
        return;
    }
    const words = dataElement.children;
    let wordIndex = 0;
    let characterIndex = 0;

    function revealOneWord(htmlCollection) {
        if(wordIndex <= htmlCollection.length -1) {
            const characters = htmlCollection[wordIndex].children;
            revealOneCharacter(characters);
        } else {
            textOverlayWrapper.classList.add('finished-streaming');
        }
    }

    function revealOneCharacter(htmlCollection) {
        if(characterIndex <= htmlCollection.length -1) {
            htmlCollection[characterIndex].classList.add('revealed');
            let delay = window.interactivity.revealAll ? 0 : htmlCollection[characterIndex].dataset.speed;
            characterIndex++;
                setTimeout(function() {
                    revealOneCharacter(htmlCollection);
                }, delay);
        } else {
            characterIndex = 0;
            wordIndex++;
            revealOneWord(words);
        }
    }

    revealOneWord(words);
}
/**
 * Click handler that sets a global for revealing all text on a second click
 * @param {Element} referringElement
 * @returns {Boolean}
 */
export function typeWriterHandler(referringElement) {
    if(!referringElement.classList.contains('finished-streaming')) {
        window.interactivity.revealAll = true;
        referringElement.classList.add('finished-streaming');
        return false;
    } else {
        window.interactivity.revealAll = false;
        return true;
    }
}