import { dataStore } from "../models/index.js";

const player = dataStore.player;

export const playerController = {
    getInventory: function() {
        return player.inventory;
    },
    getInventoryWithGui: function() {
        const inventoryIds = this.getInventory();
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
    },
    addItemToInventory: function(id) {
        player.inventory.push(id);
    },
    addItemsToInventory: function(ids) {
        ids.forEach((id) => {
            player.inventory.push(id);
        })
    },

}