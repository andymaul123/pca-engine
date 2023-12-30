import express from 'express';
import { dataStore } from '../../models/index.js';
import { transformText, roomDarkness } from '../../controllers/scenes/common.js';


export const stairsRoutes = express.Router();

stairsRoutes.get('/', (req, res) => {
    roomDarkness(dataStore, "stairs");
    res.render('partials/scene.ejs', dataStore.scenes.stairs);
});

stairsRoutes.get('/messages/:id', (req, res) => {
    const id = req.params.id;
    transformText(dataStore, "stairs");
    res.render('partials/message-box', dataStore.scenes.stairs.messages[id]);
});
