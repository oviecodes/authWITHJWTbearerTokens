

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
        const user = req.user
        res.status(200).json({ msg: 'Welcome to the dashboard', user })
    })
    .post()

module.exports = router