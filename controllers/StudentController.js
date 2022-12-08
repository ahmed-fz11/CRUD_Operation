const Student = require('../models/Student')

//showing the list of students
const index = (req,res,next) => {
    Student.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

const show = (req,res,next) => {
    let studentID = req.body.studentID
    Student.findById(studentID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({

            message: 'An error Occured!'
        })
    })
}

//add a new student
const store = (req,res,next) => {
    let student = new Student({
        name: req.body.name,
        class: req.body.class,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
    student.save()
    .then(response => {
        res.json({
            message: 'Student added successfullu!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

//update a student
const update = (req,res,next) => {
    let studentID = req.body.studentID

    let updatedData = {
        name: req.body.name,
        class: req.body.class,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }

    Student.findByIdAndUpdate(studentID,{$set: updatedData})
    .then(()=>{
        res.json({
            message : 'Student updated successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

//delete a student

const destroy = (req,res,next) => {
    let studentID = req.body.studentID
    Student.findOneAndRemove(studentID)
    .then(()=>{
        res.json({
            message : 'Student deleted successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

module.exports = {
    index,show,store,update,destroy
}