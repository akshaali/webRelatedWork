const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    firstname :{type : String},
    lastname : { type : String},
    email : {type : String},
    psw : {type : String},
    pswRpt : {type : String}
},
{version : false}
);
module.exports = mongoose.model('employeeData', userSchema)