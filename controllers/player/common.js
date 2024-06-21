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
 * Returns player inventory array
 * @param {DataStore} dataStore
 * @returns {Array} 
 */
export function getInventory(dataStore) {
    return dataStore.player.inventory;
}

/**
 * Checks inventory array for a matching item id
 * @param {DataStore} dataStore
 * @param {string} id
 * @returns {boolean} 
 */
export function isItemInInventory(dataStore, id) {
    return dataStore.player.inventory.indexOf(id) > -1;
}

/**
 * Adds items to player's inventory array
 * @param {DataStore} dataStore
 * @param {Array<string>} ids
 * @returns {void} 
 */
export function addItemsToInventory(dataStore, ids) {
    ids.forEach((id) => {
        dataStore.player.inventory.push(id);
    }); 
}

/**
 * Removes items from player's inventory array
 * @param {DataStore} dataStore
 * @param {Array<string>} ids
 * @returns {void} 
 */
export function removeItemsFromInventory(dataStore, ids) {
    ids.forEach((id) => {
        const indexToRemove = dataStore.player.inventory.indexOf(id);
        if(indexToRemove > -1) {
            dataStore.player.inventory.splice(indexToRemove, 1);
        }
    });
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
export function setCurrentItem(itemId) {
    dataStore.player.currentItem = itemId;
}