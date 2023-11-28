import { Scene } from './scene.js';

export class Tunnel extends Scene {
    constructor() {
      super();
      this.id = "scene-tunnel";
      this.state = {};
      this.basemat = function() {
        return "image/tunnel-nyx.png"
      },
      this.overlayNodes = {
        window: {
            coords: "831, 498, 906, 498, 897, 396, 867, 381, 843, 396",
            id: "window",
            triggerScript: "scenes/tunnel/messages/window",
            triggerTarget: "text-overlay",
            triggerScriptType: "GET",
            swap: null,
            show: () => {
                return true;
            },
        },
     };
      this.messages = {
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
      };
      this.decisions = {};

    };




  }