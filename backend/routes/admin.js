import express from 'express';

const router = express.Router();


let seatMatrix = null;
let applicants = [];

router.post('/seat-matrix', (req, res) => {
  seatMatrix = req.body;
  console.log("🪑 Seat Matrix Stored:", seatMatrix);
  res.json({ success: true });
});

router.get('/applicants', (req, res) => {
  const filtered = applicants.filter(a =>
    a.preferences.includes(seatMatrix.collegeId)
  );
  res.json(filtered);
});

router.get('/student/:did', (req, res) => {
  const student = applicants.find(a => a.did === req.params.did);
  if (!student) return res.status(404).json({ error: "Student not found" });

  res.json({
    name: student.name,
    issuer: student.issuer,
    txHash: student.txHash,
    vcStatus: student.vcStatus,
    vcData: student.vc,
  });
});

export default router;

