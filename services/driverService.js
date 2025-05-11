const driverRepo = require('../repositories/driverRepo');

const locationService = require('./services/locationService');

const updateLocation = async (driverId, {latitude, longitude}) => {
      const longitude = parseFloat(longitude);
      const latitude = parseFloat(latitude);    
      
      if(isNaN(longitude) || isNaN(latitude)) {
        throw new Error('Invalid coordinates');
      }

      await locationService.addDriverLocation(driverId, latitude, longitude);

      await driverRepository.updateDriverLocation(driverId, { 
            type: "point",
            coordinates: [longitude, latitude]
      })
}
module.exports = {
      updateLocation
}
