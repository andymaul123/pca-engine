import express from 'express';
import { Tunnel } from '../../classes/scenes/tunnel.js';

export const tunnelRoutes = express.Router();

const tunnelScene = new Tunnel();

tunnelRoutes.get('/', (req, res) => {
    res.render('partials/scene.ejs', tunnelScene);
});

tunnelRoutes.get('/messages/:id', (req, res) => {
    const id = req.params.id;
    res.render('partials/message-box', tunnelScene.messages[id]);
});


