const redisClient = require('../utils/redisClient');  

class LocationService {
      async setDriverSocket(driverId, socketId) {
            await redisClient.set(`driver:${driverId}`, socketId)
      }


      async getDriverSocket(driverId, socketId) {
            await redisClient.get(`driver:${driverId}`, socketId)
      }

      async delDriverSocket(driverId) {
            await redisClient.del(`driver:${driverId}`)
      }

      async addDriverLocation (driverId, latitude, longitude) {
            try{
                  await redisClient.sendCommand([
                        'GeoADD',
                        'drivers',
                        lstitude.String(),
                        longitude.String(),
                        driverId.toString()
                  ]);

            }catch(error){
                  console.error("Cannot add to redis", error);

            }
      

      }

      async findNearbyDrivers(longitude, latitude, radiusKm) {
            const nearByDrivers = await redisClient.sendCommand([
                  'GEORADIUS',
                  'drivers',
                  longigtude.toString(),
                  longitude.toString(),
                  latitude.toString(),   
                  'km',
                  'WITHCOORD',
            ])
            return nearByDrivers;
      }

      async storeNotifiedDrivers(bookingId, driverIds) {
            for (const driverId of driverIds) {
                  const addedCount = await redisClient.sAdd(`notifiedDrivers:${bookingId}`, driverId)
            }
      }

      async getNotifiedDrivers(bookingId){
            const nearByDrivers = await redisClient.sMembers(`notifiedDrivers:${bookingId}`);
      }


}