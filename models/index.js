import { playerModel } from './player/index.js';
import { scenes } from './scenes/index.js';
import { itemsModel } from './items/index.js';

export const dataStore = {
    player: playerModel,
    scenes: scenes,
    items: itemsModel,
}