import { dataStore } from '../../models/index.js';
import { transformText, roomDarkness, determineStartMessage } from './common.js';
import { getPlayerContext, setCurrentScene } from '../player/common.js';
import "../../types/index.js";

const sceneId = "tunnel";

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
    if(dataStore.scenes[sceneId].commonState.visited == true) {
        dataStore.scenes[sceneId].commonState.visited = false;
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
    updateController()
    const startMessage = determineStartMessage(dataStore, sceneId);
    return startMessage ? dataStore.scenes[sceneId].messages[startMessage] : null;
}

/**
 * Access a message and returns it
 * @param {string} id
 * @returns {Message | null} 
 */
export function messageController(id) {
    updateController()
    const message = dataStore.scenes[sceneId].messages[id];
    return message ? message : null;
}

/**
 * Access a decision and returns it
 * @param {string} id
 * @returns {Decision | null} 
 */
export function decisionController(id) {
    updateController()
    const decision = dataStore.scenes[sceneId].decisions[id];
    return decision ? decision : null;
}
