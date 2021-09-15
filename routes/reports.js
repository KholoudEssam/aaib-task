const express = require('express');

const { getReports, resolveReport, blockReport } = require('../controllers/reports');
const router = express.Router();

router.get('/', getReports);
router.put('/:id', resolveReport);
router.delete('/:id', blockReport);

module.exports = router;
