import { dataStore } from "../../models/index.js";

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
}