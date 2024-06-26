import { typeWriter, typeWriterHandler } from "./typewriter.js";
import { clickBus } from "./click-bus.js";
import { playSound } from "./play-sound.js";

export const interactivity = {
    logMessage: function(messageToLog) {
        console.log(messageToLog);
    },
    typeWriter: typeWriter,
    typeWriterHandler: typeWriterHandler,
    toggleClass: function(toggleItems) {
        toggleItems.forEach((element) => {
            const targetElement = document.querySelector(element.target);
            targetElement.classList.toggle(element.className);
        });
    },
    clickBus: clickBus,
    playSound: playSound,
    revealAll: false,
    updateContext: function(context) {
        document.querySelector("#main-scene").setAttribute('data-context', context);
    },
    currentVolume: 0.1,
};