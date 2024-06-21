import express from 'express';
import { inventoryController } from '../../controllers/player/inventory.js';
import { getCurrentScene, setPlayerContext, setCurrentItem } from '../../controllers/player/common.js';

export const playerRoutes = express.Router();

playerRoutes.get('/inventory', (req, res) => {
    const inventory = inventoryController();
    res.render('partials/menus/inventory-menu.ejs', inventory);
});

playerRoutes.get('/inventory/use-item', (req, res) => {
    const item = req.query.item;
    const currentScene = getCurrentScene();
    setPlayerContext("item");
    setCurrentItem(item);
    res.redirect(`/scenes/context-render?sceneId=${currentScene}`);
});

playerRoutes.get('/context/:context', (req, res) => {
    const context = req.params.context;
    setPlayerContext(context);
    const currentScene = getCurrentScene();
    res.redirect(`/scenes/context-render?sceneId=${currentScene}`);
});