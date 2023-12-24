import express from 'express';
import { shrineController } from '../../controllers/scenes/shrine.js';
import { playerController } from '../../controllers/player.js';
import { dataStore } from '../../models/index.js';

const shrineScene = dataStore.scenes.shrine;

export const shrineRoutes = express.Router();

shrineRoutes.get('/', (req, res) => {
    res.render('partials/scene.ejs', shrineScene);
});

shrineRoutes.get('/messages/:id', (req, res) => {
    const id = req.params.id;
    res.render('partials/message-box', shrineScene.messages[id]);
});

shrineRoutes.get('/decisions/:id', (req, res) => {
    const id = req.params.id;
    res.render('partials/decision-box', shrineScene.decisions[id]);
});

shrineRoutes.get('/takecandle', (req, res) => {
    shrineController.takeCandle();
    playerController.addItemsToInventory(['candle']);
    res.render('partials/scene.ejs', shrineScene);
});

shrineRoutes.get('/breakwindow', (req, res) => {
    shrineController.breakWindow();
    res.render('partials/scene.ejs', shrineScene);
});

