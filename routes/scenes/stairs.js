import express from 'express';
import { 
    initializeController, 
    startMessageController,
    messageController,
    decisionController,
 } from '../../controllers/scenes/stairs.js';

export const stairsRoutes = express.Router();

stairsRoutes.get('/', (req, res) => {
    const initialScene = initializeController();
    res.render('partials/scene.ejs', initialScene);
});

stairsRoutes.get('/startmessage', (req, res) => {
    const startMessage = startMessageController();
    if(startMessage != null) {
        res.render('partials/message-box', startMessage);
    } else {
        res.sendStatus(200);
    }
});

stairsRoutes.get('/messages/:id', (req, res) => {
    const id = req.params.id;
    const message = messageController(id);
    res.render('partials/message-box', message);
});

stairsRoutes.get('/decisions/:id', (req, res) => {
    const id = req.params.id;
    const decision = decisionController(id);
    res.render('partials/decision-box', decision);
});
