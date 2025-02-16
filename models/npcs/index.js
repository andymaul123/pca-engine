import "../../types/index.js";


/** 
* @type npcModel 
*/

export const npcModel = {
    lady: {
        id: "lady",
        name: "Sorceress",
        portrait: "image/scenes/stairs/npc_portrait.png",
        silhouette: "image/scenes/stairs/npc_world.png",
        messagesConverted: false,
        messages: {
            intro: {
                nextMessage: "npcs/lady/dialogue/second",
                triggerScript: null,
                targetId: null,
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
            second: {
                nextMessage: null,
                triggerScript: null,
                targetId: null,
                swap: null,
                textArray: [
                    {
                        speed: 50,
                        text: "This is a linked message from the intro message.",
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