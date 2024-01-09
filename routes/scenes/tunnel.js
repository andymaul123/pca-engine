import express from 'express';
import { dataStore } from '../../models/index.js';
import { transformText, roomDarkness, determineStartMessage } from '../../controllers/scenes/common.js';

export const tunnelRoutes = express.Router();

tunnelRoutes.get('/', (req, res) => {
    transformText(dataStore, "tunnel");
    roomDarkness(dataStore, "tunnel");
    res.render('partials/scene.ejs', dataStore.scenes.tunnel);
});

tunnelRoutes.get('/startmessage', (req, res) => {
    const startMessage = determineStartMessage(dataStore, "tunnel");
    if(startMessage != null) {
        res.render('partials/message-box', dataStore.scenes.tunnel.messages[startMessage]);
    } else {
        res.sendStatus(200);
    }
});

tunnelRoutes.get('/messages/:id', (req, res) => {
    const id = req.params.id;
    res.render('partials/message-box', dataStore.scenes.tunnel.messages[id]);
});


