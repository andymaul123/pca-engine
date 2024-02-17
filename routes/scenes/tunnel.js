import express from 'express';
import { 
    initializeController, 
    startMessageController,
    messageController,
    decisionController,
    contextualizeSceneRender,
 } from '../../controllers/scenes/tunnel.js';
export const tunnelRoutes = express.Router();

tunnelRoutes.get('/', (req, res) => {
    const initialScene = initializeController();
    res.render('partials/scene.ejs', initialScene);
});

tunnelRoutes.get('/context-render', (req, res) => {
    const contextualizedScene = contextualizeSceneRender();
    res.render('partials/scene.ejs', contextualizedScene);
});

tunnelRoutes.get('/startmessage', (req, res) => {
    const startMessage = startMessageController();
    if(startMessage != null) {
        res.render('partials/message-box', startMessage);
    } else {
        res.sendStatus(200);
    }
});

tunnelRoutes.get('/messages/:id', (req, res) => {
    const id = req.params.id;
    const message = messageController(id);
    res.render('partials/message-box', message);
});

tunnelRoutes.get('/decisions/:id', (req, res) => {
    const id = req.params.id;
    const decision = decisionController(id);
    res.render('partials/decision-box', decision);
});