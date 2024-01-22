import "../types/index.js";

/**
 * Helper function to offload heavy logic from EJS partials
 * where characters are wrapped in elements for the typewriter
 * Takes a TextChunk object and converts it to a string of text with proper HTML tags
 * @param {Array<TextChunk>} messages
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