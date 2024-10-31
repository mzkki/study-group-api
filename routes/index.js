const express = require('express');
const notesController = require('../controllers/NotesController');
const authController = require('../controllers/AuthController');
const { noteValidation } = require('../utils/validator/notes');
const { loginValidation, registerValidation } = require('../utils/validator/users');
const verifyToken = require('../middlewares/auth');

const router = express.Router();

// auth
router.post('/login', loginValidation, authController.login);
router.post('/register', registerValidation, authController.register);

// notes
router.get('/notes', verifyToken, notesController.getNotes);
router.get('/notes/:id', verifyToken, notesController.getNoteById);
router.post('/notes', verifyToken, noteValidation, notesController.createNote);
router.put('/notes/:id', verifyToken, noteValidation, notesController.updateNote);
router.delete('/notes/:id', verifyToken, notesController.deleteNote);

module.exports = router;
