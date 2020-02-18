const mongoose = require('mongoose');
const userSchema = require('./schema');

module.exports = {

    findByEmail: (userEmail) => new Promise((resolve, reject) => {
        userSchema.findOne({ email: userEmail }, (err, result) => {
            if (err) reject(err)
            else resolve(result)
        })
    }),

    logIn: (userEmail, userPass) => new Promise( (resolve, reject) => {
        userSchema.findOne( {$and:[{email: userEmail},{psw:userPass}]}, (err, result) => {
        if (err) reject(err)
        else resolve(result) 
    })
    }),

    
    createDb: (dataBody) => userSchema.create(dataBody)
}
