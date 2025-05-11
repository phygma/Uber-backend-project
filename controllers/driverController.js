const driverService = require('../services/driverService');

const updateLocation = async (req, res) => {
      const { latitude, longitude } = req.body;

      await driverService.updateLocation(req._user._id, {latitude, longitude});

      res.status(201).json({
            success:true,
            error: null
      })
}
const getDriverBookings = async(req, res) => {}

module.exports={updateLocation, getDriverBookings}