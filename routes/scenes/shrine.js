import express from 'express';
import { takeCandle, breakWindow } from '../../controllers/scenes/shrine.js';
import { transformText, roomDarkness } from '../../controllers/scenes/common.js';
import { addItemsToInventory } from '../../controllers/player.js';
import { dataStore } from '../../models/index.js';

export const shrineRoutes = express.Router();

shrineRoutes.get('/', (req, res) => {
    roomDarkness(dataStore, "scene");
    res.render('partials/scene.ejs', dataStore.scenes.shrine);
});

shrineRoutes.get('/messages/:id', (req, res) => {
    const id = req.params.id;
    transformText(dataStore, "shrine");
    res.render('partials/message-box', dataStore.scenes.shrine.messages[id]);
});

shrineRoutes.get('/decisions/:id', (req, res) => {
    const id = req.params.id;
    res.render('partials/decision-box', dataStore.scenes.shrine.decisions[id]);
});

shrineRoutes.get('/takecandle', (req, res) => {
    takeCandle(dataStore);
    addItemsToInventory(dataStore, ['candle']);
    res.render('partials/scene.ejs', dataStore.scenes.shrine);
});

shrineRoutes.get('/breakwindow', (req, res) => {
    breakWindow(dataStore);
    res.render('partials/scene.ejs', dataStore.scenes.shrine);
});

