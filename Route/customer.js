const express = require('express');
const customerController = require("../Controller/customerController");

const router = express.Router();

router.post('/',customerController.addCustomer);
router.get('/',customerController.getCustomer);
router.get('/:id',customerController.getCustomerById);
router.get('/:custom/:cstmid',customerController.getCustomerByCustomId);
router.put('/:id',customerController.updateCustomerById);
router.delete('/:id',customerController.deleteCustomerById);

module.exports = router;