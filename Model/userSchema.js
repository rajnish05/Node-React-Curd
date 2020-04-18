const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require("mongoose-sequence")(mongoose);

// Creating User Schema
let userSchema = new Schema({
    userName: {
        type: String,
        default: null
    },
    userAge: {
        type: String,
        default: null
    },
    userSalary: {
        type: String,
        default: null
    }
},
    {
        timestamps: true
    });

userSchema.plugin(AutoIncrement, { inc_field: 'userId' });
const user = mongoose.model('user', userSchema)
module.exports = user;