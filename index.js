const express = require('express');
const app = express();


const mongoose = require('mongoose');


const cors = require('cors');
app.use(cors())

require('dotenv').config();
const PORT = process.env.PORT || 4000


app.use(express.json());

const {redisClient} = require('./utils/redisClient')
redisClient.on('connect', () => {
      console.log('Connected to Redis');
})


require('./utils/db').connect();

const user = require('./routes/authRoutes')
const booking = require('./routes/bookingRoutes')
const driver = require('./routes/driverRoutes')
const passenger = require('./routes/passengerRoutes')

const cors = require('cors');


app.use('/api/v1', user, booking(io), driver, passenger);


const socketIo = require('socket.io'); 
const io  = socketIo(server, {
      cors: {
            origin: "http://127.0.0.1:5500",
            methods: ["GET", "POST"]
      }
} )

io.on('connection', (socket) => {
      socket.on(('registerDriver'), async(driverId) => {
            await LocationService.setDriverSocket(driverId, socket.id);

      })

      socket.on('disconnect', async() => {
            const driverId =  await LocationService.get(`driver:${driverId}`)
            await LocationService.delDriverSocket(driverId)
      })
})

const LocationService = require('./services/locationService');



app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
})

// hash map of storing the driver details