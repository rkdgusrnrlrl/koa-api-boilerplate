var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Strings = require('../libraries/string');
const autoIncrement = require('mongoose-auto-increment')


var UserSchema = new mongoose.Schema({
    id:  Number,
    email: String,
    passwor: String,
    name: String,
});

let User;

exports.init = (connection) => {
    User = connection.model('user', UserSchema)
    UserSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'id' })
}


exports.create = (email, rawPassword, name) => {
    const password = Strings.generatePasswordHash(rawPassword)
    return User.create({
        email: email,
        passwor: password,
        name: name,
    })
}


exports.findOne = (where={}) => User.findOne(where, {"_id": 0, "__v": 0}).lean().exec()

exports.getList = (where={}) => User.find(where, {"_id": 0, "__v": 0}).lean().exec()

exports.count = (where={}) => User.count(where, {"_id": 0, "__v": 0}).exec()



