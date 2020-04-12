const userModel = require("../Model/userSchema")

exports.addUserService = (payload) =>{
    return new Promise(function(resolve,reject){
        const User = new userModel(payload)
        User.save()
        .then((result) =>{
            resolve(result)
            })
        .catch((err) =>{
            reject(err)
        })
    })

};

exports.getUserService = () =>{
    return new Promise(function(resolve, reject){
        userModel.find()
        .then((result) =>{
            resolve(result)
            })
        .catch((err) =>{
            reject(err)
        })

    })
};

exports.deleteUserByIdService = (userId) =>{
    return new Promise(function(resolve,reject){
        let id = userId.id;
        userModel.findByIdAndRemove(id)
        .then((result) =>{
            resolve(result)
            })
        .catch((err) =>{
            reject(err)
        })

    })

};

exports.updateUserByIdService = (userId,payload) =>{
    return new Promise(function(resolve,reject){
        let id = userId.id;
        console.log("usessridd",id,payload)
        userModel.findOneAndUpdate(id, payload, {new:true})
        .then((result) =>{
        console.log("Payload",result)
        resolve(result)
            })
        .catch((err) =>{
            reject(err)
        })
    })

};