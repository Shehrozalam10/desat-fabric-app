// // // // backend/server.js

// // // const express = require('express');
// // // const cors = require('cors');
// // // const bodyParser = require('body-parser');
// // // const { initGateway, submitTransaction } = require('./fabric-gateway/desat.contract');
// // // const acaClient = require('./aca-py-client');

// // // const app = express();
// // // app.use(cors());
// // // app.use(bodyParser.json());
// // // app.use(express.json()); // parse requests of content-type - application/json

// // // // Connect to Fabric Gateway
// // // initGateway();
// // // app.use('/api/auth', require('./routes/auth'));
// // // app.use('/api/admin', require('./routes/admin'));


// // // const collegeRoutes = require('./routes/collegeRoutes');
// // // app.use('/api/college', collegeRoutes);

// // // app.use(cors({ origin: 'http://localhost:3000' })); // replace with your frontend port
// // // app.get('/api/student/:studentId', async (req, res) => {
// // //   const { studentId } = req.params;
// // //   try {
// // //     const result = await submitTransaction('GetStudent', studentId);
// // //     res.json({ student: JSON.parse(result) });
// // //   } catch (error) {
// // //     res.status(500).json({ error: error.message });
// // //   } 
// // // })
// // // app.get('/api/student/:studentId/verify-vc', async (req, res) => {
// // //   const { studentId } = req.params;
// // //   try {
// // //     const result = await submitTransaction('VerifyVC', studentId);
// // //     res.json({ verificationResult: JSON.parse(result) });
// // //   } catch (error) {
// // //     res.status(500).json({ error: error.message });
// // //   }     
// // // })
// // // app.get('/api/student/:studentId/verify-vc/:vcId', async (req, res) => {
// // //   const { studentId, vcId } = req.params;
// // //   try {
// // //     const result = await submitTransaction('VerifyVC', studentId, vcId);
// // //     res.json({ verificationResult: JSON.parse(result) });
// // //   } catch (error) {
// // //     res.status(500).json({ error: error.message });
// // //   }
// // // })
// // // app.get("/", (req, res) => {
// // //   res.send("Hello World");
// // // }
// // // );
// // // // Student submits GATE VC
// // // app.post('/api/student/submit-vc', async (req, res) => {
// // //   const { studentId, vcData } = req.body;
// // //   try {
// // //     const result = await submitTransaction('SubmitVC', studentId, JSON.stringify(vcData));
// // //     res.json({ message: 'VC Submitted to Ledger', result });
// // //   } catch (err) {
// // //     res.status(500).json({ error: err.message });
// // //   }
// // // });

// // // // Student sets college preferences
// // // app.post('/api/student/preferences', async (req, res) => {
// // //   const { studentId, preferences } = req.body;
// // //   try {
// // //     const result = await submitTransaction('SetPreferences', studentId, JSON.stringify(preferences));
// // //     res.json({ message: 'Preferences Recorded', result });
// // //   } catch (err) {
// // //     res.status(500).json({ error: err.message });
// // //   }
// // // });

// // // // College issues GATE credential via ACA-Py
// // // app.post('/api/college/issue-gate-vc', async (req, res) => {
// // //   const { studentId, gateScore } = req.body;
// // //   try {
// // //     const result = await acaClient.issueCredential(studentId, gateScore);
// // //     res.json({ message: 'VC Issued', result });
// // //   } catch (err) {
// // //     res.status(500).json({ error: err.message });
// // //   }
// // // });

// // // // College submits seat matrix
// // // app.post('/api/college/submit-seats', async (req, res) => {
// // //   const { collegeId, seatMatrix } = req.body;
// // //   try {
// // //     const result = await submitTransaction('SubmitSeats', collegeId, JSON.stringify(seatMatrix));
// // //     res.json({ message: 'Seat Matrix Submitted', result });
// // //   } catch (err) {
// // //     res.status(500).json({ error: err.message });
// // //   }
// // // });

// // // // Execute seat allotment
// // // app.post('/api/admin/execute-allotment', async (req, res) => {
// // //   try {
// // //     const result = await submitTransaction('ExecuteAllotment');
// // //     res.json({ message: 'Allotment Executed', result });
// // //   } catch (err) {
// // //     res.status(500).json({ error: err.message });
// // //   }
// // // });

