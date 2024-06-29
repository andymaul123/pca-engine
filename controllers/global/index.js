import { readFileSync, writeFileSync, existsSync } from 'fs';
import { dataStore } from "../../models/index.js";
import "../../types/index.js";

/**
 * Saves the game's state into JSON on disk
 * @returns {void} 
 */
export function saveData() {
    let saveData = {};
    saveData.global = dataStore.globalState;
    saveData.player = dataStore.player;
    saveData.scenes = dataStore.scenes;
    writeFileSync("./saves/save.txt", JSON.stringify(saveData));
}

/**
 * Restores game's state from JSON on disk
 * @returns {void} 
 */
export function loadData() {
    const rawData = readFileSync("./saves/save.txt");
    const loadData = JSON.parse(rawData);
    dataStore.globalState = loadData.global;
    dataStore.player = loadData.player;
    dataStore.scenes.shrine = loadData.scenes.shrine;
    dataStore.scenes.stairs = loadData.scenes.stairs;
    dataStore.scenes.tunnel = loadData.scenes.tunnel;
    dataStore.globalState.forceAudio = true;
}

/**
 * Checks to see if there's a save file to load
 * @returns {boolean} 
 */
export function loadDataExists() {
    return existsSync("./saves/save.txt");
}

/**
 * Returns global state from dataStore
 * @returns {GlobalStateModel} 
 */
export function getGlobalState() {
    return dataStore.globalState;
}
/**
 * Sets forceAudio
 * @param {boolean} value
 * @returns {void} 
 */
export function setForceAudio(value) {
    dataStore.globalState.forceAudio = value;
}