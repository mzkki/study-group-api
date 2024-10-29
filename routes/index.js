const express = require('express');
const notesController = require('../controllers/NotesController');

const router = express.Router();

router.get('/notes', notesController.getNotes);
router.post('/notes')
router.get('/notes/:id')
router.put('/notes/:id')
router.delete('/notes/:id')

module.exports = router;
