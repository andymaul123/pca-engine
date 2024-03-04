import { roomIsDark, sceneTransition } from "./common.js";

/** 
* @type SceneModel 
*/
export const stairsModel = {
    id: "stairs",
    commonState: {
        isDark: true,
        isCurrentlyDark: true,
        messagesConverted: false,
        visited: false,
        context: null,
        showSceneStartItems: true,
    },
    uniqueState: {},
    areaTitle: null,
    basemats: {
        current: "image/stairs-nyx.png",
    },
    fragments: {
        lady: {
            path: "image/stairs-npc1-fragment-nyx.png",
            show: true,
        },
    },
    overlayNodes: {
        back: {
            coords: [849, 624, 1266, 624, 1266, 708, 849, 708],
            id: "back",
            triggerScript: "scenes/shrine",
            triggerTarget: "main-scene",
            swap: sceneTransition,
            show: true,
            soundEffect: null,
            showInDark: true,
            context: "move",
        },
        under: {
            coords: [306, 609, 303, 531, 303, 345, 348, 246, 408, 189, 465, 198, 492, 228, 522, 288, 537, 357, 525, 378, 525, 426, 525, 471, 516, 498, 438, 510, 420, 579, 402, 594],
            id: "under",
            triggerScript: "scenes/stairs/messages/under",
            triggerTarget: "text-overlay",
            swap: null,
            show: true,
            soundEffect: null,
            showInDark: false,
            context: "look",
        },
        lady: {
            coords: [291, 696, 291, 720, 111, 720, 147, 642, 117, 633, 123, 624, 153, 612, 231, 411, 246, 411, 291, 501, 312, 618, 348, 633, 348, 636, 297, 657, 309, 693, 306, 696],
            id: "lady",
            triggerScript: "npcs/lady/dialogue/intro",
            triggerTarget: "npc-dialogue",
            swap: null,
            show: true,
            soundEffect: null,
            showInDark: false,
            context: "talk",
        },
    },
    messages: {
        under: {
            nextMessage: null,
            triggerScript: null,
            actionData: null,
            targetId: null,
            textArray: [
                {
                    speed: 50,
                    text: "This is a message with a",
                    classes: [],
                },
                {
                    speed: 50,
                    text: " special ",
                    classes: ['callout'],
                },
                {
                    speed: 50,
                    text: "word in it.",
                    classes: [],
                },
            ],
        },
        start: {
            nextMessage: null,
            triggerScript: null,
            triggerScriptType: null,
            actionData: null,
            targetId: null,
            swap: null,
            textArray: [
                {
                    speed: 50,
                    text: "Stairs Test startup message",
                    classes: [],
                },
            ],
            textString: null,
            soundEffect: null,
        },
        roomIsDark: roomIsDark,
    },
    decisions: {},
  }