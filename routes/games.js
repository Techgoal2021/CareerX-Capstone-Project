// routes/games.js
const express = require('express');
const router = express.Router();
const GameController = require('../controllers/GameController');
const authMiddleware = require('../middleware/auth');

router.get('/', GameController.getGames);
router.post('/', authMiddleware.isAdmin, GameController.createGame);
router.put('/:id', authMiddleware.isAdmin, GameController.updateGame);
router.delete('/:id', authMiddleware.isAdmin, GameController.deleteGame);

module.exports = router;
