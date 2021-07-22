const express = require("express");
const router = express.Router();

const control = require('../Controllers/authController');

router.post('/',control.handleAuth);


module.exports = router;