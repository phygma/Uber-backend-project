const bookingService = require('../services/bookingService')
const {io} = require('../index')

const locationService = async (req,res ) => {
      try{
            const {source, destination} = req.body

            //new object create
            const booking = await bookingService.createBooking({passengerId: req.user._id, source, destication})


            //search for nearby drivers
            const nearByDrivers = await bookingService.findNearBYDrivers(source)
            const driverIds = [];
            //notify nearby drivers
            for (const driver of nearByDrivers) {
                  //get socket id of the driver
                  //emit notification -> alert
                  const driverId = await locationService.getDriverSocket(driver[0]);
                  if(driverSocketId){

                        driverIds.push(driver[0])
                        io.to(driverSocketId).emit('newbooking', {bookingId: booking._id, source, destination, fare: booking.farr})

                  }
            }
            //store the driverId of the nearby devices in the redis 
            await locationService.storeNotifiedDrivers(booking._id, driverIds)
            return res.status(201).json({
                  data: booking,
                  success: true,
                  error: null,
                  message: "successfully created the booking"
            })

      }catch(error){
            res.status(400).json(
                  error.message
            )
      }
}

const confirmBooking = (io) => async (req,res) => {
      try{
            const bookingId = req.body;

            const booking = await bookingService.assignDriver(bookingId, req.user._id);

            const notifiedDriverIds = await locationService.getNotifiedDrivers(bookingId)

            for (const driverId of notifiedDriverIds) {
                  const driverSocketId = await locationService.getDriverSocket(driverId)
                  if(driverSocketId){
                        if(driverId == req.user._id) {
                              io.to(driverSocketId).emit('rideConfirmed', {bookingId, driverId: req.user._id})
                        }
                        else{
                              io.to(driverSocketId.emit('removeBooking', {bookingId}))
                        }
                  }
            }

            return res.status(201).json({
                  data: booking,
                  success: true,
                  error: null,
                  message: "successfully created the booking"
            })

      }catch(error){
            return res.status(400).json(error.message)
            
      }
}

module.exports = {locationService, confirmBooking};