const redis = require("redis");

const dontenv = require("dotenv");

dontenv.config();

const rediClient = redis.createClient({
      url: process.env.REDIC_URL,
})

redisClient.on("connect", () => {
      console.log("Connected to redis");
})

redisClient.on("error", (err) => {
      console.log("Redis connection failed", err);
})

module.exports = {redisClient};