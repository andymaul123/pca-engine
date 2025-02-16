import { defaultLook, defaultMove, defaultTalk, defaultItem, roomIsDark, sceneTransition } from "./common.js";

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
        showSceneStartItems: true,
    },
    uniqueState: {},
    areaTitle: null,
    audio: "/audio/Dragon-Mystery_Looping.mp3",
    audioUpdate: false,
    basemats: {
        current: "image/scenes/stairs/stairs-sunfall.png",
    },
    fragments: {
        lady: {
            path: "image/scenes/stairs/npc_world.png",
            show: true,
        },
    },
    overlayNodes: {
        back: {
            coords: [849, 624, 1266, 624, 1266, 708, 849, 708],
            id: "back",
            contexts: {
                look: {
                    triggerScript: "scenes/messages?sceneId=stairs&messageId=back_look",
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
                    triggerScript: "scenes/messages?sceneId=stairs&messageId=defaultTalk",
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
        under: {
            coords: [306, 609, 303, 531, 303, 345, 348, 246, 408, 189, 465, 198, 492, 228, 522, 288, 537, 357, 525, 378, 525, 426, 525, 471, 516, 498, 438, 510, 420, 579, 402, 594],
            id: "under",
            contexts: {
                look: {
                    triggerScript: "scenes/messages?sceneId=stairs&messageId=under",
                    triggerTarget: "text-overlay",
                    swap: null,
                    show: true,
                    soundEffect: null,
                    showInDark: false,
                },
                move: {
                    triggerScript: "scenes/messages?sceneId=stairs&messageId=defaultMove",
                    triggerTarget: "text-overlay",
                    swap: null,
                    show: true,
                    soundEffect: null,
                    showInDark: false,
                },
                talk: {
                    triggerScript: "scenes/messages?sceneId=stairs&messageId=defaultTalk",
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
            context: "look",
        },
        lady: {
            coords: [164,315,191,315,191,318,197,318,197,321,200,321,200,324,203,324,203,327,206,327,206,330,209,330,209,333,212,333,212,339,215,339,215,345,218,345,218,351,221,351,221,369,227,369,227,375,224,375,224,378,221,378,221,384,218,384,218,396,221,396,221,402,224,402,224,405,227,405,227,414,230,414,230,429,227,429,227,432,230,432,230,447,233,447,233,450,242,450,242,453,245,453,245,456,251,456,251,459,254,459,254,462,257,462,257,468,260,468,260,477,263,477,263,489,266,489,266,507,269,507,269,510,266,510,266,513,269,513,269,516,272,516,272,519,275,519,275,525,278,525,278,528,281,528,281,531,284,531,284,537,287,537,287,543,290,543,290,549,293,549,293,555,296,555,296,561,299,561,299,567,302,567,302,573,305,573,305,579,308,579,308,585,311,585,311,591,314,591,314,600,317,600,317,609,320,609,320,618,323,618,323,627,326,627,326,633,329,633,329,645,332,645,332,654,335,654,335,663,338,663,338,672,341,672,341,684,344,684,344,693,347,693,347,705,350,705,350,717,353,717,353,720,0,720,0,714,2,714,2,705,5,705,5,699,8,699,8,690,11,690,11,681,14,681,14,675,17,675,17,666,20,666,20,657,23,657,23,651,26,651,26,645,29,645,29,636,32,636,32,627,35,627,35,621,38,621,38,612,41,612,41,606,44,606,44,597,47,597,47,591,50,591,50,582,53,582,53,576,56,576,56,567,59,567,59,561,62,561,62,552,65,552,65,546,68,546,68,540,71,540,71,534,74,534,74,525,77,525,77,522,80,522,80,519,77,519,77,513,80,513,80,510,83,510,83,507,80,507,80,504,83,504,83,498,80,498,80,492,83,492,83,480,86,480,86,468,89,468,89,465,92,465,92,459,95,459,95,456,98,456,98,453,104,453,104,450,107,450,107,441,110,441,110,435,113,435,113,432,116,432,116,417,119,417,119,408,122,408,122,402,125,402,125,396,128,396,128,393,125,393,125,390,128,390,128,384,131,384,131,375,128,375,128,372,125,372,125,366,134,366,134,360,131,360,131,354,134,354,134,348,137,348,137,345,140,345,140,342,137,342,137,339,140,339,140,336,143,336,143,330,146,330,146,327,149,327,149,324,152,324,152,321,158,321,158,318,164,318,122,363,125,363,125,366,122,366],
            id: "lady",
            contexts: {
                look: {
                    triggerScript: "scenes/messages?sceneId=stairs&messageId=lady_look",
                    triggerTarget: "text-overlay",
                    swap: null,
                    show: true,
                    soundEffect: null,
                    showInDark: false,
                },
                move: {
                    triggerScript: "scenes/messages?sceneId=stairs&messageId=defaultMove",
                    triggerTarget: "text-overlay",
                    swap: null,
                    show: true,
                    soundEffect: null,
                    showInDark: false,
                },
                talk: {
                    triggerScript: "npcs/lady/dialogue/intro",
                    triggerTarget: "npc-dialogue",
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
        lady_look: {
            nextMessage: null,
            triggerScript: null,
            actionData: null,
            targetId: null,
            textArray: [
                {
                    speed: 50,
                    text: "A mysterious",
                    classes: [],
                },
                {
                    speed: 50,
                    text: " woman ",
                    classes: ['callout'],
                },
                {
                    speed: 50,
                    text: "stands beside a fountain. Her expression is serene.",
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
        defaultLook: defaultLook,
        defaultMove: defaultMove,
        defaultTalk: defaultTalk,
        defaultItem: defaultItem,
    },
    decisions: {},
  }