// // // const PORT = process.env.PORT || 3001;
// // // app.listen(PORT, () => console.log(`DeSAT Server running on port ${PORT}`));


// // // backend/server.js (ESM version)

// // import express from 'express';
// // import cors from 'cors';
// // import bodyParser from 'body-parser';
// // // import { initGateway, submitTransaction } from './fabric-gateway/desat.contract.js';
// // import { initGateway, submitTransaction } from './fabric-gateway/desat.contract.js';

// // import acaClient from './aca-py-client.js';
// // import authRoutes from './routes/auth.js';
// // import adminRoutes from './routes/admin.js';
// // import collegeRoutes from './routes/college.routes.js';

// // // import authRoutes from './routes/auth.js';
// // // app.use('/api/auth', authRoutes);


// // const app = express();

// // app.use(cors({ origin: 'http://localhost:3000' })); // replace with your frontend port
// // app.use(bodyParser.json());
// // app.use(express.json());

// // // Connect to Fabric Gateway
// // initGateway();

// // // Route setup
// // app.use('/api/auth', authRoutes);
// // app.use('/api/admin', adminRoutes);
// // app.use('/api/college', collegeRoutes);

// // app.get('/api/student/:studentId', async (req, res) => {
// //   const { studentId } = req.params;
// //   try {
// //     const result = await submitTransaction('GetStudent', studentId);
// //     res.json({ student: JSON.parse(result) });
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // });

// // app.get('/api/student/:studentId/verify-vc', async (req, res) => {
// //   const { studentId } = req.params;
// //   try {
// //     const result = await submitTransaction('VerifyVC', studentId);
// //     res.json({ verificationResult: JSON.parse(result) });
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // });

// // app.get('/api/student/:studentId/verify-vc/:vcId', async (req, res) => {
// //   const { studentId, vcId } = req.params;
// //   try {
// //     const result = await submitTransaction('VerifyVC', studentId, vcId);
// //     res.json({ verificationResult: JSON.parse(result) });
// //   } catch (error) {
// //     res.status(500).json({ error: error.message });
// //   }
// // });

// // app.get('/', (req, res) => {
// //   res.send('Hello World');
// // });

// // // Student submits GATE VC
// // app.post('/api/student/submit-vc', async (req, res) => {
// //   const { studentId, vcData } = req.body;
// //   try {
// //     const result = await submitTransaction('SubmitVC', studentId, JSON.stringify(vcData));
// //     res.json({ message: 'VC Submitted to Ledger', result });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // // Student sets college preferences
// // app.post('/api/student/preferences', async (req, res) => {
// //   const { studentId, preferences } = req.body;
// //   try {
// //     const result = await submitTransaction('SetPreferences', studentId, JSON.stringify(preferences));
// //     res.json({ message: 'Preferences Recorded', result });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // // College issues GATE credential via ACA-Py
// // app.post('/api/college/issue-gate-vc', async (req, res) => {
// //   const { studentId, gateScore } = req.body;
// //   try {
// //     const result = await acaClient.issueCredential(studentId, gateScore);
// //     res.json({ message: 'VC Issued', result });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // // College submits seat matrix
// // app.post('/api/college/submit-seats', async (req, res) => {
// //   const { collegeId, seatMatrix } = req.body;
// //   try {
// //     const result = await submitTransaction('SubmitSeats', collegeId, JSON.stringify(seatMatrix));
// //     res.json({ message: 'Seat Matrix Submitted', result });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // // Execute seat allotment
// // app.post('/api/admin/execute-allotment', async (req, res) => {
// //   try {
// //     const result = await submitTransaction('ExecuteAllotment');
// //     res.json({ message: 'Allotment Executed', result });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // const PORT = process.env.PORT || 3001;
// // app.listen(PORT, () => console.log(`DeSAT Server running on port ${PORT}`));


// // backend/server.js (ESM version)

// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import { initGateway, submitTransaction } from './fabric-gateway/desat.contract.js';
// import acaClient from './aca-py-client.js';
// import authRoutes from './routes/auth.js';
// import adminRoutes from './routes/admin.js';
// import collegeRoutes from './routes/college.routes.js';

// const app = express();

// app.use(cors({ origin: 'http://localhost:3000' })); // replace with your frontend port
// app.use(bodyParser.json());
// app.use(express.json());

// // Connect to Fabric Gateway
// initGateway();

// // Route setup
// app.use('/api/auth', authRoutes);
// app.use('/api/admin', adminRoutes);
// app.use('/api/college', collegeRoutes);

// app.get('/api/student/:studentId', async (req, res) => {
//   const { studentId } = req.params;
//   try {
//     const result = await submitTransaction('GetStudent', studentId);
//     res.json({ student: JSON.parse(result) });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.get('/api/student/:studentId/verify-vc', async (req, res) => {
//   const { studentId } = req.params;
//   try {
//     const result = await submitTransaction('VerifyVC', studentId);
//     res.json({ verificationResult: JSON.parse(result) });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.get('/api/student/:studentId/verify-vc/:vcId', async (req, res) => {
//   const { studentId, vcId } = req.params;
//   try {
//     const result = await submitTransaction('VerifyVC', studentId, vcId);
//     res.json({ verificationResult: JSON.parse(result) });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// // Student submits GATE VC
// app.post('/api/student/submit-vc', async (req, res) => {
//   const { studentId, vcData } = req.body;
//   try {
//     const result = await submitTransaction('SubmitVC', studentId, JSON.stringify(vcData));
//     res.json({ message: 'VC Submitted to Ledger', result });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Student sets college preferences
// app.post('/api/student/preferences', async (req, res) => {
//   const { studentId, preferences } = req.body;
//   try {
//     const result = await submitTransaction('SetPreferences', studentId, JSON.stringify(preferences));
//     res.json({ message: 'Preferences Recorded', result });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // College issues GATE credential via ACA-Py
// app.post('/api/college/issue-gate-vc', async (req, res) => {
//   const { studentId, gateScore } = req.body;
//   try {
//     const result = await acaClient.issueCredential(studentId, gateScore);
//     res.json({ message: 'VC Issued', result });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // College submits seat matrix
// app.post('/api/college/submit-seats', async (req, res) => {
//   const { collegeId, seatMatrix } = req.body;
//   console.log(collegeId, seatMatrix);
//   try {
//     const result = await submitTransaction('SubmitSeats', collegeId, JSON.stringify(seatMatrix));
//     res.json({ message: 'Seat Matrix Submitted', result });
//   } catch (err) {
//     console.error("❌ Error in submitTransaction(SubmitSeats):", err);
//     if (err.errors && err.errors.length) {
//       err.errors.forEach(e => console.error('-> Peer error:', e));
//     }
//     res.status(500).json({ error: err.message });
//   }
// });


// // Execute seat allotment
// app.post('/api/admin/execute-allotment', async (req, res) => {
//   try {
//     const result = await submitTransaction('ExecuteAllotment');
//     res.json({ message: 'Allotment Executed', result });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => console.log(`DeSAT Server running on port ${PORT}`));

import multer from 'multer';
import fs from 'fs';
import path from 'path';
import Student from './models/student.js'; // MongoDB model
import  generateDID  from './utils/didUtil.js'; // Custom DID gen
// import acaClient from './aca-py-client.js'; // ACA-Py VC issuer

const upload = multer({ dest: 'uploads/' });

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import { initGateway, submitTransaction } from './fabric-gateway/desat.contract.js';
import acaClient from './aca-py-client.js';

import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';
import collegeRoutes from './routes/college.routes.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(express.json());

