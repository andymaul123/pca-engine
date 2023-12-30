import "../types/types.js";

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
 * More advanced version of getInventory that also supplies
 * a InventoryGUI object used to render the inventory menu screen
 * @param {DataStore} dataStore
 * @returns {InventoryGUI} 
 */
export function getInventoryWithGui(dataStore) {
    const inventoryIds = dataStore.player.inventory;
    const inventoryObjects = [];
    inventoryIds.forEach((key) => {
        inventoryObjects.push(dataStore.items[key]);
    });
    let itemRowToggleArray = [];
    inventoryObjects.forEach((item) => {
        const toggleData = [
            {className: 'revealed', target: '.visuals.revealed'}, 
            {className: 'revealed', target: `[data-id=${item.id}]`}, 
            {className: 'selected', target: '.item-row.selected'}, 
            {className: 'selected', target: `[data-key=${item.id}]`}
        ];
        itemRowToggleArray.push(toggleData);
    });

    const itemDescriptionToggleArray = [{className: 'show-description', target: '#inventory-menu .inner'}];

    return {
        inventory: inventoryObjects,
        itemRowToggle: itemRowToggleArray,
        itemDescriptionToggle: itemDescriptionToggleArray
    }
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