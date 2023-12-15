// The main controller

// Routes call the DungeonMaster to orchestrate actions
// The Dungeon Master handles mixing data and calling individual classes

import { Player } from './player/player.js';
import { SceneFactory } from './scenes/sceneFactory.js';
import { ItemFactory } from './game-objects/items/itemFactory.js';

export const DungeonMaster = {

    playerInstance: new Player(),
    /**
     * Gets the inventory id array
     * Creates an array of Item instances from instance map
     * Creates InventoryGuiObject
     * @returns {InventoryGuiObject}
     **/
    getInventory: function() {
        const inventoryIds = this.playerInstance.getInventory();
        const inventoryInstanceArray = [];
        inventoryIds.forEach((key) => {
            inventoryInstanceArray.push(this.itemInstanceMap(key));
        });
        let itemRowToggleArray = [];
        inventoryInstanceArray.forEach((item) => {
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
            inventory: inventoryInstanceArray,
            itemRowToggle: itemRowToggleArray,
            itemDescriptionToggle: itemDescriptionToggleArray
        }
    },
    /**
     * Gets the inventory id array
     * @returns {String[]}
     **/
    getInventoryIds: function() {
        return this.playerInstance.getInventory();
    },
    addItemsToInventory: function(arrayOfItemIds) {
        this.playerInstance.addItemsToInventory(arrayOfItemIds);
    },

    initialize: function() {},
    /**
     * A Map containing the instances of classes used
     * @type {Map<String, any>}
     **/
    itemInstances: new Map(),
    sceneInstances: new Map(),
    /**
     * Determines if an item instance exists in the map already or not
     * If yes, return it
     * If no, instantiate it and then return it
     * @param {string}  id - The id of the item instance
     * @returns {any} An Item instance
     **/
    itemInstanceMap: function(id) {
        console.log(`id is ${id}`);
        if(this.itemInstances.get(id)) {
            console.log("Item found, returning instance");
            return this.itemInstances.get(id);
        } else {
            console.log("No item found, creating new instance");
            const item = ItemFactory(id);
            this.itemInstances.set(id, new item());
            return this.itemInstances.get(id);
        }
    },

    /**
     * Determines if a scene instance exists in the map already or not
     * If yes, return it
     * If no, instantiate it and then return it
     * @param {string}  id - The id of the scene instance
     * @returns {any} A Scene instance
     **/
    sceneInstanceMap: function(id) {
        if(this.sceneInstances.get(id)) {
            console.log("Scene found, returning instance");
            return this.sceneInstances.get(id);
        } else {
            console.log("No scene found, creating new instance");
            const scene = SceneFactory(id);
            this.sceneInstances.set(id, new scene());
            return this.sceneInstances.get(id);
        }
    },



};