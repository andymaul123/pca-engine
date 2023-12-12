import express from 'express';

export const playerRoutes = express.Router();

/** GETs player's inventory array */
playerRoutes.get('/inventory', (req, res) => {
    const inventory = req.app.locals.dungeonMaster.getInventory();
    res.render('partials/menus/inventory-menu.ejs', inventory);
});

/** POSTs new items to be added to player's inventory */
playerRoutes.post('/inventory', (req, res) => {
    /** @type {String[]} */
    const newItems = req.body;
    req.app.locals.dungeonMaster.addItemsToInventory(newItems);
    res.send(200);
});

/** DELETEs items in player's inventory */
playerRoutes.delete('/inventory', (req, res) => {

});