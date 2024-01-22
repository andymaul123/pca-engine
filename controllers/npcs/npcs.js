import { dataStore } from '../../models/index.js';
import { transformNpcText } from './common.js';
import "../../types/index.js";



/**
 * Access a message and returns it
 * @param {string} id
 * @returns {Dialogue | null} 
 */
export function dialogueController(npcID, dialogueID) {

    if(!dataStore.npcs[npcID].messagesConverted) {
        transformNpcText(dataStore, npcID);
    }

    const dialogue = {
        id: dataStore.npcs[npcID].id,
        name: dataStore.npcs[npcID].name,
        portrait: dataStore.npcs[npcID].portrait,
        message: dataStore.npcs[npcID].messages[dialogueID],
    };

    if(!dialogue.id) {
        return null;
    }

    return dialogue;
}