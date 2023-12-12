import { GameObject } from '../game-object.js';

export class Item extends GameObject {
    constructor({id, name, image, descriptionRules, descriptionFlavor}) {
      super(id, name);
      this.image = image;
      this.descriptionFlavor = descriptionFlavor;
      this.descriptionRules = descriptionRules;
    };

  }