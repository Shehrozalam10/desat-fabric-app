// // const axios = require('axios');

// // const ACA_PY_URL = 'http://localhost:8021';
// // const SCHEMA_ID = process.env.SCHEMA_ID || 'GATE2025:1.0.0';
// // const CRED_DEF_ID = process.env.CRED_DEF_ID || 'GATE2025_DEF_ID';

// // async function issueCredential(studentId, gateScore) {
// //   try {
// //     const connectionId = await getConnectionIdForStudent(studentId);

// //     const credentialOffer = {
// //       connection_id: connectionId,
// //       credential_preview: {
// //         '@type': 'https://didcomm.org/issue-credential/1.0/credential-preview',
// //         attributes: [
// //           { name: 'student_id', value: studentId },
// //           { name: 'gate_score', value: gateScore.toString() },
// //           { name: 'issued_by', value: 'DesatCollege01' }
// //         ]
// //       },
// //       auto_issue: true,
// //       auto_remove: true,
// //       comment: 'Issuing GATE score VC',
// //       schema_id: SCHEMA_ID,
// //       cred_def_id: CRED_DEF_ID
// //     };

// //     const response = await axios.post(`${ACA_PY_URL}/issue-credential/send`, credentialOffer);
// //     return response.data;
// //   } catch (err) {
// //     console.error('Error issuing credential:', err.message);
// //     throw err;
// //   }
// // }

// // async function getConnectionIdForStudent(studentId) {
// //   try {
// //     const connectionsRes = await axios.get(`${ACA_PY_URL}/connections`);
// //     const connections = connectionsRes.data.results;
// //     const connection = connections.find(c => c.their_label === studentId);
// //     if (!connection) throw new Error(`No connection found for student ${studentId}`);
// //     return connection.connection_id;
// //   } catch (err) {
// //     console.error('Error fetching connection:', err.message);
// //     throw err;
// //   }
// // }

// // module.exports = {
// //   issueCredential
// // };


// import axios from 'axios';

// const ACA_PY_URL = 'http://localhost:8021';
// const SCHEMA_ID = process.env.SCHEMA_ID || 'GATE2025:1.0.0';
// const CRED_DEF_ID = process.env.CRED_DEF_ID || 'GATE2025_DEF_ID';

// async function issueCredential(studentId, gateScore) {
//   try {
//     const connectionId = await getConnectionIdForStudent(studentId);

//     const credentialOffer = {
//       connection_id: connectionId,
//       credential_preview: {
//         '@type': 'https://didcomm.org/issue-credential/1.0/credential-preview',
//         attributes: [
//           { name: 'student_id', value: studentId },
//           { name: 'gate_score', value: gateScore.toString() },
//           { name: 'issued_by', value: 'DesatCollege01' }
//         ]
//       },
//       auto_issue: true,
//       auto_remove: true,
//       comment: 'Issuing GATE score VC',
//       schema_id: SCHEMA_ID,
//       cred_def_id: CRED_DEF_ID
//     };

//     const response = await axios.post(`${ACA_PY_URL}/issue-credential/send`, credentialOffer);
//     return response.data;
//   } catch (err) {
//     console.error('Error issuing credential:', err.message);
//     throw err;
//   }
// }

// async function getConnectionIdForStudent(studentId) {
//   try {
//     const connectionsRes = await axios.get(`${ACA_PY_URL}/connections`);
//     const connections = connectionsRes.data.results;
//     const connection = connections.find(c => c.their_label === studentId);
//     if (!connection) throw new Error(`No connection found for student ${studentId}`);
//     return connection.connection_id;
//   } catch (err) {
//     console.error('Error fetching connection:', err.message);
//     throw err;
//   }
// }

// // ✅ Export properly for ESM
// export default {
//   issueCredential
// };

import axios from 'axios';

// 🔐 Mock DID + VC issuance
async function issueCredentialWithDID({ name, email, gateScore, documentUrl }) {
  const did = 'did:example:' + Math.random().toString(36).substring(2);

  const vc = {
    '@context': ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential", "GATEScoreCredential"],
    issuer: did,
    issuanceDate: new Date().toISOString(),
    credentialSubject: {
      name,
      email,
      gateScore,
      documentUrl
    }
  };

  return { did, vc };
}

// 🧾 Separate VC issuance if DID already exists
async function issueCredential(did, payload) {
  const vc = {
    '@context': ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential", "GATEScoreCredential"],
    issuer: did,
    issuanceDate: new Date().toISOString(),
    credentialSubject: {
      id: did,
      ...payload
    }
  };

  return vc;
}

export default {
  issueCredentialWithDID,
  issueCredential
};
