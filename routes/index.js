const express = require('express');
const notesController = require('../controllers/NotesController');
const { noteValidation } = require('../utils/validator/notes');

const router = express.Router();

router.get('/notes', notesController.getNotes);
router.get('/notes/:id', notesController.getNoteById);
router.post('/notes', noteValidation, notesController.createNote);
router.put('/notes/:id', noteValidation, notesController.updateNote);
router.delete('/notes/:id', notesController.deleteNote);

module.exports = router;
