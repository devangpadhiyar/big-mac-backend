const assert = require('assert');
// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const csvFile = require('../utils/CSVFile');
const should = require('chai').should();

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Products', () => {
  describe('CSV File', () => {
    it('Should read cached CSV file', (done) => {
      assert.notStrictEqual(csvFile, null);
      csvFile.should.be.a('array');
      done();
    });
  });

  describe('GET /products', () => {
    // Test to get all students record
    it('Should get local products for India', (done) => {
      chai
        .request(app)
        .get('/products/get-local-products?country=India')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          assert.notStrictEqual(res.body.length, 0);
          done();
        });
    }).timeout(5000);

    it('Should get global products for India', (done) => {
      chai
        .request(app)
        .get('/products/get-global-products?country=India')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          assert.notStrictEqual(res.body.length, 0);
          done();
        });
    }).timeout(5000);

    it('Should get random single product for India', (done) => {
      chai
        .request(app)
        .get('/products/get-random-local-product?country=India')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    }).timeout(5000);

    it('Should get random random global product for India (Excluding)', (done) => {
      chai
        .request(app)
        .get('/products/get-random-local-product?country=India')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    }).timeout(5000);
  });
});
