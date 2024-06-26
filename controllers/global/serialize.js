import { readFileSync, writeFileSync } from 'fs';
import { dataStore } from "../../models/index.js";

/**
 * Saves the game's state into JSON on disk
 * @returns {void} 
 */
export function saveData() {
    console.log("Starting to save data...");
    let saveData = {};
    saveData.global = dataStore.globalState;
    saveData.player = dataStore.player;
    saveData.scenes = dataStore.scenes;
    
    writeFileSync("./saves/save.txt", JSON.stringify(saveData));
    console.log("Finished saving data!");
}

/**
 * Restores game's state from JSON on disk
 * @returns {void} 
 */
export function loadData() {
    console.log("Starting to load data...");

    const rawData = readFileSync("./saves/save.txt");
    const loadData = JSON.parse(rawData);
    dataStore.global = loadData.global;
    dataStore.player = loadData.player;
    dataStore.scenes.shrine = loadData.scenes.shrine;
    dataStore.scenes.stairs = loadData.scenes.stairs;
    dataStore.scenes.tunnel = loadData.scenes.tunnel;

    console.log("Finished loading data!");

}
