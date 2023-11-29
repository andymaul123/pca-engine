import express from 'express';
// import path from 'path';
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
import { scenesRoutes } from './scenes/index.js';
import { playerRoutes } from './player/index.js';

export const allRoutes = express.Router();

// const __dirname = dirname(fileURLToPath(import.meta.url));

allRoutes.use('/scenes', scenesRoutes);
allRoutes.use('/player', playerRoutes);
allRoutes.use(express.static('assets'));

allRoutes.get('/', (req, res) => {
  res.render('index', {mainTitle: 'Main Title'});
});

allRoutes.get('/deleteme', (req, res) => {
  res.send('');
});