import { roomIsDark } from "./common.js";

export const stairsModel = {
    id: "stairs",
    isDark: true,
    isCurrentlyDark: true,
    basemats: {
        current: "image/stairs-nyx.png",
    },
    fragments: null,
    overlayNodes: {
        back: {
            coords: [849, 624, 1266, 624, 1266, 708, 849, 708],
            id: "back",
            triggerScript: "scenes/shrine",
            triggerTarget: "main-scene",
            triggerScriptType: "GET",
            swap: "outerHTML swap:1s",
            show: true,
            soundEffect: null,
            showInDark: true,
        },
        under: {
            coords: [306, 609, 303, 531, 303, 345, 348, 246, 408, 189, 465, 198, 492, 228, 522, 288, 537, 357, 525, 378, 525, 426, 525, 471, 516, 498, 438, 510, 420, 579, 402, 594],
            id: "under",
            triggerScript: "scenes/stairs/messages/under",
            triggerTarget: "text-overlay",
            triggerScriptType: "GET",
            swap: null,
            show: true,
            soundEffect: null,
            showInDark: false,
        },
    },
    messages: {
        under: {
            nextMessage: null,
            triggerScript: null,
            triggerScriptType: "GET",
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