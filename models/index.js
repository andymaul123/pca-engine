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
    intro: {
        introScrollMessage: "There is no day. There is no night. There is only gloam and shadow. Twilight. On the moldering bones of a golden age reign the God-Emperors, defenders against mankind's annihilation. Outward, from the shielding embrace of their City-States, are the Wastes: umbral lands under moonless skies, where exist wanderers and pariahs. Heretics. Will you wander forever, awake yet asleep? Or will you find your destiny among the dunes and dusk?",
    },
    globalState: {
        currentAudio: null,
        forceAudio: false,
    },
}