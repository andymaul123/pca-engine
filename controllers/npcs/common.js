import "../../types/index.js";
import { transformTextToHTML } from '../common.js';

/**
 * Loops through message objects in a NPC data object and sets the textString property
 * @param {DataStore} dataStore
 * @param {string} npcID
 * @returns {void} 
 */
export function transformNpcText(dataStore, npcID) {
    if(!dataStore.npcs[npcID].messages || dataStore.npcs[npcID].messagesConverted == true) {
        return;
    }
    for (const key in dataStore.npcs[npcID].messages) {
        if( dataStore.npcs[npcID].messages[key]) {
            dataStore.npcs[npcID].messages[key].textString = transformTextToHTML(dataStore.npcs[npcID].messages[key].textArray);
        }
    };
    dataStore.npcs[npcID].messagesConverted = true;
}