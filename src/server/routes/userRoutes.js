const express = require('express');
const userController = require('./../controllers/userController');
const router = express.Router();

router.route('/findAccount').get(userController.findAccount);
router.route('/login/:email/:password').get(userController.loginUser);
router.route('/allUsers').get(userController.allUsers);
router.route('/createUser').post(userController.createUser)

module.exports = router;