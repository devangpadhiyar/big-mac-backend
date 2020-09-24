const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/country-data', async (req, res, next) => {
  console.log(`Request comming from ${req.ip}`);
  try {
    // If IP is localhost or testing from local then take 8.8.8.8 as user's IP
    const remoteIP = req.ip === '::1' ? '8.8.8.8' : req.ip;

    const response = await axios.get(`http://ipvigilante.com/json/${remoteIP}`);
    if (response.status === 200) {
      res.send(response.data);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
