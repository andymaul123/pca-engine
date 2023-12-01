import express from 'express';
import { Shrine } from '../../classes/scenes/shrine.js';

export const shrineRoutes = express.Router();

const shrineScene = new Shrine();


shrineRoutes.get('/', (req, res) => {
    // console.log(req.app.locals.player.getInventory());
    // req.app.locals.player.addInventoryItem('pickle');
    // console.log(req.app.locals.player.getInventory());
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

shrineRoutes.put('/', (req, res) => {
    for (let key in req.body) {
        shrineScene[key] = req.body[key];
    }
    res.render('partials/scene.ejs', shrineScene);
});

