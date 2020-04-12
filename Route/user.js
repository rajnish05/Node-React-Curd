const express = require("express");
const userController = require('../Controller/userController')

const router = express.Router();

router.post('/',userController.addUser);
router.get('/',userController.getUser);
router.put('/:id',userController.updateUserById);
router.delete('/:id',userController.deleteUserById);

module.exports = router;