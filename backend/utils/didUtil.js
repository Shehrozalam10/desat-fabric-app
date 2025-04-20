// // backend/utils/didUtil.js

// const generateDID = async () => {
//     // Mock DID generation (you can replace with actual logic)
//     return `did:example:${Math.random().toString(36).substring(2, 10)}`;
//   };
  
//   export default generateDID;
  
import fs from 'fs';
import crypto from 'crypto';

export default function generateDID(filePath) {
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(filePath);
    const hash = crypto.createHash('sha256');

    stream.on('data', (data) => hash.update(data));
    stream.on('end', () => {
      const did = 'did:desat:' + hash.digest('hex').slice(0, 16);
      resolve(did);
    });
    stream.on('error', reject);
  });
}
