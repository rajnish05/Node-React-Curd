const customerModel = require("../Model/customerSchema");

// This Service is Used for adding Customer
exports.addCustomerService = (payload) =>{
    return new Promise(function(resolve, reject){
        let Customer = new customerModel(payload)
        Customer.save()
        .then((res) =>{
            resolve(res)
        })
        .catch((err) =>{
            reject(err)
        })
    })
}

// This Service is used for getting customer List
exports.getCustomerService = () =>{
    return new Promise(function(resolve, reject){
        customerModel.find()
        .then((result) =>{
            resolve(result)
            })
        .catch((err) =>{
            reject(err)
        })
    })
}

// This Service is used for getting customer Details by _id
exports.getCustomerByIdService = (payload) =>{
    return new Promise(function(resolve,reject){
        let id = payload.id;
        customerModel.findById(id)
        .then((res) =>{
            resolve(res)
        })
        .catch((err) =>{
            reject(err)
        })
    })
}

// This Service is used for getting customer Details by Customerid

exports.getCustomerByCustomIdService = (params) =>{
    return new Promise(function(resolve,reject){
        let id = params.cstmid;
        customerModel.find({customerId:id})
        .then((res) =>{
            resolve(res)
        })
        .catch((err) =>{
            reject(err)
        })
    })
    
}

// This Service is used for updating customer details using _id
exports.updateCustomerByIdService = (params,payload) =>{
    return new Promise(function(resolve,reject){
        let id = params.id;
        customerModel.findByIdAndUpdate(id,payload, {new:true})
        .then((res) =>{
            resolve(res)
        })
        .catch((err) =>{
            reject(err)
        })
    })
}

// This Service is used for Deleting Customer
exports.deleteCustomerByIdService = (params) =>{
    return new Promise(function(resolve,reject){
        let id = params.id;
        customerModel.findByIdAndRemove(id)
        .then((result) =>{
            resolve(result)
            })
        .catch((err) =>{
            reject(err)
        })

    })

};