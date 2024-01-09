import { dataStore } from '../../models/index.js';
import { transformText, roomDarkness, determineStartMessage } from './common.js';
import { addItemsToInventory } from '../player/common.js';
import "../../types/types.js";

const sceneId = "shrine";

/**
 * Initializes the scene
 * 1. Transforms the text arrays into html
 * 2. Evaluates room darkness
 * @returns {Scene} 
 */
export function initializeController() {
    transformText(dataStore, sceneId);
    roomDarkness(dataStore, sceneId);
    return dataStore.scenes[sceneId];
}

/**
 * Checks for start message, and if it exists, return a Message
 * @returns {Message | null} 
 */
export function startMessageController() {
    const startMessage = determineStartMessage(dataStore, sceneId);
    return startMessage ? dataStore.scenes[sceneId].messages[startMessage] : null;
}

/**
 * Access a message and returns it
 * @param {string} id
 * @returns {Message | null} 
 */
export function messageController(id) {
    const message = dataStore.scenes[sceneId].messages[id];
    return message ? message : null;
}

/**
 * Access a decision and returns it
 * @param {string} id
 * @returns {Decision | null} 
 */
export function decisionController(id) {
    const decision = dataStore.scenes[sceneId].decisions[id];
    return decision ? decision : null;
}

/**
 * Updates the Shrine scene values relevant to the player taking the candle
 * @returns {Scene} 
 */
export function takeCandleController() {
    dataStore.scenes[sceneId].candleOn = false;
    dataStore.scenes[sceneId].fragments.candle.show = false;
    dataStore.scenes[sceneId].overlayNodes[sceneId].show = false;
    addItemsToInventory(dataStore, ["candle"]);
    return dataStore.scenes[sceneId];
}

/**
 * Updates the Shrine scene values relevant to the player breaking the window
 * @returns {Scene} 
 */
export function breakWindowController() {
    dataStore.scenes[sceneId].windowBroken = true;
    dataStore.scenes[sceneId].fragments.window.show = true;
    dataStore.scenes[sceneId].overlayNodes.window.show = false;
    dataStore.scenes[sceneId].overlayNodes.windowBroken.show = true;
    return dataStore.scenes[sceneId];
}