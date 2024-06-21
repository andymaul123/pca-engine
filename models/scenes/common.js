import "../../types/index.js";

/** 
* @type Message 
*/
export const roomIsDark = {
    nextMessage: null,
    triggerScript: null,
    targetId: null,
    swap: null,
    textArray: [
        {
            speed: 50,
            text: "An oppressive darkness fills the room. You cannot see without a light.",
            classes: [],
        },
    ],
    textString: null,
    soundEffect: null,
};

export const defaultLook = {
    nextMessage: null,
    triggerScript: null,
    targetId: null,
    swap: null,
    textArray: [
        {
            speed: 50,
            text: "You can't look at that.",
            classes: [],
        },
    ],
    textString: null,
    soundEffect: null,
};

export const defaultMove = {
    nextMessage: null,
    triggerScript: null,
    targetId: null,
    swap: null,
    textArray: [
        {
            speed: 50,
            text: "You can't move there.",
            classes: [],
        },
    ],
    textString: null,
    soundEffect: null,
};

export const defaultTalk = {
    nextMessage: null,
    triggerScript: null,
    targetId: null,
    swap: null,
    textArray: [
        {
            speed: 50,
            text: "You can't talk to this.",
            classes: [],
        },
    ],
    textString: null,
    soundEffect: null,
};

export const defaultItem = {
    nextMessage: null,
    triggerScript: null,
    targetId: null,
    swap: null,
    textArray: [
        {
            speed: 50,
            text: "You can't use that here.",
            classes: [],
        },
    ],
    textString: null,
    soundEffect: null,
};

export const sceneTransition = "outerHTML swap:1s";