import express from 'express';
import { shrineRoutes } from './shrine.js';
import { tunnelRoutes } from './tunnel.js';
import { stairsRoutes } from './stairs.js';

export const scenesRoutes = express.Router();

scenesRoutes.use('/shrine', shrineRoutes);
scenesRoutes.use('/tunnel', tunnelRoutes);
scenesRoutes.use('/stairs', stairsRoutes);




