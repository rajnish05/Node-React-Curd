const customerService = require("../Service/customerService")
const { addCustomerValidation } = require('../Validation/customerValidation')
// This controller is Use for adding Customers.
exports.addCustomer = function(req,res){
    const { errors, isValid } = addCustomerValidation(req.body);
    if (!isValid) {
        return res.status(400).send(errors);
    }
    customerService.addCustomerService(req.body)
    .then((result) =>{
        return res.status(200).send(result);
    })
    .catch((err) =>{
        return res.status(500).send(err);
    })
}

// This controller is use for getting list of Customer.
exports.getCustomer = function(req,res){
    customerService.getCustomerService(req.body)
    .then((result) =>{
        return res.status(200).send(result);
    })
    .catch((err) =>{
        return res.status(500).send(err);
    })

}

// This controller is use for getting details of a single customer using Id.
exports.getCustomerById = function(req,res){
    customerService.getCustomerByIdService(req.params)
    .then((result) =>{
        return res.status(200).send(result);
    })
    .catch((err) =>{
        return res.status(500).send(err);
    })

}
// This controller is use for getting details of a single customer using customId
exports.getCustomerByCustomId = function(req,res){
    customerService.getCustomerByCustomIdService(req.params)
    .then((result) =>{
        return res.status(200).send(result);
    })
    .catch((err) =>{
        return res.status(500).send(err);
    })
}

// This controller is use for Updating customer by Id
exports.updateCustomerById = function(req,res){
    const { errors, isValid } = addCustomerValidation(req.body);
    if (!isValid) {
        return res.status(400).send(errors);
    }
    customerService.updateCustomerByIdService(req.params,req.body)
    .then((result) =>{
        return res.status(200).send(result);
    })
    .catch((err) =>{
        return res.status(500).send(err);
    })    

}

// This controller is use for Delete Customer.
exports.deleteCustomerById = function(req,res){
    customerService.deleteCustomerByIdService(req.params)
    .then((result) =>{
        return res.status(200).send(result);
    })
    .catch((err) =>{
        return res.status(500).send(err);
    }) 

}