const path = require('path');

const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');



// GET: /admin/add-product
router.get('/add-product', adminController.getAddProduct);

// POST: /admin/add-product
router.post('/add-product', adminController.postAddProduct);

//GET: /admin/products
router.get('/products', adminController.getProducts);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product/', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
