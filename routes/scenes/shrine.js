import express from 'express';
import { 
    takeCandleController,
    breakWindowController,
    updateWindowController,
 } from '../../controllers/scenes/shrine.js';

const sceneId = "shrine";
export const shrineRoutes = express.Router();

shrineRoutes.get('/takecandle', (req, res) => {
    const updatedScene = takeCandleController(sceneId);
    res.render('partials/scene.ejs', updatedScene);
});

shrineRoutes.get('/breakwindow', (req, res) => {
    const updatedScene = breakWindowController(sceneId);
    res.render('partials/scene.ejs', updatedScene);
});

shrineRoutes.get('/updatewindow', (req, res) => {
    updateWindowController(sceneId);
    res.redirect('/scenes/init?sceneId=tunnel');
});
