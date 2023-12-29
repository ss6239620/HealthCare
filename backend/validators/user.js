const { body } = require("express-validator")


const registerValidator = [
    body('email',"provide proper email").isEmail(),
    body('password','password is too short').isLength({min:5}),
    body('username','Username must be alphanumeric').isAlphanumeric(),
    // body('fullname',"fulname must not be empty").not().isEmpty()
]

const loginValidator = [
    body('password','password is too short').isLength({min:5}),
    body('username','Username must be alphanumeric').isAlphanumeric(),
]

module.exports = { registerValidator,loginValidator }