/**
 * Intercepts click events in the game, performs additional side effects, and emits
 * a 'triggerClick' event back to the referring element to complete the loop
 * @param {Event} event
 * @returns {void} 
 */

export async function clickBus(event) {
    const referringElement = event?.target;
    const soundEffect = event?.srcElement?.dataset?.sound ? JSON.parse(event?.srcElement?.dataset?.sound) : null;
    const streamMessage = event?.srcElement?.dataset?.streammessage ? JSON.parse(event?.srcElement?.dataset?.streammessage) : null;
    const toggleClass = event?.srcElement?.dataset?.toggle ? JSON.parse(event?.srcElement?.dataset?.toggle) : null;

    if(soundEffect) {
        await window.interactivity.playSound(soundEffect);
    }

    if(streamMessage) {
        if(!window.interactivity.typeWriterHandler(referringElement)) {
            return;
        }
    }

    if(toggleClass) {
        window.interactivity.toggleClass(toggleClass);
    }

    if(referringElement) {
        htmx.trigger(referringElement, "triggerClick");
    }
    
}