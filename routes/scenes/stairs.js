import express from 'express';
import { dataStore } from '../../models/index.js';

const stairsScene = dataStore.scenes.stairs;
export const stairsRoutes = express.Router();

stairsRoutes.get('/', (req, res) => {
    res.render('partials/scene.ejs', stairsScene);
});

stairsRoutes.get('/messages/:id', (req, res) => {
    const id = req.params.id;
    res.render('partials/message-box', stairsScene.messages[id]);
});
