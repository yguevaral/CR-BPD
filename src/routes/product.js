const express = require('express');
const router = express.Router();


router.get('/:idproduct/:name', (req, res) => {
    res.render('product', { productId: req.params.idproduct, productName: req.params.name })
});

module.exports = router;