import express from 'express';
export const messageRoutes = express.Router();
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { messages } from '../data/messages/messages.js';
const __dirname = dirname(fileURLToPath(import.meta.url));



messageRoutes.get('/:messageId', (req, res) => {
    // Eventually there will be some middleware to interface with
    // game data and state
    const id = req.params.messageId;
    res.render('partials/message-box', messages[id]);
});
