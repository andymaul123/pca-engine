import { defaultLook, defaultMove, defaultTalk, defaultItem, roomIsDark, sceneTransition } from "./common.js";

/** 
* @type SceneModel 
*/
export const shrineModel = {
    id: "shrine",
    commonState: {
        isDark: false,
        isCurrentlyDark: false,
        messagesConverted: false,
        visited: false,
        showSceneStartItems: false,
    },
    uniqueState: {
        candleOn: true,
        windowBroken: false,
    },
    areaTitle: "Western Wing",
    audio: "/audio/Kingdom-in-Despair.mp3",
    audioUpdate: false,
    basemats: {
        current: "image/scenes/shrine/shrine_bg.png",
    },
    fragments: {
        window: {
            path: "image/scenes/shrine/shrine_fragment_window.png",
            show: false,
        },
        candle: {
            path: "image/scenes/shrine/shrine_fragment_candle-animation.gif",
            show: true,
        }
    },
    overlayNodes: {
        window: {
            coords: [216,162,228,162,228,168,234,168,234,174,240,174,240,180,246,180,246,183,252,183,252,210,258,210,258,234,264,234,264,261,270,261,270,270,276,270,276,411,144,411,144,357,150,357,150,306,156,306,156,237,162,237,162,231,168,231,168,228,174,228,174,201,183,201,183,198,189,198,189,192,195,192,195,183,201,183,201,180,207,180,207,171,213,171,213,165,216,165],
            id: "window",
            contexts: {
                look: {
                    triggerScript: "scenes/messages?sceneId=shrine&messageId=window",
                    triggerTarget: "text-overlay",
                    swap: null,
                    show: true,
                    soundEffect: null,
                    showInDark: false,
                },
                move: {
                    triggerScript: "scenes/messages?sceneId=shrine&messageId=defaultMove",
                    triggerTarget: "text-overlay",
                    swap: null,
                    show: true,
                    soundEffect: null,
                    showInDark: false,
                },
                talk: {
                    triggerScript: "scenes/messages?sceneId=shrine&messageId=defaultTalk",
                    triggerTarget: "text-overlay",
                    swap: null,
                    show: true,
                    soundEffect: null,
                    showInDark: false,
                },
                item: {
                    default: {
                        triggerScript: "scenes/messages?sceneId=shrine&messageId=defaultItem",
                        triggerTarget: "text-overlay",
                        swap: null,
                        show: true,
                        soundEffect: null,
                        showInDark: true,
                        linkedItemId: null,
                    },
                    sword: {
                        triggerScript: "scenes/messages?sceneId=shrine&messageId=sword_window",
                        triggerTarget: "text-overlay",
                        swap: null,
                        show: true,
                        soundEffect: null,
                        showInDark: true,
                        linkedItemId: "sword",
                    },
                },
            },
        },
        windowBroken: {
            coords: [216,162,228,162,228,168,234,168,234,174,240,174,240,180,246,180,246,183,252,183,252,210,258,210,258,234,264,234,264,261,270,261,270,270,276,270,276,411,144,411,144,357,150,357,150,306,156,306,156,237,162,237,162,231,168,231,168,228,174,228,174,201,183,201,183,198,189,198,189,192,195,192,195,183,201,183,201,180,207,180,207,171,213,171,213,165,216,165],
            id: "windowBroken",
            contexts: {
                look: {
                    triggerScript: "scenes/messages?sceneId=shrine&messageId=brokenwindow",
                    triggerTarget: "text-overlay",
                    swap: null,
                    show: false,
                    soundEffect: null,
                    showInDark: false,
                },
                move: {
                    triggerScript: "scenes/init?sceneId=tunnel",
                    triggerTarget: "main-scene",
                    swap: sceneTransition,
                    show: false,
                    soundEffect: null,
                    showInDark: false,
                    isSceneTransition: true,
                },
                talk: {
                    triggerScript: "scenes/messages?sceneId=shrine&messageId=defaultTalk",
                    triggerTarget: "text-overlay",
                    swap: null,
                    show: false,
                    soundEffect: null,
                    showInDark: false,
                },
                item: {
                    default: {
                        triggerScript: "scenes/messages?sceneId=tunnel&messageId=defaultItem",
                        triggerTarget: "text-overlay",
                        swap: null,
                        show: false,
                        soundEffect: null,
                        showInDark: true,
                        linkedItemId: null,
                    },
                },
            },
        },
        shrine: {
            coords: [801,387,816,387,816,390,819,390,819,393,822,393,822,396,825,396,825,402,828,402,828,417,834,417,834,420,837,420,837,423,840,423,840,585,837,585,837,588,834,588,834,594,831,594,831,597,828,597,828,600,825,600,825,603,786,603,786,606,783,606,783,609,765,609,765,606,759,606,759,603,744,603,744,600,738,600,738,591,741,591,741,588,738,588,738,585,735,585,735,567,738,567,738,564,741,564,741,561,744,561,744,546,741,546,741,543,738,543,738,495,741,495,741,456,744,456,744,450,747,450,747,447,750,447,750,441,753,441,753,438,756,438,756,429,759,429,759,426,777,426,777,423,780,423,780,417,783,417,783,405,786,405,786,402,789,402,789,396,792,396,792,393,795,393,795,390,801,390],
            id: "shrine",
            contexts: {
                look: {
                    triggerScript: "scenes/messages?sceneId=shrine&messageId=shrine",
                    triggerTarget: "text-overlay",
                    swap: null,
                    show: true,
                    soundEffect: null,
                    showInDark: false,
                },
                move: {
                    triggerScript: "scenes/messages?sceneId=shrine&messageId=defaultMove",
                    triggerTarget: "text-overlay",
                    swap: null,
                    show: true,
                    soundEffect: null,
                    showInDark: false,
                },
                talk: {
                    triggerScript: "scenes/messages?sceneId=shrine&messageId=defaultTalk",
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
        sceneTransitionStairs:{
            coords: [0,0,162,0,162,3,159,3,159,6,153,6,153,9,150,9,150,12,147,12,147,15,144,15,144,18,141,18,141,21,135,21,135,24,129,24,129,30,123,30,123,33,120,33,120,36,117,36,117,39,114,39,114,42,111,42,111,48,108,48,108,54,105,54,105,63,102,63,102,69,99,69,99,81,96,81,96,90,93,90,93,123,90,123,90,129,84,129,84,138,81,138,81,144,78,144,78,150,75,150,75,153,72,153,72,159,69,159,69,165,63,165,63,189,60,189,60,204,57,204,57,213,54,213,54,219,51,219,51,225,48,225,48,231,45,231,45,237,42,237,42,246,39,246,39,249,36,249,36,252,33,252,33,270,36,270,36,303,39,303,39,306,42,306,42,312,45,312,45,315,48,315,48,330,51,330,51,342,54,342,54,357,51,357,51,360,48,360,48,363,45,363,45,366,39,366,39,387,36,387,36,432,33,432,33,441,30,441,30,453,27,453,27,468,24,468,24,480,21,480,21,486,24,486,24,489,27,489,27,492,30,492,30,495,33,495,33,498,36,498,36,501,39,501,39,510,42,510,42,522,45,522,45,561,48,561,48,567,51,567,51,579,54,579,54,600,51,600,51,603,54,603,54,609,57,609,57,615,60,615,60,621,69,621,69,624,72,624,72,627,75,627,75,633,78,633,78,639,81,639,81,642,84,642,84,648,87,648,87,654,90,654,90,657,93,657,93,660,96,660,96,666,99,666,99,669,105,669,105,672,108,672,108,675,111,675,111,681,114,681,114,684,132,684,132,687,138,687,138,690,144,690,144,693,147,693,147,696,150,696,150,699,153,699,153,702,156,702,156,705,159,705,159,708,162,708,162,714,165,714,165,717,168,717,168,720,0,720],
            id: "sceneTransitionStairs",
            contexts: {
                look: {
                    triggerScript: "scenes/messages?sceneId=shrine&messageId=stairslook",
                    triggerTarget: "text-overlay",
                    swap: null,
                    show: true,
                    soundEffect: null,
                    showInDark: false,
                },
                move: {
                    triggerScript: "scenes/init?sceneId=stairs",
                    triggerTarget: "main-scene",
                    swap: sceneTransition,
                    show: true,
                    soundEffect: null,
                    showInDark: false,
                    isSceneTransition: true,
                },
                talk: {
                    triggerScript: "scenes/messages?sceneId=shrine&messageId=defaultTalk",
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
                    text: "The glass in the window looks brittle; you could probably break it with something.",
                    classes: [],
                },
            ]
        },
        shrine: {
            nextMessage: null,
            triggerScript: "scenes/decisions?sceneId=shrine&decisionId=takecandle",
            targetId: "decision-box",
            swap: null,
            textArray: [
                {
                    speed: 50,
                    text: "A strange candle sits on the shrine, flickering weakly.",
                    classes: [],
                },
            ],
            textString: null,
            soundEffect: null,
        },
        sword_window: {
            nextMessage: null,
            triggerScript: "scenes/decisions?sceneId=shrine&decisionId=breakwindow",
            targetId: "decision-box",
            swap: null,
            textArray: [
                {
                    speed: 50,
                    text: "The glass in the window looks brittle.",
                    classes: [],
                },
            ],
            textString: null,
            soundEffect: null,
        },
        brokenwindow: {
            nextMessage: null,
            triggerScript: null,
            targetId: null,
            swap: null,
            textArray: [
                {
                    speed: 50,
                    text: "Beyond the broken shards is a tunnel. You can probably squeeze through.",
                    classes: [],
                },
            ],
            textString: null,
            soundEffect: null,
        },
        stairslook: {
            nextMessage: null,
            triggerScript: null,
            actionData: null,
            targetId: null,
            textArray: [
                {
                    speed: 50,
                    text: "Behind this pillar is a passageway.",
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
    decisions: {
        takecandle: {
            decisionText: "Take the candle?",
            buttons: [
                {
                    buttonText: "Yes",
                    triggerScript: "scenes/shrine/takecandle",
                    triggerTarget: "main-scene",
                    swap: "outerHTML",
                    soundEffect: null,
                },
                {
                    buttonText: "No",
                    triggerScript: null,
                    triggerTarget: null,
                    swap: null,
                    soundEffect: null,
                }
            ]
        },
        breakwindow: {
            decisionText: "Break the glass?",
            buttons: [
                {
                    buttonText: "Yes",
                    triggerScript: "scenes/shrine/breakwindow",
                    triggerTarget: "main-scene",
                    swap: "outerHTML",
                    soundEffect: {
                        path: "audio/glass-shatter.wav",
                        element: "#window",
                        playOnce: true,
                        waitForFinish: false,
                    }
                },
                {
                    buttonText: "No",
                    triggerScript: null,
                    triggerTarget: null,
                    swap: null,
                    soundEffect: null,
                }
            ]
        },
        traveltunnel: {
            decisionText: "Move to tunnel?",
            buttons: [
                {
                    buttonText: "Yes",
                    triggerScript: "scenes/shrine/updatewindow",
                    triggerTarget: "main-scene",
                    swap: sceneTransition,
                    soundEffect: null,
                },
                {
                    buttonText: "No",
                    triggerScript: null,
                    triggerTarget: null,
                    swap: null,
                    soundEffect: null,
                }
            ]
        },
    },
};