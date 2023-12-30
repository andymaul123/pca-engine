import { transformTextToHTML } from "../../utils/transformTextToHtml.js";

export function transformText(dataStore, scene) {
    if(!dataStore?.scenes?.[scene]?.messages) {
        return;
    }
    for (const key in dataStore.scenes[scene].messages) {
        if( dataStore.scenes[scene].messages[key]) {
            dataStore.scenes[scene].messages[key].textString = transformTextToHTML(dataStore.scenes[scene].messages[key].textArray);
        }
    };
}

export function roomDarkness(dataStore, scene) {
    if(!dataStore?.scenes?.[scene] || !dataStore.scenes[scene].isDark) {
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

export function determineStartMessage(dataStore, scene) {
    if(!dataStore?.scenes?.[scene]) {
        return;
    }
    if(dataStore.scenes[scene].isCurrentlyDark) {
        return "roomIsDark";
    } else if(dataStore.scenes[scene].messages?.start) {
       return "start";
    }
    return null;
}