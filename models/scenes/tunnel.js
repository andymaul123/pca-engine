import { defaultLook, defaultMove, defaultTalk, defaultItem, roomIsDark, sceneTransition } from "./common.js";

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
    audio: "/audio/Kingdom-in-Despair.mp3",
    audioUpdate: false,
    basemats: {
        current: "image/scenes/tunnel/tunnel-sunfall.png",
    },
    fragments: null,
    overlayNodes: {
        back: {
            coords: [849, 624, 1266, 624, 1266, 708, 849, 708],
            id: "back",
            contexts: {
                look: {
                    triggerScript: "scenes/messages?sceneId=tunnel&messageId=back_look",
                    triggerTarget: "text-overlay",
                    swap: null,
                    show: true,
                    soundEffect: null,
                    showInDark: true,
                },
                move: {
                    triggerScript: "scenes/init?sceneId=shrine",
                    triggerTarget: "main-scene",
                    swap: sceneTransition,
                    show: true,
                    soundEffect: null,
                    showInDark: true,
                    isSceneTransition: true,
                },
                talk: {
                    triggerScript: "scenes/messages?sceneId=tunnel&messageId=defaultTalk",
                    triggerTarget: "text-overlay",
                    swap: null,
                    show: true,
                    soundEffect: null,
                    showInDark: true,
                },
                item: {
                    default: {
                        triggerScript: "scenes/messages?sceneId=tunnel&messageId=defaultItem",
                        triggerTarget: "text-overlay",
                        swap: null,
                        show: true,
                        soundEffect: null,
                        showInDark: true,
                        linkedItemId: null,
                    },
                },
            },
        },
        window: {
            coords: [831, 498, 906, 498, 897, 396, 867, 381, 843, 396],
            id: "window",
            contexts: {
                look: {
                    triggerScript: "scenes/messages?sceneId=tunnel&messageId=window",
                    triggerTarget: "text-overlay",
                    swap: null,
                    show: true,
                    soundEffect: null,
                    showInDark: false,
                },
                move: {
                    triggerScript: "scenes/messages?sceneId=tunnel&messageId=defaultMove",
                    triggerTarget: "text-overlay",
                    swap: null,
                    show: true,
                    soundEffect: null,
                    showInDark: false,
                },
                talk: {
                    triggerScript: "scenes/messages?sceneId=tunnel&messageId=defaultTalk",
                    triggerTarget: "text-overlay",
                    swap: null,
                    show: true,
                    soundEffect: null,
                    showInDark: false,
                },
                item: {
                    default: {
                        triggerScript: "scenes/messages?sceneId=tunnel&messageId=defaultItem",
                        triggerTarget: "text-overlay",
                        swap: null,
                        show: true,
                        soundEffect: null,
                        showInDark: true,
                        linkedItemId: null,
                    },
                },
            },
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
        defaultLook: defaultLook,
        defaultMove: defaultMove,
        defaultTalk: defaultTalk,
        defaultItem: defaultItem,
    },
    decisions: {},
  }