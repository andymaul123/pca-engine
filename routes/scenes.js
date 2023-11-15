import express from 'express';
export const scenesRoutes = express.Router();
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));


scenesRoutes.get('/shrine/shrine', (req, res) => {
    res.sendFile(path.join(__dirname, '../scenes/shrine/shrine.html'));
});
scenesRoutes.get('/shrine/replacements', (req, res) => {
    res.sendFile(path.join(__dirname, '../scenes/shrine/replacements.html'));
});
scenesRoutes.get('/shrine/decision-boxes', (req, res) => {
    res.sendFile(path.join(__dirname, '../scenes/shrine/decision-boxes.html'));
});

scenesRoutes.get('/tunnel/tunnel', (req, res) => {
    res.sendFile(path.join(__dirname, '../scenes/tunnel/tunnel.html'));
});

scenesRoutes.get('/stairs/stairs', (req, res) => {
    res.sendFile(path.join(__dirname, '../scenes/stairs/stairs.ejs'));
});