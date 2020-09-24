/*
Product Class for basic features
 */

const productsListRaw = require('../utils/CSVFile');
const { getRandomNumberFromRange } = require('../utils');

class Product {
  constructor(country) {
    this.country = country;
    this.products = productsListRaw;
  }

  getLocalProducts() {
    return this.products.filter((o) => o.Country === this.country);
  }

  getGlobalProducts() {
    return this.products.filter((o) => o.Country !== this.country);
  }

  getAllProducts() {
    return this.products;
  }

  getRandomLocalProduct() {
    const products = this.getLocalProducts();
    if (products.length) {
      return products[getRandomNumberFromRange(0, products.length - 1)];
    }
    return null;
  }

  getRandomGlobalProduct() {
    const products = this.getGlobalProducts();
    if (products.length) {
      return products[getRandomNumberFromRange(0, products.length - 1)];
    }
    return null;
  }
}

module.exports = { Product };
