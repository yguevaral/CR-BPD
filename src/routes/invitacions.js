
const express = require('express');
const router = express.Router();

const { getInvitacions} = require('../controllers/invitacions');

router.get('/group/:group', getInvitacions);


module.exports = router;