import { playerModel } from './player/index.js';
import { scenes } from './scenes/index.js';
import { itemsModel } from './items/index.js';
import { npcModel } from './npcs/index.js';

import "../types/index.js";


/** 
* @type DataStore 
*/
export const dataStore = {
    player: playerModel,
    scenes: scenes,
    items: itemsModel,
    npcs: npcModel,
    globalState: {
        currentAudio: null,
        forceAudio: false,
    },
}