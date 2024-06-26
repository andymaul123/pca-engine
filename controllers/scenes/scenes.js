import { dataStore } from '../../models/index.js';
import { transformText, roomDarkness, determineStartMessage } from './common.js';
import { getPlayerContext, setCurrentScene, getCurrentScene } from '../player/common.js';
import "../../types/index.js";

/**
 * Initializes the scene
 * 1. Transforms the text arrays into html
 * 2. Evaluates room darkness
 * 3. Updates background music
 * @param {string} sceneId
 * @returns {SceneModel} 
 */
export function initializeController(sceneId) {
    transformText(dataStore, sceneId);
    roomDarkness(dataStore, sceneId);
    // We want to show the start message once each time the player enters the scene
    if(getCurrentScene() != sceneId) {
        dataStore.scenes[sceneId].commonState.showSceneStartItems = true;
    }
    setCurrentScene(sceneId);
    updateBackgroundAudio(sceneId);
    return dataStore.scenes[sceneId];
}

/**
 * A sort of 'controller middleware', called by other controllers before
 * their own logic.
 * @param {string} sceneId
 * @returns {void} 
 */
export function updateController(sceneId) {
    // Updates scene visited value once a player has made an interaction
    if(dataStore.scenes[sceneId].commonState.visited == false) {
        dataStore.scenes[sceneId].commonState.visited = true;
    }
    dataStore.scenes[sceneId].commonState.showSceneStartItems = false;
    updateBackgroundAudio(sceneId);
}

/**
 * Reloads the scene when a player changes context
 * @param {string} sceneId
 * @returns {SceneModel} 
 */
export function contextualizeSceneRender(sceneId) {
    setCurrentScene(sceneId);
    return dataStore.scenes[sceneId];
}

/**
 * Sets up a scene after the game is loaded from disk
 * @param {string} sceneId
 * @returns {SceneModel} 
 */
export function loadSceneController(sceneId) {
    // do other things?
    updateBackgroundAudio(sceneId);
    // TODO: when a scene is loaded, updateBackgroundAudio may set its audioUpdate value to true
    // this is generally the right idea, but there's a bug when context is changed that audio repeats...
    return dataStore.scenes[sceneId];
}

/**
 * Checks for start message, and if it exists, return a Message
 * @param {string} sceneId
 * @returns {Message | null} 
 */
export function startMessageController(sceneId) {
    updateController(sceneId);
    const startMessage = determineStartMessage(dataStore, sceneId);
    return startMessage ? dataStore.scenes[sceneId].messages[startMessage] : null;
}

/**
 * Access a message and returns it
 * @param {string} sceneId
 * @param {string} messageId
 * @returns {Message | null} 
 */
export function messageController(sceneId, messageId) {
    updateController(sceneId);
    const message = dataStore.scenes[sceneId].messages[messageId];
    return message ? message : null;
}

/**
 * Access a decision and returns it
 * @param {string} sceneId
 * @param {string} decisionId
 * @returns {Decision | null} 
 */
export function decisionController(sceneId, decisionId) {
    updateController(sceneId);
    const decision = dataStore.scenes[sceneId].decisions[decisionId];
    return decision ? decision : null;
}

/**
 * Compares currently playing bg music with a scene's listed track and updates accordingly
 * @param {string} sceneId
 * @returns {void} 
 */
function updateBackgroundAudio(sceneId) {
    // TODO: Probably shouldn't let the scenes controller update the datastore global state?
    if(dataStore.scenes[sceneId].audio == dataStore.globalState.currentAudio) {
        dataStore.scenes[sceneId].audioUpdate = false;
    } else {
        dataStore.scenes[sceneId].audioUpdate = true;
        dataStore.globalState.currentAudio = dataStore.scenes[sceneId].audio;
    }
}