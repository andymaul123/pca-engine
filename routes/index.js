import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

import { scenesRoutes } from './scenes.js';
import { messageRoutes } from './messages.js';
import { decisionRoutes } from './decisions.js';

export const allRoutes = express.Router();
allRoutes.use('/scenes', scenesRoutes);
allRoutes.use('/messages', messageRoutes);
allRoutes.use('/decisions', decisionRoutes);
allRoutes.use(express.static('assets'));

allRoutes.get('/', (req, res) => {
  res.render('index', {mainTitle: 'Main Title'});
});

allRoutes.get('/deleteme', (req, res) => {
  res.send('');
});

// Temporary
allRoutes.get('/trigger-script', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/example-triggered-script.html'));
});



