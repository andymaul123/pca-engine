import express from 'express';
import { dataStore } from '../../models/index.js';
import { tunnelController } from '../../controllers/scenes/tunnel.js';

const tunnelScene = dataStore.scenes.tunnel;
export const tunnelRoutes = express.Router();

tunnelRoutes.get('/', (req, res) => {
    res.render('partials/scene.ejs', tunnelScene);
});

tunnelRoutes.get('/messages/:id', (req, res) => {
    const id = req.params.id;
    tunnelController.transformText();
    res.render('partials/message-box', tunnelScene.messages[id]);
});


