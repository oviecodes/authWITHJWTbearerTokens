

const express = require('express')
const router = express.Router()
const { getSignUp, createUser } = require('../controllers/signUpController') 
const { getLogin, authUser } = require('../controllers/LoginController') 
const { isAuth } = require('../middleware/index')

router.route('/signup')
    .get(getSignUp)
    .post(createUser)

router.route('/login')
    .get(getLogin)
    .post(authUser)

router.route('/dashboard')
    .all(isAuth)
    .get(async(req, res) => {
        res.send('welcome to your dashboard')
    })
    .post()

module.exports = router