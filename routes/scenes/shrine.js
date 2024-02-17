import express from 'express';
import { 
    initializeController, 
    startMessageController,
    messageController,
    decisionController,
    takeCandleController,
    breakWindowController,
    updateWindowController,
    contextualizeSceneRender,
 } from '../../controllers/scenes/shrine.js';

export const shrineRoutes = express.Router();

shrineRoutes.get('/', (req, res) => {
    const initialScene = initializeController();
    res.render('partials/scene.ejs', initialScene);
});

shrineRoutes.get('/context-render', (req, res) => {
    const contextualizedScene = contextualizeSceneRender();
    res.render('partials/scene.ejs', contextualizedScene);
});

shrineRoutes.get('/startmessage', (req, res) => {
    const startMessage = startMessageController();
    if(startMessage != null) {
        res.render('partials/message-box', startMessage);
    } else {
        res.sendStatus(200);
    }
});

shrineRoutes.get('/messages/:id', (req, res) => {
    const id = req.params.id;
    const message = messageController(id);
    res.render('partials/message-box', message);
});

shrineRoutes.get('/decisions/:id', (req, res) => {
    const id = req.params.id;
    const decision = decisionController(id);
    res.render('partials/decision-box', decision);
});

shrineRoutes.get('/takecandle', (req, res) => {
    const updatedScene = takeCandleController();
    res.render('partials/scene.ejs', updatedScene);
});

shrineRoutes.get('/breakwindow', (req, res) => {
    const updatedScene = breakWindowController();
    res.render('partials/scene.ejs', updatedScene);
});

shrineRoutes.get('/updatewindow', (req, res) => {
    updateWindowController();
    res.redirect('/scenes/tunnel');
});
