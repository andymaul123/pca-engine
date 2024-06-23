import express from 'express';
import { getInventoryItems } from '../../controllers/player/inventory.js';
import { getCurrentScene, setPlayerContext, setUsedItem, getSelectedItem, setSelectedItem } from '../../controllers/player/common.js';

export const playerRoutes = express.Router();

playerRoutes.get('/inventory', (req, res) => {
    const fullInventory = getInventoryItems();
    const currentlySelectedItem = getSelectedItem();
    res.render('partials/menus/inventory-menu.ejs', {inventory: fullInventory, selectedItem: currentlySelectedItem});
});

playerRoutes.get('/inventory/use-item', (req, res) => {
    const item = req.query.item;
    const currentScene = getCurrentScene();
    setPlayerContext("item");
    setUsedItem(item);
    res.redirect(`/scenes/context-render?sceneId=${currentScene}`);
});

playerRoutes.get('/inventory/select-item', (req, res) => {
    const item = req.query.item;
    const fullInventory = getInventoryItems();
    setSelectedItem(item);
    res.render('partials/menus/inventory-update.ejs', {inventory: fullInventory, selectedItem: item});
});

playerRoutes.get('/context/:context', (req, res) => {
    const context = req.params.context;
    setPlayerContext(context);
    const currentScene = getCurrentScene();
    res.redirect(`/scenes/context-render?sceneId=${currentScene}`);
});