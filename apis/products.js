/*
API routes for the products
 */
const router = require('express').Router();
const productsController = require('../controllers/products');

router.get('/get-local-products', productsController.retrieveLocalProducts);
router.get('/get-global-products', productsController.retrieveGlobalProducts);

router.get(
  '/get-random-local-product',
  productsController.retrieveRandomLocalProduct
);
router.get(
  '/get-random-global-product',
  productsController.retrieveRandomGlobalProduct
);

module.exports = router;
