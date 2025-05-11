const mongoose = require('mongoose');

const connectDB = async () => {
      try{
            await mongoose.connect(process.env.MONGO_URL)
            console.log("MongoDb COnnected")
      }catch (err){
            console.log("MongoDB connection failed", err)
            process.exit(1)
      }
      
}

module.exports = connectDB;