export const shrineModel = {
    id: "shrine",
    candleOn: true,
    basemats: {
        current: "image/shrine-nyx.gif",
        candleOn: "image/shrine-nyx.gif",
        candleOff: "image/shrine-no-candle-nyx.png"
    },
    overlayNodes: {
        window: {
            coords: "153, 357, 183, 354, 210, 354, 237, 348, 264, 345, 282, 336, 282, 300, 282, 258, 279, 225, 267, 192, 258, 159, 243, 114, 228, 84, 204, 108, 192, 132, 180, 159, 159, 180, 153, 207, 138, 234, 144, 258, 144, 285, 144, 312",
            id: "window",
            triggerScript: "scenes/stairs",
            triggerTarget: "main-scene",
            triggerScriptType: "GET",
            swap: "outerHTML swap:1s",
            show: true,
        },
        shrine: {
            coords: "737,531,765,541,779,542,788,540,809,534,863,521,860,429,864,428,865,425,865,421,868,417,864,410,860,403,858,379,840,360,834,353,829,350,828,348,828,345,830,342,828,338,827,334,824,330,819,326,814,323,808,322,804,321,796,326,796,331,797,341,787,352,783,357,775,357,769,368,765,376,766,380,761,388,765,395,764,403,759,405,749,406,748,411,752,413,760,416,761,421,762,462,749,462,746,464,748,466,748,472,744,477,745,497,737,498,732,502,737,510",
            id: "shrine",
            triggerScript: "scenes/shrine/messages/shrine",
            triggerTarget: "text-overlay",
            triggerScriptType: "GET",
            swap: null,
            show: true,
        },
        exit:{
            coords: "198, 702, 6, 708, 0, 3, 102, 6, 84, 63, 66, 111, 39, 183, 36, 225, 57, 276, 39, 300, 39, 354, 24, 399, 42, 429, 48, 480, 60, 531, 141, 624",
            id: "exit",
            triggerScript: "scenes/shrine/decisions/exit",
            triggerTarget: "decision-box",
            triggerScriptType: "GET",
            swap: null,
            show: true,
        },
    },
    messages: {
        shrine: {
            nextMessage: null,
            triggerScript: "scenes/shrine/decisions/takecandle",
            triggerScriptType: "GET",
            actionData: null,
            targetId: "#decision-box",
            swap: null,
            textArray: [
                {
                    speed: 50,
                    text: "A strange candle sits on the shrine, flickering weakly.",
                    classes: [],
                },
            ],
        },
    // shrine2: {
    //     nextMessage: null,
    //     triggerScript: "scenes/shrine/decisions/takecandle",
    //     triggerScriptType: "GET",
    //     actionData: null,
    //     targetId: "#main-scene",
    //     swap: "outerHTML",
    //     textArray: [
    //         {
    //             speed: 50,
    //             text: "This will terminate into another script, snuffing out the shrine's candle.",
    //             classes: [],
    //         },
    //     ],
    // }, 
    },
    decisions: {
        exit: {
            decisionText: "Do you wish to exit?",
            buttons: [
                {
                    buttonText: "Yes",
                    triggerScript: "scenes/tunnel",
                    triggerTarget: "#main-scene",
                    swap: "outerHTML swap:1s",
                },
                {
                    buttonText: "No",
                    triggerScript: null,
                    triggerTarget: null,
                    swap: null,
                }
            ]
        },
        takecandle: {
            decisionText: "Take the candle?",
            buttons: [
                {
                    buttonText: "Yes",
                    triggerScript: "scenes/shrine/takecandle",
                    triggerTarget: "#main-scene",
                    swap: "outerHTML",
                },
                {
                    buttonText: "No",
                    triggerScript: null,
                    triggerTarget: null,
                    swap: null,
                }
            ]
        },
    },
};




