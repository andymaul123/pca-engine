import { dataStore } from '../../models/index.js';
import { updateController } from './scenes.js';
import { addItemsToInventory } from '../player/common.js';
import { updateAllContexts } from './common.js';
import "../../types/index.js";

/**
 * Updates the Shrine scene values relevant to the player taking the candle
 * @returns {SceneModel} 
 */
export function takeCandleController(sceneId) {
    updateController(sceneId);
    dataStore.scenes[sceneId].uniqueState.candleOn = false;
    dataStore.scenes[sceneId].fragments.candle.show = false;
    updateAllContexts(dataStore, sceneId, "shrine", "show", false);
    addItemsToInventory(dataStore, ["candle"]);
    return dataStore.scenes[sceneId];
}

/**
 * Updates the Shrine scene values relevant to the player breaking the window
 * @returns {SceneModel} 
 */
export function breakWindowController(sceneId) {
    updateController(sceneId);
    dataStore.scenes[sceneId].uniqueState.windowBroken = true;
    dataStore.scenes[sceneId].fragments.window.show = true;

    updateAllContexts(dataStore, sceneId, "window", "show", false);
    updateAllContexts(dataStore, sceneId, "windowBroken", "show", true);

    return dataStore.scenes[sceneId];
}

