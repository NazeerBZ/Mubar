const Driver = require('../models/driver');

module.exports = {

    greeting(req, res) {
        res.send({ hi: 'nazeer' });
    },

    index(req, res, next){
        const lng = req.query.lng;
        const lat = req.query.lat;
        // const { lng, lat } = req.query;
        // console.log(req.query.lng);
        
        Driver.geoNear(
            {type: 'Point', coordinates: [lng, lat]},
            {spherical: true, maxDistance: 200000}
        )   
        .then((drivers)=> res.send(drivers) )
        .catch(next)
    },

    create(req, res, next) {
        console.log(req.body);
        const driverProps = req.body;    
        Driver.create(driverProps)
            .then((driver) => { res.send(driver); })
            .catch(next)
    },

    edit(req, res, next) {
        const driverId = req.params.id;
        const driverProps = req.body;
        Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
            .then(() => Driver.findById({ _id: driverId }))
            .then((driver) => { res.send(driver) })
            .catch(next)
    },

    delete(req, res, next) {
        const driverId = req.params.id;
        Driver.remove({ _id: driverId })
            .then((driver) => { res.status(204).send(driver) })
            .catch(next)
    }
}