import express from 'express';
import { Shrine } from '../../classes/scenes/shrine.js';

export const shrineRoutes = express.Router();
// const shrineScene = new Shrine();


shrineRoutes.get('/', (req, res) => {
    const shrineScene = req.app.locals.dungeonMaster.sceneInstanceMap('Shrine');
    res.render('partials/scene.ejs', shrineScene);
});

shrineRoutes.get('/messages/:id', (req, res) => {
    const shrineScene = req.app.locals.dungeonMaster.sceneInstanceMap('Shrine');
    const id = req.params.id;
    res.render('partials/message-box', shrineScene.messages[id]);
});

shrineRoutes.get('/decisions/:id', (req, res) => {
    const shrineScene = req.app.locals.dungeonMaster.sceneInstanceMap('Shrine');
    const id = req.params.id;
    res.render('partials/decision-box', shrineScene.decisions[id]);
});

shrineRoutes.put('/', (req, res) => {
    const shrineScene = req.app.locals.dungeonMaster.sceneInstanceMap('Shrine');
    for (let key in req.body) {
        shrineScene[key] = req.body[key];
    }
    res.render('partials/scene.ejs', shrineScene);
});

shrineRoutes.get('/takecandle', (req, res) => {
    const shrineScene = req.app.locals.dungeonMaster.sceneInstanceMap('Shrine');
    req.app.locals.dungeonMaster.addItemsToInventory(['candle']);
    shrineScene.takeCandle();
    res.render('partials/scene.ejs', shrineScene);
});

