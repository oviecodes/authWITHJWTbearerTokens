

require('dotenv').config()
const jwt = require('jsonwebtoken')

const isAuth = async(req, res, next) => {
    const bearerHeader = req.header('Authorization')

    if(!bearerHeader) {
        return res.status(400).json({ msg: 'pls provide bearer header' })
    } else {
        const bearer = bearerHeader.split(' ')
        const [ _, bearerToken ] = bearer
        //verify token
        jwt.verify(bearerToken, process.env.JWTSECRET, (err, decoded) => {
            if(err){
                return res.status(400).json({ msg: 'invalid token' })
            }
            req.user = decoded
            return next()
        })
    }
}

module.exports = {
    isAuth
}