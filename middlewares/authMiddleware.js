const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = async(req,res,next) => {
      //Get token from header in the request

      //token is not valid, access will be denied

      // if token is valid, verify the token

      //req.user = await User.findById();


}

module.exports = authMiddleware