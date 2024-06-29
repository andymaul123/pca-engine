import express from 'express';
import { 
    initializeController, 
    startMessageController,
    messageController,
    decisionController,
    contextualizeSceneRender,
    loadSceneController,
 } from '../../controllers/scenes/scenes.js';

import { getPlayer } from '../../controllers/player/common.js';
import { getGlobalState } from '../../controllers/global/index.js';

export const sceneRoutes = express.Router();

// example /scenes/init?sceneId=shrine
sceneRoutes.get('/init', (req, res) => {
    const sceneId = req.query.sceneId;
    const initialScene = initializeController(sceneId);
    const playerData = getPlayer();
    const globalState = getGlobalState();
    res.render('partials/scene.ejs', {sceneData: initialScene, playerData: playerData, globalState: globalState});
});

sceneRoutes.get('/load', (req, res) => {
    const sceneId = req.query.sceneId;
    const loadedScene = loadSceneController(sceneId);
    const playerData = getPlayer();
    const globalState = getGlobalState();
    res.render('partials/scene.ejs', {sceneData: loadedScene, playerData: playerData, globalState: globalState});
});

sceneRoutes.get('/context-render', (req, res) => {
    const sceneId = req.query.sceneId;
    const contextualizedScene = contextualizeSceneRender(sceneId);
    const playerData = getPlayer();
    const globalState = getGlobalState();
    res.render('partials/scene.ejs', {sceneData: contextualizedScene, playerData: playerData, globalState: globalState});
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