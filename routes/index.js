const express = require('express');

const router = express.Router();

router.get('/notes')
router.post('/notes')
router.get('/notes/:id')
router.put('/notes/:id')
router.delete('/notes/:id')

module.exports = router;
