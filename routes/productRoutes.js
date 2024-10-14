const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../config/multerConfig');

router.get('/products', productController.getProducts);
router.post('/products', upload.array('images', 2), productController.createProduct); // İki adet dosya yüklemek için
router.get('/products/:id', productController.getProduct);
router.put('/products/:id', upload.array('images', 2), productController.updateProduct); // İki adet dosya yüklemek için
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;