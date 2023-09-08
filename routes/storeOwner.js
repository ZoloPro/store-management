const express = require('express');
const { getAllStoresByOwnerId } = require('../controllers/storeController');
const router = express.Router();

router.route('/:id/stores').get(getAllStoresByOwnerId);

module.exports = router;