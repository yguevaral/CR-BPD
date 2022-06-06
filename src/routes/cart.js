const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('cart', { title: 'My Cart' })
});

module.exports = router;