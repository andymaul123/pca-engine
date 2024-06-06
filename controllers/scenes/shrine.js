import { dataStore } from '../../models/index.js';
import { updateController } from './scenes.js';
import { addItemsToInventory } from '../player/common.js';
import "../../types/index.js";

/**
 * Updates the Shrine scene values relevant to the player taking the candle
 * @returns {SceneModel} 
 */
export function takeCandleController(sceneId) {
    updateController(sceneId);
    dataStore.scenes[sceneId].uniqueState.candleOn = false;
    dataStore.scenes[sceneId].fragments.candle.show = false;
    dataStore.scenes[sceneId].overlayNodes[sceneId].show = false;
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
    dataStore.scenes[sceneId].overlayNodes.window.show = false;
    dataStore.scenes[sceneId].overlayNodes.windowBroken.show = true;
    return dataStore.scenes[sceneId];
}

/**
 * Updates Shrine model after the player enters the window the first time
 * This replaces the broken window with a copy without the messages and decisions each time
 * @returns {void} 
 */
export function updateWindowController(sceneId) {
    updateController(sceneId);
    dataStore.scenes[sceneId].overlayNodes.windowBroken.show = false;
    dataStore.scenes[sceneId].overlayNodes.windowBrokenAfter.show = true;
}

