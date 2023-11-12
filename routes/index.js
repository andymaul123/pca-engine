import express from 'express';
import { scenesRoutes } from './scenes.js';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

export const allRoutes = express.Router();
allRoutes.use('/scenes', scenesRoutes);
allRoutes.use(express.static('assets'));

allRoutes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Temporary
allRoutes.get('/trigger-script', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/example-triggered-script.html'));
});



