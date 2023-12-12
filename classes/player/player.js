export class Player {
    constructor() {
        this.inventory = [];
    }

    getInventory() {
        return this.inventory;
    }
    /**
     * Adds item key names into inventory
     * @param {String[]} arrayOfItems
     * @returns {String[]}
     **/
    addItemsToInventory(arrayOfItems) {
        arrayOfItems.forEach((key) => {
            if(!this.isItemInInventory(key)) {
                this.inventory.push(key);
            }
        });
        return this.inventory;
    }
    /**
     * Returns true/false if an item id is in the player inventory array
     * @param {String} id
     * @returns {Boolean}
     **/
    isItemInInventory(id) {
        return this.inventory.indexOf(id) > -1 ? true : false;
    }
  }



