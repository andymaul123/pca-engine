export const tunnelModel = {
    id: "tunnel",
    basemats: {
        current: "image/tunnel-nyx.png",
    },

    overlayNodes: {
        window: {
            coords: "831, 498, 906, 498, 897, 396, 867, 381, 843, 396",
            id: "window",
            triggerScript: "scenes/tunnel/messages/window",
            triggerTarget: "text-overlay",
            triggerScriptType: "GET",
            swap: null,
            show: true,
            soundEffect: null,
        },
    },
    messages: {
        window: {
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
    },
    decisions: {},
  }