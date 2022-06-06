
const express = require('express');
const router = express.Router();

const { getProducts, getProductsStock, getProduct, getProductsCart } = require('../controllers/products');

router.get('/', getProducts);
router.get('/:product', getProduct);
router.get('/stock/:product', getProductsStock);
router.get('/list/:page', getProducts);
router.get('/cart/:products', getProductsCart);


module.exports = router;