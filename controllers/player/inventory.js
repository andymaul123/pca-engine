import { dataStore } from '../../models/index.js';
import "../../types/index.js";

/**
 * Returns player inventory array
 * @param {DataStore} dataStore
 * @returns {Array} 
 */
export function getInventoryIds(dataStore) {
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
 * Inventory menu
 * @returns {Array<Item>} 
 */
export function getInventoryItems() {
    const inventoryIds = getInventoryIds(dataStore);
    const inventoryObjects = [];
    inventoryIds.forEach((key) => {
        inventoryObjects.push(dataStore.items[key]);
    });
    return inventoryObjects;
}