import "../../types/index.js";
import { transformTextToHTML } from '../common.js';

/**
 * Loops through message objects in a scene data object and sets the textString property
 * @param {DataStore} dataStore
 * @param {string} scene
 * @returns {void} 
 */
export function transformText(dataStore, scene) {
    if(!dataStore.scenes[scene].messages || dataStore.scenes[scene].commonState.messagesConverted == true) {
        return;
    }
    for (const key in dataStore.scenes[scene].messages) {
        if( dataStore.scenes[scene].messages[key]) {
            dataStore.scenes[scene].messages[key].textString = transformTextToHTML(dataStore.scenes[scene].messages[key].textArray);
        }
    };
    dataStore.scenes[scene].commonState.messagesConverted = true;
}

/**
 * Updates a scene's isCurrentlyDark value pending player having a light source
 * @param {DataStore} dataStore
 * @param {string} scene
 * @returns {void} 
 */
export function roomDarkness(dataStore, scene) {
    if(!dataStore.scenes[scene] || !dataStore.scenes[scene].commonState.isDark) {
        return;
    }
    dataStore.scenes[scene].commonState.isCurrentlyDark = true;
    dataStore.player.inventory.forEach((item) => {
        if(dataStore.items[item].lightSource) {
            dataStore.scenes[scene].commonState.isCurrentlyDark = false;
            return;
        }
    });
}

/**
 * Check's if a scene should display a start up message or not
 * Darkness messages are given priority
 * @param {DataStore} dataStore
 * @param {string} scene
 * @returns {string | null} 
 */
export function determineStartMessage(dataStore, scene) {
    if(!dataStore.scenes[scene]) {
        return;
    }
    if(dataStore.scenes[scene].commonState.isCurrentlyDark) {
        return "roomIsDark";
    } else if(dataStore.scenes[scene].messages.start) {
       return "start";
    }
    return null;
}