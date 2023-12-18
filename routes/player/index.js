import express from 'express';
import { playerController } from '../../controllers/player.js';

export const playerRoutes = express.Router();

/** GETs player's inventory array */
playerRoutes.get('/inventory', (req, res) => {
    res.render('partials/menus/inventory-menu.ejs', playerController.getInventoryWithGui());
});