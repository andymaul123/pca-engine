import express from 'express';

export const shrineRoutes = express.Router();

shrineRoutes.get('/', (req, res) => {
    const shrineScene = req.app.locals.dungeonMaster.sceneInstanceMap('shrine');
    res.render('partials/scene.ejs', shrineScene);
});

shrineRoutes.get('/messages/:id', (req, res) => {
    const shrineScene = req.app.locals.dungeonMaster.sceneInstanceMap('shrine');
    const id = req.params.id;
    res.render('partials/message-box', shrineScene.messages[id]);
});

shrineRoutes.get('/decisions/:id', (req, res) => {
    const shrineScene = req.app.locals.dungeonMaster.sceneInstanceMap('shrine');
    const id = req.params.id;
    res.render('partials/decision-box', shrineScene.decisions[id]);
});

shrineRoutes.put('/', (req, res) => {
    const shrineScene = req.app.locals.dungeonMaster.sceneInstanceMap('shrine');
    for (let key in req.body) {
        shrineScene[key] = req.body[key];
    }
    res.render('partials/scene.ejs', shrineScene);
});

shrineRoutes.get('/takecandle', (req, res) => {
    const shrineScene = req.app.locals.dungeonMaster.sceneInstanceMap('shrine');
    req.app.locals.dungeonMaster.addItemsToInventory(['candle']);
    shrineScene.takeCandle();
    res.render('partials/scene.ejs', shrineScene);
});

