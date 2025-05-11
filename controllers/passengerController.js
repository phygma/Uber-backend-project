const passenger = require("../services/passengerService");


const getPassengerBookings = async (req,res) => {
      try{
            await passengerService.getPassengerBookings(req.user_id)
            res.status(201).json({
                  data: bookings,
                  success: true,
                  error: null,
                  message: "retrieved passenger bookings successfully"
            })
      }catch(error){
            res.status(400).json(error.message)

      }
}

const provideFeedback = async (req,res) => {
      try{
            const {bookingID, rating, feedback} = req.body
            await passengerService.provideFeedback(re.user._id, bookingID, rating, feedback)
            res.status(201).json({
                  success: true,
                  error: null,
                  message: " feedback submitted successfully"
            })

      }catch(error){
            res.status(400).json(error.message)

      }
}

module.exports = {getPassengerBookings, provideFeedback}