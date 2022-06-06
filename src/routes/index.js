const express = require('express');
const router = express.Router();


router.get('/ping', (req, res) => {
    res.send('ok')
});

//FrontEnd
router.get('/', (req, res) => {
    res.render("index",  { title: 'First Website' });
});

module.exports = router;