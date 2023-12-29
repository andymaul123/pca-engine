import { dataStore } from "../../models/index.js";
import { transformTextToHTML } from "../../utils/transformTextToHtml.js";

const stairs = dataStore.scenes.stairs;

export const stairsController = {
    transformText: function() {
        for (const key in stairs.messages) {
            stairs.messages[key].textString = transformTextToHTML(stairs.messages[key].textArray);
        };
    },
}