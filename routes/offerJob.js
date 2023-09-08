const express = require('express');
const { responseOfferJob, addOfferJob } = require('../controllers/jobRequestController');
const router = express.Router();

router.route('/').post(addOfferJob);

router.route('/:id').patch(responseOfferJob);

module.exports = router;