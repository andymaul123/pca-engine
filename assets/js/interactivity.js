import { typeWriter } from "./typewriter.js";

export const interactivity = {
    logMessage: function(messageToLog) {
        console.log(messageToLog);
    },
    typeWriter: typeWriter,
    toggleClass: function(toggleItems) {
        toggleItems.forEach((element) => {
            const targetElement = document.querySelector(element.target);
            targetElement.classList.toggle(element.className);
        });
    },
};