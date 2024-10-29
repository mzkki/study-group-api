const express = require('express');
const notesController = require('../controllers/NotesController');

const router = express.Router();

router.get('/notes', notesController.getNotes);
router.get('/notes/:id', notesController.getNoteById);
router.post('/notes');
router.put('/notes/:id');
router.delete('/notes/:id');

module.exports = router;
