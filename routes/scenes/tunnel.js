import express from 'express';
import { dataStore } from '../../models/index.js';
import { transformText, roomDarkness } from '../../controllers/scenes/common.js';

export const tunnelRoutes = express.Router();

tunnelRoutes.get('/', (req, res) => {
    roomDarkness(dataStore, "tunnel");
    res.render('partials/scene.ejs', dataStore.scenes.tunnel);
});

tunnelRoutes.get('/messages/:id', (req, res) => {
    const id = req.params.id;
    transformText(dataStore, "tunnel");
    res.render('partials/message-box', dataStore.scenes.tunnel.messages[id]);
});


