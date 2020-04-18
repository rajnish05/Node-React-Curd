const express = require('express');
const customerController = require("../Controller/customerController");

const router = express.Router();

/**
 *@author: Rajnish Kumar
 *@route POST /api/<version>/customers/
 *@desc Public API for Add customer
 *@access Public
 **/
router.post('/',customerController.addCustomer);

/**
 *@author: Rajnish Kumar
 *@route GET /api/<version>/customers/
 *@desc Public API for getting customers list
 *@access Public
 **/
router.get('/',customerController.getCustomer);

/**
 *@author: Rajnish Kumar
 *@route GET /api/<version>/customers/:_id
 *@desc Public API for Getting customer Detail by id 
 *@access Public
 **/
router.get('/:id',customerController.getCustomerById);

/**
 *@author: Rajnish Kumar
 *@route GET /api/<version>/customers/custom/:cstmid
 *@desc Public API for Getting customer Detail by customer Id
 *@access Public
 **/
router.get('/custom/:cstmid',customerController.getCustomerByCustomId);

/**
 *@author: Rajnish Kumar
 *@route PUT /api/<version>/customers/:_id
 *@desc Public API for Update Customer
 *@access Public
 **/
router.put('/:id',customerController.updateCustomerById);

/**
 *@author: Rajnish Kumar
 *@route DELETE /api/<version>/customers/:_id
 *@desc Public API for Delete Customer
 *@access Public
 **/
router.delete('/:id',customerController.deleteCustomerById);

module.exports = router;