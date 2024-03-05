import { dataStore } from '../../models/index.js';
import { transformText, roomDarkness, determineStartMessage } from './common.js';
import { addItemsToInventory, getPlayerContext, setCurrentScene, getCurrentScene } from '../player/common.js';
import "../../types/index.js";

const sceneId = "shrine";


/**
 * Initializes the scene
 * 1. Transforms the text arrays into html
 * 2. Evaluates room darkness
 * @returns {SceneModel} 
 */
export function initializeController() {
    transformText(dataStore, sceneId);
    roomDarkness(dataStore, sceneId);
    dataStore.scenes[sceneId].commonState.context = getPlayerContext();
    // We want to show the start message once each time the player enters the scene
    if(getCurrentScene() != sceneId) {
        dataStore.scenes[sceneId].commonState.showSceneStartItems = true;
    }
    setCurrentScene(sceneId);
    return dataStore.scenes[sceneId];
}

/**
 * A sort of 'controller middleware', called by other controllers before
 * their own logic.
 * @returns {void} 
 */
function updateController() {
    // Updates scene visited value once a player has made an interaction
    if(dataStore.scenes[sceneId].commonState.visited == false) {
        dataStore.scenes[sceneId].commonState.visited = true;
    }
}

/**
 * Reloads the scene when a player changes context
 * @returns {SceneModel} 
 */
export function contextualizeSceneRender() {
    dataStore.scenes[sceneId].commonState.context = getPlayerContext();
    setCurrentScene(sceneId);
    return dataStore.scenes[sceneId];
}

/**
 * Checks for start message, and if it exists, return a Message
 * @returns {Message | null} 
 */
export function startMessageController() {
    updateController();
    const startMessage = determineStartMessage(dataStore, sceneId);
    return startMessage ? dataStore.scenes[sceneId].messages[startMessage] : null;
}

/**
 * Access a message and returns it
 * @param {string} id
 * @returns {Message | null} 
 */
export function messageController(id) {
    updateController();
    const message = dataStore.scenes[sceneId].messages[id];
    return message ? message : null;
}

/**
 * Access a decision and returns it
 * @param {string} id
 * @returns {Decision | null} 
 */
export function decisionController(id) {
    updateController();
    const decision = dataStore.scenes[sceneId].decisions[id];
    return decision ? decision : null;
}

/**
 * Updates the Shrine scene values relevant to the player taking the candle
 * @returns {SceneModel} 
 */
export function takeCandleController() {
    updateController();
    dataStore.scenes[sceneId].uniqueState.candleOn = false;
    dataStore.scenes[sceneId].fragments.candle.show = false;
    dataStore.scenes[sceneId].overlayNodes[sceneId].show = false;
    addItemsToInventory(dataStore, ["candle"]);
    return dataStore.scenes[sceneId];
}

/**
 * Updates the Shrine scene values relevant to the player breaking the window
 * @returns {SceneModel} 
 */
export function breakWindowController() {
    updateController();
    dataStore.scenes[sceneId].uniqueState.windowBroken = true;
    dataStore.scenes[sceneId].fragments.window.show = true;
    dataStore.scenes[sceneId].overlayNodes.window.show = false;
    dataStore.scenes[sceneId].overlayNodes.windowBroken.show = true;
    return dataStore.scenes[sceneId];
}

/**
 * Updates Shrine model after the player enters the window the first time
 * This replaces the broken window with a copy without the messages and decisions each time
 * @returns {void} 
 */
export function updateWindowController() {
    updateController();
    dataStore.scenes[sceneId].overlayNodes.windowBroken.show = false;
    dataStore.scenes[sceneId].overlayNodes.windowBrokenAfter.show = true;
}

// todo desc
// New paradigm where each 'interact' object defined in the model gets its own controller
// This one is for the actual candle shrine
// Needs to return an object with two properties:
// The first is the string defining a partial path (the where to render)
// And the second is a sceneObject (the what to render)
// Maybe a third that dictates render types?
export function shrineInteractController(context) {
    let sceneData = {
        routePath: "",
        data: {},
    };
    switch (context) {
        case 'look':

            return sceneData;
            break;

        case 'move':

          break;

        case 'talk':

          break;
        default:
          console.log(`Error: no known context received.`);
      }
}