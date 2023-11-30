export class Player {
    constructor() {
        this.inventory = ['banana'];
    }

    getInventory() {
        // Temporary
        return {
            inventory: [
                {
                    name: "candle",
                    image: "image/items/candle.png",
                    description: "Description of a candle item."
                },
                // {
                //     name: "ring",
                //     image: "image/items/ring.png",
                //     description: "Description of a ring item."
                // },
                // {
                //     name: "sword",
                //     image: "image/items/sword.png",
                //     description: "Description of a sword item."
                // },
            ],
        }


        //return this.inventory;
    }

    addInventoryItem(item) {
        this.inventory.push(item);
        return this.inventory;
    }
  }

