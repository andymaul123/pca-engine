import express from 'express';
import { 
    takeCandleController,
    breakWindowController,
 } from '../../controllers/scenes/shrine.js';

 import { getPlayer } from '../../controllers/player/common.js';

const sceneId = "shrine";
export const shrineRoutes = express.Router();

shrineRoutes.get('/takecandle', (req, res) => {
    const updatedScene = takeCandleController(sceneId);
    const playerData = getPlayer();
    res.render('partials/scene.ejs', {sceneData: updatedScene, playerData: playerData});
});

shrineRoutes.get('/breakwindow', (req, res) => {
    const updatedScene = breakWindowController(sceneId);
    const playerData = getPlayer();
    res.render('partials/scene.ejs', {sceneData: updatedScene, playerData: playerData});
});
