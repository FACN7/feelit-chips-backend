const express = require('express');
const router = express.Router();


const { create } = require('../controllers/chip');

router.post('/print-resistance-table', create);

module.exports = router;