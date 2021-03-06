/*
Products controller does the following
- Retrieve the list of products in the User's country
- Retrieve the list of product other then User's country
 */

const { Product } = require('../services/products');

// Retrieve local products
const retrieveLocalProducts = (req, res, next) => {
  const { country } = req.query;

  const localProductsList = new Product(country).getLocalProducts();
  res.send(localProductsList);
};

// Retrieve global products
const retrieveGlobalProducts = (req, res, next) => {
  const { country } = req.query;
  console.log(req);

  const globalProductsList = new Product(country).getGlobalProducts();
  res.send(globalProductsList);
};

// Retrieve random local product
const retrieveRandomLocalProduct = (req, res, next) => {
  const { country } = req.query;

  const product = new Product(country).getRandomLocalProduct();
  if (product) {
    res.send(product);
    return;
  }

  res.status(404).send({ message: 'No products for given country' });
};

// Retrieve local products
const retrieveRandomGlobalProduct = (req, res, next) => {
  const { country } = req.query;

  const product = new Product(country).getRandomGlobalProduct();
  if (product) {
    res.send(product);
    return;
  }

  res.status(404).send({ message: 'No global product for given country' });
};

module.exports = {
  retrieveLocalProducts,
  retrieveGlobalProducts,
  retrieveRandomLocalProduct,
  retrieveRandomGlobalProduct,
};
