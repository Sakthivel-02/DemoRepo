const express = require('express')
const { getUsers, addUsers, updateUsers, deleteUsers } = require('./users.controller')

const usersRouter = express.Router()

usersRouter.route('/')
 .get(getUsers)
 .post(addUsers)    

 usersRouter.route('/:id')
 .put(updateUsers)
 .delete(deleteUsers)

 module.exports = usersRouter