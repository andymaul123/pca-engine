export const messages = {
    underStair: {
        nextMessage: "underStair2",
        triggerScript: null,
        targetId: null,
        textArray: [
            {
                speed: 50,
                text: "This is a ",
                classes: [],
            },
            {
                speed: 50,
                text: "test ",
                classes: ["red"],
            },
            {
                speed: 50,
                text: "message!",
                classes: [],
            },
        ],
    },
    underStair2: {
        nextMessage: null,
        triggerScript: null,
        targetId: null,
        textArray: [
            {
                speed: 50,
                text: "Second message!",
                classes: [],
            },
        ],
    },
    shrine: {
        nextMessage: "shrine2",
        triggerScript: null,
        targetId: null,
        textArray: [
            {
                speed: 50,
                text: "One of two messages, illustrating the multi-message system.",
                classes: [],
            },
        ],
    },
    shrine2: {
        nextMessage: null,
        triggerScript: "scenes/shrine/temporary",
        targetId: "#main-scene",
        textArray: [
            {
                speed: 50,
                text: "This will terminate into another script, snuffing out the shrine's candle.",
                classes: [],
            },
        ],
    }, 

    


    


}