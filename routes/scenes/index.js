import express from 'express';
import { sceneRoutes } from './scenes.js';
import { shrineRoutes } from './shrine.js';

export const allSceneRoutes = express.Router();

allSceneRoutes.use('/', sceneRoutes);
allSceneRoutes.use('/shrine', shrineRoutes);




