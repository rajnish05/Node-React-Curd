const userService = require("../Service/userService");
const { addUserValidation } = require('../Validation/userValidation')

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

exports.deleteUserById = (req,res) =>{
    userService.deleteUserByIdService(req.params)
    .then((result) =>{
        return res.status(200).send(result);
        })
    .catch((err) =>{
        return res.status(500).send(err);
    })

}

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