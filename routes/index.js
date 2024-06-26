import express from 'express';
// import path from 'path';
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
import { allSceneRoutes } from './scenes/index.js';
import { playerRoutes } from './player/index.js';
import { npcRoutes } from './npcs/index.js';
import { getCurrentScene } from '../controllers/player/common.js';
import { saveData, loadData } from '../controllers/global/serialize.js';

export const allRoutes = express.Router();

// const __dirname = dirname(fileURLToPath(import.meta.url));

allRoutes.use('/scenes', allSceneRoutes);
allRoutes.use('/player', playerRoutes);
allRoutes.use('/npcs', npcRoutes);
allRoutes.use(express.static('assets'));

allRoutes.get('/', (req, res) => {
  res.render('index', {mainTitle: 'Main Title'});
});

allRoutes.get('/start', (req, res) => {
  res.render('partials/starting-scene.ejs', {sceneId: "shrine"});
});

allRoutes.get('/save', (req, res) => {
  saveData();
});

allRoutes.get('/load', (req, res) => {
  loadData();
  const currentSceneId = getCurrentScene();
  res.render('partials/scene-load.ejs', {sceneId: currentSceneId});
});

allRoutes.get('/deleteme', (req, res) => {
  res.send('');
});