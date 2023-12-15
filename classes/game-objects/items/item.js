import { GameObject } from '../game-object.js';

export class Item extends GameObject {
    constructor({id, name, image, descriptionRules, descriptionFlavor}) {
      super(id, name);
      this.image = image;
      this.descriptionFlavor = descriptionFlavor;
      this.descriptionRules = descriptionRules;
    };

  }

  export class Candle extends Item {
      constructor(id = '', name = '') {
        super(id, name);
        this.id = "candle",
        this.name = "Candle",
        this.image = "image/items/candle.png",
        this.descriptionRules = "Grants visibility in pitch-black rooms, and in a pinch, may set something aflame.",
        this.descriptionFlavor = "A peculiar candle with almost transparent wax. You found it on a shrine of unknown origin."
      };
    }

    export class Ring extends Item {
      constructor(id = '', name = '') {
        super(id, name);
        this.id = "ring",
        this.name = "Ring of Unsealing",
        this.image = "image/items/ring.png",
        this.descriptionRules = "Bypasses magic seals on doors.",
        this.descriptionFlavor = "Perhaps the most desirable of invested items are magic rings, whose powers resist the erosion of time through the art of permanency. This particular ring's physical appearance resembles the warding seals placed on thresholds."
      };
    }

    export class Sword extends Item {
      constructor(id = '', name = '') {
        super(id, name);
        this.id = "sword",
        this.name = "Ebony Sword",
        this.image = "image/items/sword.png",
        this.descriptionRules = "+5 ATK",
        this.descriptionFlavor = "An ebony-black sword with gilded ornamentation. It was given to you by the Princess, and allegedly, belonged to her royal guardsmen long ago."
      };
    }