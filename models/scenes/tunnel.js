import { roomIsDark, sceneTransition } from "./common.js";

/** 
* @type SceneModel 
*/
export const tunnelModel = {
    id: "tunnel",
    commonState: {
        isDark: true,
        isCurrentlyDark: true,
        messagesConverted: false,
        visited: false,
        context: null,
        showSceneStartItems: false,
    },
    uniqueState: {},
    areaTitle: null,
    basemats: {
        current: "image/tunnel-nyx.png",
    },
    fragments: null,
    overlayNodes: {
        back_move: {
            coords: [849, 624, 1266, 624, 1266, 708, 849, 708],
            id: "back_move",
            triggerScript: "scenes/init?sceneId=shrine",
            triggerTarget: "main-scene",
            swap: sceneTransition,
            show: true,
            soundEffect: null,
            showInDark: true,
            context: "move",
        },
        back_look: {
            coords: [849, 624, 1266, 624, 1266, 708, 849, 708],
            id: "back_look",
            triggerScript: "scenes/messages?sceneId=tunnel&messageId=back_look",
            triggerTarget: "text-overlay",
            swap: null,
            show: true,
            soundEffect: null,
            showInDark: true,
            context: "look",
        },
        window: {
            coords: [831, 498, 906, 498, 897, 396, 867, 381, 843, 396],
            id: "window",
            triggerScript: "scenes/messages?sceneId=tunnel&messageId=window",
            triggerTarget: "text-overlay",
            swap: null,
            show: true,
            soundEffect: null,
            showInDark: false,
            context: "look",
        },
    },
    messages: {
        window: {
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
        back_look: {
            nextMessage: null,
            triggerScript: null,
            actionData: null,
            targetId: null,
            textArray: [
                {
                    speed: 50,
                    text: "The passageway back to the",
                    classes: [],
                },
                {
                    speed: 50,
                    text: " Shrine ",
                    classes: ['callout'],
                },
                {
                    speed: 50,
                    text: "room.",
                    classes: [],
                },
            ],
        },
        start: null,
        roomIsDark: roomIsDark,
    },
    decisions: {},
  }