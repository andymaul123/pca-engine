import express from 'express';
import { dialogueController } from '../../controllers/npcs/npcs.js';

export const npcRoutes = express.Router();


npcRoutes.get('/:npcID/dialogue/:dialogueID', (req, res) => {
    const npcID = req.params.npcID;
    const dialogueID = req.params.dialogueID;
    const dialogue = dialogueController(npcID, dialogueID);
    res.render('partials/npc-dialogue', dialogue);
});