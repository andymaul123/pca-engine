/**
 * 
 * @param string dataElementId ID of the element containing the message data
 */

export function streamMessage3(dataElementId) {
    const dataElementParent = document.querySelector('#' + dataElementId);
    const dataElement = dataElementParent.querySelector('.text-message');
    const listOfCharacters = dataElement.children;
    let counter = 0;

    revealOneCharacter3(listOfCharacters);

    function revealOneCharacter3(htmlCollection) {
        if(counter <= htmlCollection.length -1) {
            htmlCollection[counter].classList.add('revealed');
            let delay = htmlCollection[counter].dataset.speed;
            counter ++;
                setTimeout(function() {
                    revealOneCharacter3(htmlCollection);
                }, delay);
        }
    }

}



