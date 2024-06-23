import { dataStore } from "../../models/index.js";
import "../../types/index.js";

/**
 * Returns all player data
 * @returns {PlayerModel} 
 */
export function getPlayer() {
    return dataStore.player;
}

/**
 * Returns player's current context
 * @returns {string} 
 */
export function getPlayerContext() {
    return dataStore.player.context;
}

/**
 * Sets player's current context
 * @param {string} context
 * @returns {void} 
 */
export function setPlayerContext(context) {
    dataStore.player.context = context;
}


/**
 * Returns player's current scene
 * @returns {string} 
 */
export function getCurrentScene() {
    return dataStore.player.currentScene;
}

/**
 * Sets player's current scene
 * @param {string} newSceneId
 * @returns {void} 
 */
export function setCurrentScene(newSceneId) {
    dataStore.player.currentScene = newSceneId;
}

/**
 * Sets player's currently selected item
 * @param {string} itemId
 * @returns {void} 
 */
export function setSelectedItem(itemId) {
    dataStore.player.selectedItem = itemId;
}

/**
 * Gets player's currently selected item
 * @returns {string} 
 */
export function getSelectedItem() {
    return dataStore.player.selectedItem;
}

/**
 * Sets value for which item is currently being used
 * @param {string} itemId
 * @returns {void} 
 */
export function setUsedItem(itemId) {
    dataStore.player.usedItem = itemId;
}

/**
 * Gets value for which item is currently being used
 * @returns {string} 
 */
export function getUsedItem() {
    return dataStore.player.usedItem;
}