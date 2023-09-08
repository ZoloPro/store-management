const express = require('express');
const { storeOwnerRegister, storeOwnerLogin } = require('../controllers/authController');
const router = express.Router();

router.route('/store-owner/register').post(storeOwnerRegister);

router.route('/store-owner/login').post(storeOwnerLogin);

module.exports = router;