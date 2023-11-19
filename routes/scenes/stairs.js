import express from 'express';

import { Stairs } from '../../classes/scenes/stairs.js';

export const stairsRoutes = express.Router();

const stairsScene = new Stairs();

stairsRoutes.get('/', (req, res) => {
    res.render('partials/scene.ejs', stairsScene);
});

stairsRoutes.get('/messages/:id', (req, res) => {
    const id = req.params.id;
    res.render('partials/message-box', stairsScene.messages[id]);
});