// ✅ Connect to MongoDB before anything else
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/desat', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
})
.then(() => {
  console.log('✅ MongoDB connected');

  // ✅ Initialize Fabric Gateway
  initGateway();

  // ✅ Register routes only after successful DB connection
  app.use('/api/auth', authRoutes);
  app.use('/api/admin', adminRoutes);
  app.use('/api/college', collegeRoutes);

  const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
  });
  const upload = multer({ storage });

  // --- Routes ---
  app.get('/api/student/:studentId', async (req, res) => {
    try {
      const result = await submitTransaction('GetStudent', req.params.studentId);
      res.json({ student: JSON.parse(result) });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post('/api/student/submit', upload.fields([
    { name: 'gateScorecard' }, { name: 'markSheets' }, { name: 'categoryCert' }
  ]), async (req, res) => {
    try {
      const formData = JSON.parse(req.body.formData);
      const { name, email, gateScore } = formData;
  
      const { gateScorecard, markSheets, categoryCert } = req.files;
      console.log(req.files);
  
      const gateDocPath = gateScorecard?.[0]?.path;
      const markSheetPath = markSheets?.[0]?.path;
      const categoryCertPath = categoryCert?.[0]?.path;
  
      if (!gateDocPath) {
        return res.status(400).json({ error: "Missing GATE scorecard for DID generation" });
      }
  
      // 🔥 Call ACA-Py Client to issue VC and generate DID
      const { did, vc } = await acaClient.issueCredentialWithDID({
        name,
        email,
        gateScore,
        documentUrl: gateDocPath  // assuming you mean to use this as `documentUrl`
      });
  
      const studentRecord = new Student({
        studentId: did,
        data: formData,
        documents: {
          gateScorecard: gateDocPath,
          markSheets: markSheetPath,
          categoryCert: categoryCertPath
        }
      });
  
      await studentRecord.save();
  
      const vcPayload = { did, ...formData };
      const issuedVC = await acaClient.issueCredential(did, vcPayload);
  
      const result = await submitTransaction('SubmitVC', did, JSON.stringify(issuedVC));
  
      res.json({ message: 'VC issued and submitted to blockchain', did, result });
  
    } catch (err) {
      console.error('❌ Student submission error:', err);
      res.status(500).json({ error: err.message });
    }
  });
  
  app.get('/api/student/:studentId/verify-vc', async (req, res) => {
    try {
      const result = await submitTransaction('VerifyVC', req.params.studentId);
      res.json({ verificationResult: JSON.parse(result) });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get('/api/student/:studentId/verify-vc/:vcId', async (req, res) => {
    try {
      const result = await submitTransaction('VerifyVC', req.params.studentId, req.params.vcId);
      res.json({ verificationResult: JSON.parse(result) });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post('/api/student/submit-vc', async (req, res) => {
    const { studentId, vcData } = req.body;
    try {
      const result = await submitTransaction('SubmitVC', studentId, JSON.stringify(vcData));
      res.json({ message: 'VC Submitted to Ledger', result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post('/api/student/preferences', async (req, res) => {
    const { studentId, preferences } = req.body;
    try {
      const result = await submitTransaction('SetPreferences', studentId, JSON.stringify(preferences));
      res.json({ message: 'Preferences Recorded', result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post('/api/college/issue-gate-vc', async (req, res) => {
    const { studentId, gateScore } = req.body;
    try {
      const result = await acaClient.issueCredential(studentId, gateScore);
      res.json({ message: 'VC Issued', result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.post('/api/college/submit-seats', async (req, res) => {
    const { collegeId, seatMatrix } = req.body;
    console.log(collegeId, seatMatrix);
    try {
      const result = await submitTransaction('SubmitSeats', collegeId, JSON.stringify(seatMatrix));
      res.json({ message: 'Seat Matrix Submitted', result });
    } catch (err) {
      console.error("❌ Error in submitTransaction(SubmitSeats):", err);
      if (err.errors && err.errors.length) {
        err.errors.forEach(e => console.error('-> Peer error:', e));
      }
      res.status(500).json({ error: err.message });
    }
  });

  app.post('/api/admin/execute-allotment', async (req, res) => {
    try {
      const result = await submitTransaction('ExecuteAllotment');
      res.json({ message: 'Allotment Executed', result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  app.get('/', (req, res) => res.send('Hello World'));

  // ✅ Start the server after all initializations
  app.listen(PORT, () => console.log(`🚀 DeSAT Server running on port ${PORT}`));
})
.catch((err) => {
  console.error('❌ Failed to connect to MongoDB:', err.message);
});
