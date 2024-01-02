import "../../types/types.js";

/**
 * Loops through message objects in a scene data object and sets the textString property
 * @param {DataStore} dataStore
 * @param {string} scene
 * @returns {void} 
 */
export function transformText(dataStore, scene) {
    if(!dataStore.scenes[scene].messages) {
        return;
    }
    for (const key in dataStore.scenes[scene].messages) {
        if( dataStore.scenes[scene].messages[key]) {
            dataStore.scenes[scene].messages[key].textString = transformTextToHTML(dataStore.scenes[scene].messages[key].textArray);
        }
    };
}

/**
 * Updates a scene's isCurrentlyDark value pending player having a light source
 * @param {DataStore} dataStore
 * @param {string} scene
 * @returns {void} 
 */
export function roomDarkness(dataStore, scene) {
    if(!dataStore.scenes[scene] || !dataStore.scenes[scene].isDark) {
        return;
    }
    dataStore.scenes[scene].isCurrentlyDark = true;
    dataStore.player.inventory.forEach((item) => {
        if(dataStore.items[item].lightSource) {
            dataStore.scenes[scene].isCurrentlyDark = false;
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
    if(dataStore.scenes[scene].isCurrentlyDark) {
        return "roomIsDark";
    } else if(dataStore.scenes[scene].messages.start) {
       return "start";
    }
    return null;
}

/**
 * Helper function to offload heavy logic from EJS partials
 * where characters are wrapped in elements for the typewriter
 * Takes a MessageTextData object and converts it to a string of text with proper HTML tags
 * @param {Array<MessageTextData>} messages
 * @returns {string}
 */

export function transformTextToHTML(messages) {
    let transformedString = '';
    // Outer loop that runs through all of the entries in the messages
    for (let messagesIndex = 0; messagesIndex < messages.length; messagesIndex++) {
        
        // Split the text into words
        // Loop through each word, creating a 'chunk' that is wrapped in the word span data and a space
        const words = messages[messagesIndex].text.split(" ");
        for (let wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
            let chunk = '';
            chunk += "<span class='word'>";
            const characters = words[wordsIndex].split('');

            // For each character, wrap it in a span and glue it to the chunk
            for (let charactersIndex = 0; charactersIndex < characters.length; charactersIndex++) {
                chunk += `<span class='character ${messages[messagesIndex].classes}' `;
                chunk += `data-speed=${characters[charactersIndex] == ' ' ? 0 : messages[messagesIndex].speed}>`;
                chunk += characters[charactersIndex];
                chunk += "</span>"; 
            }

            chunk += " ";
            chunk += "</span>";

            transformedString += chunk;
        }
    }

    return transformedString;
}