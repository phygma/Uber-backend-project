const bookingRepo = require('../reporsitories/bookingRepo');
const passengerRepo = require('../reporsitories/passengerRepo');
const getPassengerBookings = async (req,res) => {
      try{
            const pasengerDetails = await passengerRepo.findPassengerById(passengerId)
            if(!passengerDetails) throw new Error('Passenger not found  ')
            return passengerDetails
      }catch(error){

      }

}

const provideFeedback = async (req,res) => {
      const booking = await bookingRepo.findBooking({_id: bookingID, passenger: passengerID});
      if(!booking) throw new Error('Booking not found')
            booking.rating = rating;
            booking.feedback = feedback;
            await booking.save();
}

module.exports = {getPassengerBookings, provideFeedback}