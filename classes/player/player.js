export class Player {
    constructor() {
        this.inventory = ['banana'];
    }

    getInventory() {
        return this.inventory;
    }

    addInventoryItem(item) {
        this.inventory.push(item);
        return this.inventory;
    }
  }