import express from 'express';

export const playerRoutes = express.Router();


playerRoutes.get('/inventory', (req, res) => {
    const inventory = req.app.locals.player.getInventory();
    res.render('partials/menus/inventory-menu.ejs', inventory);
});