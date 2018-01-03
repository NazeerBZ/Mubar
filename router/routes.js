const driversController = require('../controllers/drivers_controller');

function routes(app) {

    app.get('/api',  driversController.greeting) 
    app.post('/api/drivers', driversController.create);
    app.put('/api/drivers/:id', driversController.edit);
    app.delete("/api/drivers/:id", driversController.delete); 
    app.get('/api/drivers', driversController.index);
}

module.exports = routes;