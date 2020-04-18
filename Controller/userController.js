const userService = require("../Service/userService");
const { addUserValidation } = require('../Validation/userValidation')

// This Controller is used for Adding User
exports.addUser = (req,res) =>{
    const { errors, isValid } = addUserValidation(req.body);
    if (!isValid) {
        return res.status(400).send(errors);
    }

    userService.addUserService(req.body)
    .then((result) =>{
        return res.status(200).send(result);
        })
    .catch((err) =>{
        return res.status(500).send(err);
    })

}

// This Controller is used for get User list
exports.getUser = (req,res) =>{
    userService.getUserService()
    .then((result) =>{
        console.log("resssssssss",result)
        return res.status(200).send(result);
        })
    .catch((err) =>{
        console.log("eeeeeeeeerrrrrrrrrr",err)
        return res.status(500).send(err);
    })

}

// This Controller is used for deleting User
exports.deleteUserById = (req,res) =>{
    userService.deleteUserByIdService(req.params)
    .then((result) =>{
        return res.status(200).send(result);
        })
    .catch((err) =>{
        return res.status(500).send(err);
    })

}

// This Controller is used for Updating User
exports.updateUserById = (req,res) =>{
    const { errors, isValid } = addUserValidation(req.body);
    if (!isValid) {
        return res.status(400).send(errors);
    }
    userService.updateUserByIdService(req.params,req.body)
    .then((result) =>{
        return res.status(200).send(result);
        })
    .catch((err) =>{
        return res.status(500).send(err);
    })

}