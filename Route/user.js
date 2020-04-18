const express = require("express");
const userController = require('../Controller/userController')
const router = express.Router();

/**
 *@author: Rajnish Kumar
 *@route POST /api/<version>/users/
 *@desc Public API for Add User
 *@access Public
 **/
router.post('/',userController.addUser);

/**
 *@author: Rajnish Kumar
 *@route GET /api/<version>/users/
 *@desc Public API for Getting User List
 *@access Public
 **/
router.get('/',userController.getUser);

/**
 *@author: Rajnish Kumar
 *@route PUT /api/<version>/users/:_id
 *@desc Public API for update User
 *@access Public
 **/
router.put('/:id',userController.updateUserById);

/**
 *@author: Rajnish Kumar
 *@route DELETE /api/<version>/users/:_id
 *@desc Public API for Delete User
 *@access Public
 **/
router.delete('/:id',userController.deleteUserById);

module.exports = router;