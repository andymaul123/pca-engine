import { dataStore } from "../../models/index.js";
import { transformTextToHTML } from "../../utils/transformTextToHtml.js";

const shrine = dataStore.scenes.shrine;

export const shrineController = {
    takeCandle: function() {
        shrine.candleOn = false;
        shrine.fragments.candle.show = false;
        shrine.overlayNodes.shrine.show = false;
    },
    breakWindow: function() {
        shrine.windowBroken = true;
        shrine.fragments.window.show = true;
        shrine.overlayNodes.window.show = false;
        shrine.overlayNodes.windowBroken.show = true;
    },
    transformText: function() {
        for (const key in shrine.messages) {
            shrine.messages[key].textString = transformTextToHTML(shrine.messages[key].textArray);
        };
    },
}