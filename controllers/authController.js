const authService = require('../services/authService');
const register = async (req,res) => {
      try{
            const { user, token} = await authService.register(req.body);
            res.status(201).json( )

      }catch(error){

      }
}

const login = async (req,res) => {
      try{

      }catch(error){

      }
}
module.exports = {register, login}