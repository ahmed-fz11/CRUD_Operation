const express = require('express')
const router = express.Router()

const StudentController = require('../controllers/StudentController')

router.get('/',StudentController.index)
router.post('/show',EmployeeController.show)
router.post('/store',EmployeeController.store)
router.post('/update',EmployeeController.update)
router.post('/delete',EmployeeController.delete)

module.exports = router