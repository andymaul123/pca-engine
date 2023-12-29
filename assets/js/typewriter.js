/**
 * Typewriter reveals characters in a string of text one-at-a-time
 * @returns {void}
 */

export function typeWriter() {
    const textOverlay = document.querySelector('#text-overlay');
    const textOverlayWrapper = textOverlay.querySelector('.wrapper');
    const dataElement = textOverlay.querySelector('.text-message');
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