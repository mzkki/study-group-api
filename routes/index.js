const express = require('express');
const notesController = require('../controllers/NotesController');
const authController = require('../controllers/AuthController');
const { noteValidation } = require('../utils/validator/notes');
const { loginValidation, registerValidation } = require('../utils/validator/users');

const router = express.Router();

// auth
router.post('/login', loginValidation, authController.login);
router.post('/register', registerValidation, authController.register);

// notes
router.get('/notes', notesController.getNotes);
router.get('/notes/:id', notesController.getNoteById);
router.post('/notes', noteValidation, notesController.createNote);
router.put('/notes/:id', noteValidation, notesController.updateNote);
router.delete('/notes/:id', notesController.deleteNote);

module.exports = router;
