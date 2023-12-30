import express from 'express';
import { dataStore } from '../../models/index.js';
import { getInventoryWithGui } from '../../controllers/player.js';

export const playerRoutes = express.Router();

playerRoutes.get('/inventory', (req, res) => {
    res.render('partials/menus/inventory-menu.ejs', getInventoryWithGui(dataStore));
});