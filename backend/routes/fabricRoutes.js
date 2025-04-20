import express from 'express';
import { readAsset, createAsset } from '../gateway/fabricService.js';

const router = express.Router();

router.get('/asset/:id', async (req, res) => {
  try {
    const result = await readAsset(req.params.id);
    res.json({ asset: JSON.parse(result) });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post('/asset', async (req, res) => {
  const { id, color, size, owner, value } = req.body;
  try {
    const result = await createAsset(id, color, size, owner, value);
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default router;



