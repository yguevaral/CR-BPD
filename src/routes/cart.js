const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    console.log('asdfasdf')
    res.render('cart', { title: 'My Cart' })
});

module.exports = router;