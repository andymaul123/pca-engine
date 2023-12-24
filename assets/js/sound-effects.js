/**
 * 
 * @returns 
 * for each element in dom that has data-sound,
 * attach a click handler
 */



export function soundEffectHandler() {
    console.log("soundEffectHandler fired");

    const elementsWithSound = document.querySelectorAll('[data-sound]');

    for (let index = 0; index < elementsWithSound.length; index++) {
        const element = elementsWithSound[index];
        attachHandler(element);
    }

    function attachHandler(element) {
        element.addEventListener(
            "click",
            playSound,
          );
    }

    function playSound(event) {
        console.log("sound should play...");
        const referringElement = event.srcElement;
        console.dir(referringElement);
        const soundData = JSON.parse(referringElement.attributes['data-sound'].value);
        console.dir(soundData);

        if(!soundData) {
            return;
        }
        const audio = new Audio(soundData.path);
        audio.volume= 0.25;
        audio.play();

        if(soundData.playOnce) {
            console.log("play once, removing event handler");
            referringElement.removeEventListener(
                "click",
                playSound,
              );
        }

    }


}