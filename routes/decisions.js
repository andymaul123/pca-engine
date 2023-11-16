import express from 'express';
export const decisionRoutes = express.Router();
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { decisions } from '../data/decisions/decisions.js';
const __dirname = dirname(fileURLToPath(import.meta.url));



decisionRoutes.get('/:decisionId', (req, res) => {
    // Eventually there will be some middleware to interface with
    // game data and state
    const id = req.params.decisionId;
    res.render('partials/decision-box', decisions[id]);
});
