import { Scene } from './scene.js';

export class Shrine extends Scene {
    constructor() {
      super();
      this.id = "scene-shrine";
      this.state = {
        candleLit: true,
      };
      this.basemat = function() {
        return this.state.candleLit == true ? "image/shrine-final.gif" : "image/shrine-no-candle.png";
      },
      this.overlayNodes = {
        window: {
            coords: "153, 357, 183, 354, 210, 354, 237, 348, 264, 345, 282, 336, 282, 300, 282, 258, 279, 225, 267, 192, 258, 159, 243, 114, 228, 84, 204, 108, 192, 132, 180, 159, 159, 180, 153, 207, 138, 234, 144, 258, 144, 285, 144, 312",
            id: "window",
            triggerScript: "scenes/stairs",
            triggerTarget: "main-scene",
            triggerScriptType: "GET",
            swap: "outerHTML swap:1s",
            show: () => {
                return true;
            },
        },
        shrine: {
            coords: "726, 510, 756, 531, 786, 537, 816, 537, 855, 519, 855, 480, 852, 423, 843, 369, 813, 324, 786, 351, 762, 372, 762, 405, 759, 453, 741, 486",
            id: "shrine",
            triggerScript: "scenes/shrine/messages/shrine",
            triggerTarget: "text-overlay",
            triggerScriptType: "GET",
            swap: null,
            // TODO fix when a class
            show: () => {
                return this.state.candleLit == true ? true : false;
            },
        },
        exit:{
            coords: "198, 702, 6, 708, 0, 3, 102, 6, 84, 63, 66, 111, 39, 183, 36, 225, 57, 276, 39, 300, 39, 354, 24, 399, 42, 429, 48, 480, 60, 531, 141, 624",
            id: "exit",
            triggerScript: "scenes/shrine/decisions/exit",
            triggerTarget: "decision-box",
            triggerScriptType: "GET",
            swap: null,
            show: () => {
                return true;
            },
        },
    };
      this.messages = {
        shrine: {
            nextMessage: "scenes/shrine/messages/shrine2",
            triggerScript: null,
            triggerScriptType: "GET",
            actionData: null,
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
            triggerScript: "scenes/shrine",
            triggerScriptType: "PUT",
            actionData: JSON.stringify({candleLit: false}),
            targetId: "#main-scene",
            textArray: [
                {
                    speed: 50,
                    text: "This will terminate into another script, snuffing out the shrine's candle.",
                    classes: [],
                },
            ],
        }, 
      };
      this.decisions = {
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
        } 
      };

    };

    get candleLit() {
        return this.state.candleLit;
    }
    set candleLit(value) {
        this.state.candleLit = value;
    }


  }