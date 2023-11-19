export class Scene {
    constructor() {}

    getAllSceneData() {
        console.log(`getAllSceneData`);
        return this;
    }

    getSceneMessage(id) {
        console.log(`getSceneMessage`);
        return this.messages[id];
    }

    getState(id) {
        console.log(`getState`);
        return this.state[id];
    }

    setState(id, value) {
        console.log(`setState`);
        this.state[id] = value;
    }
  }