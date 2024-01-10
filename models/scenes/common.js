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

export const sceneTransition = "outerHTML swap:1s";