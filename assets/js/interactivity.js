import { typeWriter } from "./typewriter.js";

export const interactivity = {
    logMessage: function(messageToLog) {
        console.log(messageToLog);
    },
    typeWriter: typeWriter,
    toggleClass: function(className, target) {
        const targetElement = document.querySelector(target);
        targetElement.classList.toggle(className);
    }
};