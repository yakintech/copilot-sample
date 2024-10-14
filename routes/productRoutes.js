const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../config/multerConfig');

router.get('/', productController.getProducts);
router.post('/', upload.array('images', 2), productController.createProduct); // İki adet dosya yüklemek için
router.get('/:id', productController.getProduct);
router.put('/:id', upload.array('images', 2), productController.updateProduct); // İki adet dosya yüklemek için
router.delete('/:id', productController.deleteProduct);

module.exports = router;