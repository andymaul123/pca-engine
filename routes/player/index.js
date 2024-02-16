import express from 'express';
import { inventoryController } from '../../controllers/player/inventory.js';
import { setPlayerContext } from '../../controllers/player/common.js';

export const playerRoutes = express.Router();

playerRoutes.get('/inventory', (req, res) => {
    const inventory = inventoryController();
    res.render('partials/menus/inventory-menu.ejs', inventory);
});

playerRoutes.get('/context/:context', (req, res) => {
    const context = req.params.context;
    setPlayerContext(context);
    res.sendStatus(200);
});