

const User = require('../models/user')

const getSignUp = async(req, res) => {
    res.send('Welcome to the signup route')
}

const createUser = async(req, res) => {

    const { name, password, email } = req.body

    if(!name || !password || !email){
        return res.status(400).json({ msg: "please fill all fields" })
    } else {
        const user = await User.findOne({ email })
        if(user){
            return res.status(400).json({ msg: 'user already exists' })
        } else {
            const newUser = await User.create(req.body)
            return res.status(200).json({ msg: 'please proceed to login', newUser})
        }
    }
}

module.exports = {
    getSignUp,
    createUser
}