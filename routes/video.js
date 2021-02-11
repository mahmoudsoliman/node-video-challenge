const express = require('express');
const videoController = require('../controllers/video');

const router = express.Router();

router.get('/', videoController.search)
router.get('/:id', videoController.getVideoById)
router.post('/', videoController.create)
router.put('/:id', videoController.update)
router.delete('/:id', videoController.deleteVideo)

module.exports = router