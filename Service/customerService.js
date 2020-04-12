const customerModel = require("../Model/customerSchema");

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