/**
 * Client-side JS that does two important things when called:
 * 1. A recursive function to reveal one character at a time, with a variable delay, from the message box, creating
 * a typewriter effect
 * 
 * 2. Assigns a click handler to the text overlay that is used to control 'revealAll',
 * which is letting the player click to stop the typewriting effect without triggering the
 * hx request.
 */

export function typeWriter() {
    const textOverlay = document.querySelector('#text-overlay');
    const textOverlayWrapper = textOverlay.querySelector('.wrapper');
    const dataElement = textOverlay.querySelector('.text-message');
    const listOfCharacters = dataElement.children;
    let counter = 0;
    let revealAll = false;

    // Assign the click handler, then
    textOverlay.addEventListener(
        "click",
        textboxHandler,
      );

    // Begin the recursive character reveal
    revealOneCharacter3(listOfCharacters);

    
    // Hoisted functions
    function revealOneCharacter3(htmlCollection) {
        if(counter <= htmlCollection.length -1) {
            htmlCollection[counter].classList.add('revealed');
            let delay = revealAll ? 0 : htmlCollection[counter].dataset.speed;
            counter ++;
                setTimeout(function() {
                    revealOneCharacter3(htmlCollection);
                }, delay);
        } else {
            textOverlayWrapper.classList.add('finished-streaming');
        }
    }
    function textboxHandler() {
        if(!textOverlayWrapper.classList.contains('finished-streaming')) {
            revealAll = true;
            textOverlayWrapper.classList.add('finished-streaming');
        } else {
            textOverlay.removeEventListener("click", textboxHandler);
            htmx.trigger("#text-overlay .wrapper", "messageClick");
        }
    }
}