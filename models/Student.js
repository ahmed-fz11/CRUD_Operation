const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type : String
    },
    class: {
        type : String
    },
    email: {
        type : String
    },
    phone: {
        type : String
    },
    age: {
        type : String
    }
}, {timestamps: true})

const Student = mongoose.model('Student',studentSchema)
module.exports = Employee