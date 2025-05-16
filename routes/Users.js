
// routes/users.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.put('/:id/online', UserController.updateUserStatus);
router.delete('/:id', UserController.deleteUser);

// router.post('/games', isAdmin, GameController.createGame);

router.post('/:id/wallet/deposit', UserController.depositFunds);
router.post('/:id/wallet/withdraw', UserController.withdrawFunds);

router.get('/:id/wallet/balance', UserController.getUserBalance);




module.exports = router;



