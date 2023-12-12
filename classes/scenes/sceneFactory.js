import { Shrine } from './shrine.js';
import { Tunnel } from './tunnel.js';
import { Stairs } from './stairs.js';

const allScenes = { Shrine, Tunnel, Stairs };

export const SceneFactory = function(id) {
    return allScenes[id];
}