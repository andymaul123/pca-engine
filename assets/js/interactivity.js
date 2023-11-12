import { typeWriter } from "./typewriter.js";
import { typeWriter2 } from "./typewriter/index.js";

export const interactivity = {
    logMessage: function(messageToLog) {
        console.log(messageToLog);
    },
    streamMessage: typeWriter.streamMessage,
    streamMessage2: typeWriter2.streamMessage2,
    toggleClass: function(className, target) {
        const targetElement = document.querySelector(target);
        targetElement.classList.toggle(className);
    }
};