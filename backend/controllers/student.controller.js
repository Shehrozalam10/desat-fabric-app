// const { submitTransaction } = require('../fabric-gateway/desat.contract');

// exports.uploadVC = async (req, res) => {
//   try {
//     const { studentId, vc } = req.body;
//     const result = await submitTransaction('UploadVC', studentId, JSON.stringify(vc));
//     res.json({ success: true, message: 'VC uploaded', result });
//   } catch (err) {
//     res.status(500).json({ success: false, error: err.message });
//   }
// };

// exports.submitPreferences = async (req, res) => {
//   try {
//     const { studentId, preferences } = req.body;
//     const result = await submitTransaction('SubmitPreferences', studentId, JSON.stringify(preferences));
//     res.json({ success: true, message: 'Preferences submitted', result });
//   } catch (err) {
//     res.status(500).json({ success: false, error: err.message });
//   }
// };

// exports.getAllotment = async (req, res) => {
//   try {
//     const { studentId } = req.params;
//     const result = await submitTransaction('GetAllotment', studentId);
//     res.json({ success: true, allotment: JSON.parse(result) });
//   } catch (err) {
//     res.status(500).json({ success: false, error: err.message });
//   }
// };


const Student = require('../models/Student');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { submitTransaction } = require('../fabric-gateway/desat.contract');

// Generate DID from uploaded file (e.g., GATE scorecard)
const generateDIDFromFile = (filePath) => {
  const fileBuffer = fs.readFileSync(filePath);
  const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');
  return `did:desat:${hash}`;
};

// Student Registration with DID generation
exports.registerStudent = async (req, res) => {
  try {
    const { name, email } = req.body;
    const file = req.file;

    if (!file) return res.status(400).json({ error: 'Document file is required' });

    const did = generateDIDFromFile(file.path);

    const student = new Student({
      name,
      email,
      documentPath: file.path,
      did,
    });

    await student.save();
    res.status(201).json({ message: 'Student registered successfully', did });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to register student' });
  }
};

// Upload VC to Blockchain
exports.uploadVC = async (req, res) => {
  try {
    const { studentId, vc } = req.body;
    const result = await submitTransaction('UploadVC', studentId, JSON.stringify(vc));
    res.json({ success: true, message: 'VC uploaded', result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// Submit College Preferences
exports.submitPreferences = async (req, res) => {
  try {
    const { studentId, preferences } = req.body;
    const result = await submitTransaction('SubmitPreferences', studentId, JSON.stringify(preferences));
    res.json({ success: true, message: 'Preferences submitted', result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get Allotment from Blockchain
exports.getAllotment = async (req, res) => {
  try {
    const { studentId } = req.params;
    const result = await submitTransaction('GetAllotment', studentId);
    res.json({ success: true, allotment: JSON.parse(result) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
};
