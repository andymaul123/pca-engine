import "../../types/index.js";


/** 
* @type NpcModel 
*/

export const npcModel = {
    lady: {
        id: "lady",
        name: "Lady of the Fountain",
        portrait: "image/test_portrait_1.png",
        silhouette: "image/stairs-npc1-nyx.png",
        messagesConverted: false,
        messages: {
            intro: {
                nextMessage: null,
                triggerScript: null,
                targetId: "decision-box",
                swap: null,
                textArray: [
                    {
                        speed: 50,
                        text: "Hello. I am an ",
                        classes: [],
                    },
                    {
                        speed: 50,
                        text: "NPC",
                        classes: ['callout'],
                    },
                    {
                        speed: 50,
                        text: ". Pleased to meet you.",
                        classes: [],
                    },
                ],
                textString: null,
                soundEffect: null,
            },
        },
        decisions: {},
    },
}