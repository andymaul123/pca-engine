import express from 'express';

export const stairsRoutes = express.Router();

stairsRoutes.get('/', (req, res) => {
    const stairsScene = req.app.locals.dungeonMaster.sceneInstanceMap('stairs');
    res.render('partials/scene.ejs', stairsScene);
});

stairsRoutes.get('/messages/:id', (req, res) => {
    const stairsScene = req.app.locals.dungeonMaster.sceneInstanceMap('stairs');
    const id = req.params.id;
    res.render('partials/message-box', stairsScene.messages[id]);
});
