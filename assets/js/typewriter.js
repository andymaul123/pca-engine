

export function typeWriter() {
    const textOverlay = document.querySelector('#text-overlay');
    const textOverlayWrapper = textOverlay.querySelector('.wrapper');
    const dataElement = textOverlay.querySelector('.text-message');
    if(!dataElement) {
        return;
    }
    const listOfCharacters = dataElement.children;
    let counter = 0;

    function revealOneCharacter(htmlCollection) {
        if(counter <= htmlCollection.length -1) {
            htmlCollection[counter].classList.add('revealed');
            let delay = window.interactivity.revealAll ? 0 : htmlCollection[counter].dataset.speed;
            counter ++;
                setTimeout(function() {
                    revealOneCharacter(htmlCollection);
                }, delay);
        } else {
            textOverlayWrapper.classList.add('finished-streaming');
        }
    }

    // Begin the recursive character reveal
    revealOneCharacter(listOfCharacters);
}

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