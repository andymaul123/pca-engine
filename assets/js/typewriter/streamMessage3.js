export function streamMessage3() {
    const textOverlay = document.querySelector('#text-overlay');
    const textOverlayWrapper = textOverlay.querySelector('.wrapper');
    const dataElement = textOverlay.querySelector('.text-message');
    const listOfCharacters = dataElement.children;
    let counter = 0;
    let revealAll = false;

    textOverlay.addEventListener(
        "click",
        textboxHandler,
      );

    revealOneCharacter3(listOfCharacters);

    function revealOneCharacter3(htmlCollection) {
        if(counter <= htmlCollection.length -1) {
            htmlCollection[counter].classList.add('revealed');
            let delay = revealAll ? 0 : htmlCollection[counter].dataset.speed;
            counter ++;
                setTimeout(function() {
                    revealOneCharacter3(htmlCollection);
                }, delay);
        }
    }

    function textboxHandler() {
        if(!textOverlayWrapper.classList.contains('stream-all')) {
            revealAll = true;
            textOverlayWrapper.classList.add('stream-all');
        } else {
            textOverlay.removeEventListener("click", textboxHandler);
            htmx.trigger("#text-overlay .wrapper", "messageClick");
        }
    }
}



