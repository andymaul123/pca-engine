import express from 'express';
import { 
    initializeController, 
    startMessageController,
    messageController,
    decisionController,
    contextualizeSceneRender,
 } from '../../controllers/scenes/scenes.js';

 export const sceneRoutes = express.Router();

 // example /scenes/init?sceneId=shrine
 sceneRoutes.get('/init', (req, res) => {
    const sceneId = req.query.sceneId;
    const initialScene = initializeController(sceneId);
    res.render('partials/scene.ejs', initialScene);
});

sceneRoutes.get('/context-render', (req, res) => {
    const sceneId = req.query.sceneId;
    const contextualizedScene = contextualizeSceneRender(sceneId);
    res.render('partials/scene.ejs', contextualizedScene);
});

sceneRoutes.get('/startmessage', (req, res) => {
    const sceneId = req.query.sceneId;
    const startMessage = startMessageController(sceneId);
    if(startMessage != null) {
        res.render('partials/message-box', startMessage);
    } else {
        res.sendStatus(200);
    }
});

sceneRoutes.get('/messages', (req, res) => {
    const sceneId = req.query.sceneId;
    const messageId = req.query.messageId;
    const message = messageController(sceneId, messageId);
    res.render('partials/message-box', message);
});

sceneRoutes.get('/decisions', (req, res) => {
    const sceneId = req.query.sceneId;
    const decisionId = req.query.decisionId;
    const decision = decisionController(sceneId, decisionId);
    res.render('partials/decision-box', decision);
});