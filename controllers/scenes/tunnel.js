import { dataStore } from "../../models/index.js";
import { transformTextToHTML } from "../../utils/transformTextToHtml.js";

const tunnel = dataStore.scenes.tunnel;

export const tunnelController = {
    transformText: function() {
        for (const key in tunnel.messages) {
            tunnel.messages[key].textString = transformTextToHTML(tunnel.messages[key].textArray);
        };
    },
}