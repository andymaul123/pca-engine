import express from 'express';
export const scenesRoutes = express.Router();
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { gameState } from '../data/state/state.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

scenesRoutes.get('/tunnel', (req, res) => {
    res.sendFile(path.join(__dirname, '../scenes/tunnel/tunnel.html'));
});

scenesRoutes.get('/stairs', (req, res) => {
    res.sendFile(path.join(__dirname, '../scenes/stairs/stairs.ejs'));
});

// Temporarily weird until a state class is made
// Eventually there will be a post that updates the candle flame
// in game state and returns with the game state values
scenesRoutes.get('/shrine', (req, res) => {
    res.render('../scenes/shrine/shrine.ejs', {candleLit: true});
});
scenesRoutes.get('/shrine/temporary', (req, res) => {
    res.render('../scenes/shrine/shrine.ejs', {candleLit: false});
});

// TODO
// scenesRoutes.post('/shrine', (req, res) => {
//     res.render('partials/message-box', gameState.candleLit);
// });