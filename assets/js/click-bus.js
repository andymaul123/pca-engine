/**
 * Intercepts click events in the game, performs additional side effects, and emits
 * a 'triggerClick' event back to the referring element to complete the loop
 * @param {Event} event
 * @returns {void} 
 */

export async function clickBus(event) {
    const referringElement = event?.target;
    const soundEffect = event?.target?.dataset?.sound ? JSON.parse(event?.target?.dataset?.sound) : null;
    const streamMessage = event?.target?.dataset?.streammessage ? JSON.parse(event?.target?.dataset?.streammessage) : null;
    const toggleClass = event?.target?.dataset?.toggle ? JSON.parse(event?.target?.dataset?.toggle) : null;
    const stopAnimation = event?.target?.dataset?.stopanimation ? event.target.dataset.stopanimation : null;
    const playAnimation = event?.target?.dataset?.playanimation ? event.target.dataset.playanimation : null;

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

    if(playAnimation) {
        window.interactivity.startCSSAnimation(playAnimation);
    }

    if(stopAnimation) {
        window.interactivity.stopCSSAnimation(stopAnimation);
    }

    if(referringElement) {
        htmx.trigger(referringElement, "triggerClick");
    }
    
}