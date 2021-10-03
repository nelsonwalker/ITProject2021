const express = require('express')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const withAuth = require('../config/middleware').withAuth

// Create user router
const userRouter = express.Router()
const user = require('../controllers/userController')

// User
userRouter.post('/api/login', urlencodedParser, user.login)

userRouter.post('/api/signup', urlencodedParser, user.registerUser)

// Contacts
userRouter.post('/api/add', withAuth, urlencodedParser, user.addContact)

userRouter.post('/api/edit', withAuth, urlencodedParser, user.editContact)

userRouter.post('/api/remove', withAuth, urlencodedParser, user.removeContact)

// Tags
userRouter.post('/api/add/tag', withAuth, urlencodedParser, user.addTag)

userRouter.post('/api/remove/tag', withAuth, urlencodedParser, user.removeTag)

// Misc
userRouter.get('/verify', withAuth, function (req, res) {
  res.sendStatus(200)
})

userRouter.get('/home', withAuth, user.getContacts)

module.exports = userRouter
