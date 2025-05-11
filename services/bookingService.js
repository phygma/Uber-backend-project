const bookingRepo = require('../repositories/bookingRepo');

const BASIC_FARE = 50;
const RATE_PER_KM = 12;


const createBooking = async ({passengerId, source, destination}) => {

      const distance = haversineDistance(source.latitude, source.longitude, destination.latitude, destination.longitude);

      const fare = BASIC_FARE + (distance * RATE_PER_KM)
      const bookingData = {
            passenger: passengerId,
            source,
            destination,
            status: 'pending'
      }
      const booking = bookingRepo.createBooking(bookingData);
      return booking;
}

const findNearBYDrivers = async (location, radius =5) => {
      const logitude = parseFloat(location.longitude);
      const latitude = parseFloat(location.latitude);
      
       const radiusKm = parseFloat(radius);

       if (isNaN(longitude) || isNaN(latitude) || isNaN(radiusKm)) {
             throw new Error('Invalid location or radius');
       }

       const nearByDrivers = await locationService.findNearByDrivers(longitude, latitude, radiusKm);
       return nearByDrivers;
}

const assignDriver = async (bookingId, driverId) => {
      const booking = await bookingRepo.updateBookingStatus(bookingId, driverId, 'confirmed');
      if(!booking) throw new Error("Booking already confirmed or does not exists");
      return booking;
}
module.exports = {createBooking, findNearBYDrivers, assignDriver};