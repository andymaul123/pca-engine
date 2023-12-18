import express from 'express';
import { dataStore } from '../../models/index.js';

const tunnelScene = dataStore.scenes.tunnel;
export const tunnelRoutes = express.Router();

tunnelRoutes.get('/', (req, res) => {
    res.render('partials/scene.ejs', tunnelScene);
});

tunnelRoutes.get('/messages/:id', (req, res) => {
    const id = req.params.id;
    res.render('partials/message-box', tunnelScene.messages[id]);
});


