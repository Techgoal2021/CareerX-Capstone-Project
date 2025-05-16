const mongoose = require('mongoose');
const Game = require('../models/Game');



exports.createGame = async (req, res) => {
  try {
    const { team1, team2, odds } = req.body;
    if (!team1 || !team2 || !odds || !odds.team1 || !odds.team2) {
      return res.status(400).json({ message: 'Team names and odds are required' });
    }
    const game = new Game(req.body);
    await game.save();
    res.status(201).json(game);
  } catch (err) {
    res.status(400).json({ message: 'Error creating game' });
  }
};


exports.getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching games' });
  }
};

exports.updateGame = async (req, res) => {
  try {
    const gameId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(gameId)) {
      return res.status(400).json({ message: 'Invalid game ID' });
    }
    const updatedGame = await Game.findByIdAndUpdate(gameId, req.body, { new: true });
    if (!updatedGame) {
      return res.status(404).json({ message: 'Game not found' });
    }
    res.json(updatedGame);
  } catch (err) {
    res.status(400).json({ message: 'Error updating game', error: err.message });
  }
};

exports.deleteGame = async (req, res) => {
  try {
    const gameId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(gameId)) {
      return res.status(400).json({ message: 'Invalid game ID' });
    }
    const game = await Game.findById(gameId);
    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }
    await Game.findByIdAndDelete(gameId);
    res.json({ message: 'Game deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting game', error: err.message });
  }
};







