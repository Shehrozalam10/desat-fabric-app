import express from 'express';

const router = express.Router();
import generateDID from '../utils/didHelper.mjs';

// const didHelper = await import('./utils/didHelper.mjs');
// const { generateDID } = didHelper;

router.post('/register', async (req, res) => {
  const { collegeName } = req.body;

  if (!collegeName) return res.status(400).json({ error: 'College name required' });

  const { did, publicKey } = await generateDID();

  // Save DID to database here
  console.log(`[NEW DID] ${collegeName} => ${did}`);

  res.json({ did, publicKey });
});

export default router;