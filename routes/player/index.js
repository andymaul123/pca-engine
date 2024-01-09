import express from 'express';
import { inventoryController } from '../../controllers/player/inventory.js';

export const playerRoutes = express.Router();

playerRoutes.get('/inventory', (req, res) => {
    const inventory = inventoryController();
    res.render('partials/menus/inventory-menu.ejs', inventory);
});