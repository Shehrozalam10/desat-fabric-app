// backend/routes/student.routes.js

const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

router.post('/upload-vc', studentController.uploadVC);
router.post('/submit-preferences', studentController.submitPreferences);
router.get('/allotment/:studentId', studentController.getAllotment);

module.exports = router;