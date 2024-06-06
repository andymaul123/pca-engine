import { dataStore } from '../../models/index.js';
import { transformText, roomDarkness, determineStartMessage } from './common.js';
import { getPlayerContext, setCurrentScene, getCurrentScene } from '../player/common.js';
import "../../types/index.js";

/**
 * Initializes the scene
 * 1. Transforms the text arrays into html
 * 2. Evaluates room darkness
 * @returns {SceneModel} 
 */
export function initializeController(sceneId) {
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
export function updateController(sceneId) {
    // Updates scene visited value once a player has made an interaction
    if(dataStore.scenes[sceneId].commonState.visited == false) {
        dataStore.scenes[sceneId].commonState.visited = true;
    }
    dataStore.scenes[sceneId].commonState.showSceneStartItems = false;
}

/**
 * Reloads the scene when a player changes context
 * @returns {SceneModel} 
 */
export function contextualizeSceneRender(sceneId) {
    dataStore.scenes[sceneId].commonState.context = getPlayerContext();
    setCurrentScene(sceneId);
    return dataStore.scenes[sceneId];
}

/**
 * Checks for start message, and if it exists, return a Message
 * @returns {Message | null} 
 */
export function startMessageController(sceneId) {
    updateController(sceneId);
    const startMessage = determineStartMessage(dataStore, sceneId);
    console.log(startMessage);
    return startMessage ? dataStore.scenes[sceneId].messages[startMessage] : null;
}

/**
 * Access a message and returns it
 * @param {string} id
 * @returns {Message | null} 
 */
export function messageController(sceneId, messageId) {
    updateController(sceneId);
    const message = dataStore.scenes[sceneId].messages[messageId];
    return message ? message : null;
}

/**
 * Access a decision and returns it
 * @param {string} id
 * @returns {Decision | null} 
 */
export function decisionController(sceneId, decisionId) {
    updateController(sceneId);
    const decision = dataStore.scenes[sceneId].decisions[decisionId];
    return decision ? decision : null;
}