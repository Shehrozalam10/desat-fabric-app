import express from 'express';
import {
  registerCollege,
  loginCollege,
  submitMatrix,
  getMatrix
} from '../controllers/college.controller.js';

import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', registerCollege);
router.post('/login', loginCollege);
// router.post('/submit-seats', protect, submitMatrix);
router.post('/submit-seats', submitMatrix);

router.get('/get-matrix', protect, getMatrix);

export default router;
