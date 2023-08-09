const router = require('express').Router();
const controller = require('../controllers/users.controller');

//login
router.post('/login', controller.login);
// Get all users
router.get('/', controller.getUsers);
// Create a new user
router.post('/add', controller.addUser);
// Get a specific user
router.get('/:id', controller.getUser);
// Update a user
router.put('/:id', controller.updateUser);
// Delete a user
router.delete('/:id', controller.deleteUser);

module.exports = router;
