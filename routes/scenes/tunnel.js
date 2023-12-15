import express from 'express';

export const tunnelRoutes = express.Router();

tunnelRoutes.get('/', (req, res) => {
    const tunnelScene = req.app.locals.dungeonMaster.sceneInstanceMap('tunnel');
    res.render('partials/scene.ejs', tunnelScene);
});

tunnelRoutes.get('/messages/:id', (req, res) => {
    const tunnelScene = req.app.locals.dungeonMaster.sceneInstanceMap('tunnel');
    const id = req.params.id;
    res.render('partials/message-box', tunnelScene.messages[id]);
});


