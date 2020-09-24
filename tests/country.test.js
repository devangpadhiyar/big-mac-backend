const assert = require('assert');
// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Country', () => {
  describe('GET /country/country-data', () => {
    // Test to get all students record
    it('Should get country data for IP', (done) => {
      chai
        .request(app)
        .get('/country/country-data')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    }).timeout(20000);
    // // Test to get single student record
    // it('should get a single student record', (done) => {
    //   const id = 1;
    //   chai
    //     .request(app)
    //     .get(`/${id}`)
    //     .end((err, res) => {
    //       res.should.have.status(200);
    //       res.body.should.be.a('object');
    //       done();
    //     });
    // });
    //
    // // Test to get single student record
    // it('should not get a single student record', (done) => {
    //   const id = 5;
    //   chai
    //     .request(app)
    //     .get(`/${id}`)
    //     .end((err, res) => {
    //       res.should.have.status(404);
    //       done();
    //     });
    // });
  });
});
