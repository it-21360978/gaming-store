const router = require('express').Router();
const controller = require('../controllers/games.controller');
const { uploadImage } = require('../middlewares/games.multer');

// Get all games
router.get('/', controller.getGames);

// Get a specific game
router.get('/:id', controller.getGame);

// Add a game
router.post('/', uploadImage, controller.addGame);

// Update a game
router.put('/:id', uploadImage, controller.updateGame);

// Delete a game
router.delete('/:id', controller.deleteGame);

module.exports = router;
