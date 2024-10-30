const express = require('express');
const notesController = require('../controllers/NotesController');
const { validateNote } = require('../utils/validator/notes');

const router = express.Router();

router.get('/notes', notesController.getNotes);
router.get('/notes/:id', notesController.getNoteById);
router.post('/notes', validateNote, notesController.createNote);
router.put('/notes/:id', validateNote, notesController.updateNote);
router.delete('/notes/:id');

module.exports = router;
