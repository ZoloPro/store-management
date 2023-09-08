const express = require('express');
const dotenv = require('dotenv').config();

const auth = require('./routes/auth');
const offerJob = require('./routes/offerJob');
const storeOwner = require('./routes/storeOwner');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mount router
app.use('/api/v1/auth', auth);
app.use('/api/v1/offer-job', offerJob);
app.use('/api/v1/store-owners', storeOwner);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})