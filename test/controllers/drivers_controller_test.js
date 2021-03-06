const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const Driver = mongoose.model('driver');

describe('Drivers controller', () => {

    it('POST to /api/drivers to create a new driver', (done) => {

        Driver.count().then((count) => {

            request(app)
                .post('/api/drivers')
                .send({ email: 'test@test.com' })
                .end((err, response) => {
                    console.log(response.body);
                    Driver.count().then((newCount) => {
                        assert(count + 1 === newCount)
                        done();
                    })
                })

        })
    })

})