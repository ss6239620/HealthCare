const express = require('express')
const { failureResponse, succesfullResponse } = require('../constant/message')
const userModel = require('../models/userModel')
const bcryptjs = require('bcryptjs')
const { JWT_SECRET } = require('../constant/constant')
const jwt = require('jsonwebtoken')
const router = express.Router()
const { validationResult, } = require('express-validator')
const { registerValidator, loginValidator } = require('../validators/user')
const auth = require('../middleware/auth')


router.post('/register', registerValidator, async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { username, fullname, email, password } = req.body
        const existuser = await userModel.findOne({ '$or': [{ email: email }, { username: username }] })
        if (existuser)
            return res.status(400).json({ error: 'User already exist' })

        console.log('pass')
        const newUser = new userModel({
            username, email, fullname, password
        })


        const salt = await bcryptjs.genSalt(10)
        const hash = await bcryptjs.hash(newUser.password, salt)
        newUser.password = hash

        const registerUser = await newUser.save()


        const payload = {
            user: {
                id: newUser.id,
                email: newUser.email,
                username: newUser.email
            }
        }

        const jwtData = jwt.sign(payload, JWT_SECRET)

        return res.status(200).json({
            success: true,
            msg: "registration succesfully",
            user: registerUser,
            token: `${jwtData}`
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: 'server error' })
    }
})

router.post('/login', loginValidator, async (req, res) => {
    console.log('userIn');
    try {
        if (!validationResult(req).isEmpty()) {
            return res.status(400).json({ errors: validationResult(req).array() });
        }
        const { username, password } = req.body
        const existUser = await userModel.findOne({ username })
        if (!existUser) {
            return res.status(400).json({ error: 'No such user exsit' })
        }
        const isMatch = await bcryptjs.compare(password, existUser.password)
        if (!isMatch) {
            return res.status(400).json({ error: 'Password does not match' })
        }
        const payload = {
            user: {
                id: existUser.id,
                email: existUser.email,
                username: existUser.email
            }
        }
        const jwtData = jwt.sign(payload, JWT_SECRET)
        return res.status(200).json({
            success: true,
            user: existUser,
            token: `${jwtData}`
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: 'server error' })
    }
})
router.get('/check', auth, async (req, res) => {
    console.log('checkibg');
})
module.exports = router