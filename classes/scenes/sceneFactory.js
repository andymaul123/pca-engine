import { Shrine } from './shrine.js';
import { Tunnel } from './tunnel.js';
import { Stairs } from './stairs.js';
import { titleCase } from '../../utils/index.js';

const allScenes = { Shrine, Tunnel, Stairs };

export const SceneFactory = function(id) {
    return allScenes[titleCase(id)];
}