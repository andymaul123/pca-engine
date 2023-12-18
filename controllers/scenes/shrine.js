import { dataStore } from "../../models/index.js";

const shrine = dataStore.scenes.shrine;

export const shrineController = {
    takeCandle: function() {
        shrine.candleOn = false;
        shrine.basemats.current = shrine.basemats.candleOff;
        shrine.overlayNodes.shrine.show = false;
    },
}