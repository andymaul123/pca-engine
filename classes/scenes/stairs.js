import { Scene } from './scene.js';

export class Stairs extends Scene {
    constructor() {
      super();
      this.id = "scene-stairs";
      this.state = {};
      this.basemat = function() {
        return "image/stairs-nyx.png"
      },
      this.overlayNodes = {
        under: {
            coords: "306, 609, 303, 531, 303, 345, 348, 246, 408, 189, 465, 198, 492, 228, 522, 288, 537, 357, 525, 378, 525, 426, 525, 471, 516, 498, 438, 510, 420, 579, 402, 594",
            id: "under",
            triggerScript: "scenes/stairs/messages/under",
            triggerTarget: "text-overlay",
            triggerScriptType: "GET",
            swap: null,
            show: () => {
                return true;
            },
        },
     };
      this.messages = {
        under: {
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
      };
      this.decisions = {};

    };




  }