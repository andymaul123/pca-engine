/**
 * Updates the Shrine scene values relevant to the player taking the candle
 * @param {DataStore} dataStore
 * @returns {void} 
 */
export function takeCandle(dataStore) {
    dataStore.scenes.shrine.candleOn = false;
    dataStore.scenes.shrine.fragments.candle.show = false;
    dataStore.scenes.shrine.overlayNodes.shrine.show = false;
}

/**
 * Updates the Shrine scene values relevant to the player breaking the window
 * @param {DataStore} dataStore
 * @returns {void} 
 */
export function breakWindow(dataStore) {
    dataStore.scenes.shrine.windowBroken = true;
    dataStore.scenes.shrine.fragments.window.show = true;
    dataStore.scenes.shrine.overlayNodes.window.show = false;
    dataStore.scenes.shrine.overlayNodes.windowBroken.show = true;
}