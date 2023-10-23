import { typeWriter } from "./typewriter.js";

export const interactivity = {
    logMessage: function(messageToLog) {
        console.log(messageToLog);
    },
    streamMessage: typeWriter.streamMessage,
};