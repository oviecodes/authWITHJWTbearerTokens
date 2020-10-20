

require('dotenv').config()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const getLogin = async(req, res) => {
    res.send('welcome to the signup route')
}

const authUser = async(req, res) => {
    const { email, password } = req.body
    if(!email || !password) {
        return res.status(400).json({ msg: 'please fill all fields' })
    } else {
        const user = await User.findOne({ email })
        
        if(!user) {
            return res.status(400).json({ msg: 'user does not exist' })
        } else {
            const valid = user.validPassword(password)
            if(valid){
                jwt.sign({ id: user.id }, process.env.JWTSECRET, { expiresIn: Number(process.env.EXPIRES) }, (err, token) => {
                    return res.status(200).json({
                        token
                    })
                })
            } else {
                return res.status(400).json({ msg: 'invalid password' })
            }
        }
    }
}

module.exports = {
    getLogin,
    authUser
}