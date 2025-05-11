const User = require('../models/user')

const jwt = require('jsonwebtoken')

const register = async (userData) => {
      const user = new User(userData)
}

const login = async (email, password) => {
      
}

module.exports = {register, login}