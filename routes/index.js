const express = require('express');
const router = express.Router();
const productApi = require('../controllers/api/productApi');

console.log("router loaded");
router.get('/',productApi.getProducts);

router.delete('/:id',productApi.destroy);
router.post('/create',productApi.createProduct);

module.exports = router;