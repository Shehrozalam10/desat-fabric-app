// // // // // backend/fabric-gateway/desat.contract.js

// // // // const path = require('path');
// // // // const fs = require('fs');
// // // // // const { Gateway, Wallets } = require('fabric-network');
// // // // const { connect, Gateway } = require('@hyperledger/fabric-gateway');
// // // // const { Wallets } = require('@hyperledger/fabric-wallet');

// // // // let gateway;
// // // // let contract;

// // // // async function initGateway() {
// // // //   try {
// // // //     const ccpPath = path.resolve(__dirname, 'connection-profile.json');
// // // //     const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

// // // //     const walletPath = path.join(__dirname, 'wallet');
// // // //     const wallet = await Wallets.newFileSystemWallet(walletPath);

// // // //     const identity = await wallet.get('appUser');
// // // //     if (!identity) {
// // // //       console.error('Identity for appUser not found in wallet');
// // // //       return;
// // // //     }

// // // //     gateway = new Gateway();
// // // //     await gateway.connect(ccp, {
// // // //       wallet,
// // // //       identity: 'appUser',
// // // //       discovery: { enabled: true, asLocalhost: true }
// // // //     });

// // // //     const network = await gateway.getNetwork('mychannel');
// // // //     contract = network.getContract('desat-contract');

// // // //     console.log('✅ Fabric Gateway initialized and contract loaded');
// // // //   } catch (error) {
// // // //     console.error(`❌ Failed to connect to Fabric Gateway: ${error}`);
// // // //   }
// // // // }

// // // // async function submitTransaction(functionName, ...args) {
// // // //   try {
// // // //     const result = await contract.submitTransaction(functionName, ...args);
// // // //     return result.toString();
// // // //   } catch (err) {
// // // //     console.error(`❌ Error in submitTransaction(${functionName}):`, err);
// // // //     throw err;
// // // //   }
// // // // }

// // // // module.exports = {
// // // //   initGateway,
// // // //   submitTransaction
// // // // };


// // // // desat.contract.js

// // // const { connect, Gateway, Identity, signers } = require('@hyperledger/fabric-gateway');
// // // const fs = require('fs');
// // // const path = require('path');
// // // const crypto = require('crypto');

// // // // Load connection profile
// // // const ccpPath = path.resolve(__dirname, 'connection-profile.json');
// // // const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

// // // // Load identity from wallet (X.509 format)
// // // function newIdentity() {
// // //   const certPath = path.join(__dirname, 'wallet', 'admin.id.json');
// // //   const idJson = JSON.parse(fs.readFileSync(certPath, 'utf8'));
// // //   return {
// // //     mspId: idJson.mspId,
// // //     credentials: idJson.credentials,
// // //   };
// // // }

// // // // Load signer from private key
// // // function newSigner() {
// // //   const idJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'wallet', 'admin.id.json'), 'utf8'));
// // //   const privateKeyPem = idJson.credentials.privateKey;
// // //   const privateKey = crypto.createPrivateKey(privateKeyPem);
// // //   return signers.newPrivateKeySigner(privateKey);
// // // }

// // // async function connectGateway() {
// // //   const identity = newIdentity();
// // //   const signer = newSigner();

// // //   const gateway = await connect({
// // //     identity: {
// // //       mspId: identity.mspId,
// // //       credentials: {
// // //         certificate: identity.credentials.certificate,
// // //       },
// // //     },
// // //     signer,
// // //     connection: {
// // //       client: {
// // //         tls: true,
// // //         url: 'grpc://localhost:7051', // match your peer settings
// // //       },
// // //       tls: {
// // //         caCertificates: [fs.readFileSync(path.join(__dirname, 'tls', 'ca.crt'))],
// // //       },
// // //     },
// // //   });

// // //   const network = await gateway.getNetwork('mychannel');
// // //   const contract = network.getContract('desat-contract');

// // //   return contract;
// // // }

// // // module.exports = { connectGateway };


// // // desat.contract.js
// // const { connect, Gateway, signers } = require('@hyperledger/fabric-gateway');
// // const fs = require('fs');
// // const path = require('path');
// // const crypto = require('crypto');

// // let contract;

// // async function initGateway() {
// //   const ccpPath = path.resolve(__dirname, 'connection-profile.json');
// //   const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

// //   const identityData = JSON.parse(fs.readFileSync(path.join(__dirname, 'wallet', 'admin.id.json'), 'utf8'));
// //   const privateKeyPem = identityData.credentials.privateKey;
// //   const privateKey = crypto.createPrivateKey(privateKeyPem);
// //   const signer = signers.newPrivateKeySigner(privateKey);

// //   const gateway = await connect({
// //     identity: {
// //       mspId: identityData.mspId,
// //       credentials: {
// //         certificate: identityData.credentials.certificate,
// //       },
// //     },
// //     signer,
// //     connection: {
// //       client: {
// //         tls: false,
// //         url: 'grpc://localhost:7051', // Adjust to match your peer settings
// //       },
// //     },
// //   });

// //   const network = await gateway.getNetwork('mychannel');
// //   contract = network.getContract('desat-contract');
// // }

// // function getContract() {
// //   if (!contract) throw new Error('Contract not initialized. Call initGateway() first.');
// //   return contract;
// // }

// // module.exports = {
// //   initGateway,
// //   getContract,
// // };


// import { Gateway, Wallets } from 'fabric-network';
// import fs from 'fs';
// import path from 'path';

// // import {crypto} from 'crypto';
// let contract;

// async function initGateway() {
//   const ccpPath = path.resolve(__dirname, 'connection-profile.json');
//   // const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
//   const ccp = JSON.parse(fs.readFileSync('fabric-network/connection-org1.json', 'utf8'));


//   const walletPath = '/home/student/shehroz/blockchain/nn/desat-fabric-app/backend/wallet';
//   const wallet = await Wallets.newFileSystemWallet(walletPath);

//   const identity = await wallet.get('admin');
//   if (!identity) {
//     throw new Error('❌ Admin identity not found in wallet');
//   }

//   const gateway = new Gateway();
//   await gateway.connect(ccp, {
//     wallet,
//     identity: 'admin',
//     discovery: { enabled: false, asLocalhost: true },
//   });

//   const network = await gateway.getNetwork('mychannel');
//   contract = network.getContract('desat-contract');
//   console.log('✅ Gateway connected, contract loaded');
// }

// function getContract() {
//   if (!contract) throw new Error('Contract not initialized. Call initGateway() first.');
//   return contract;
// }

// export { initGateway, getContract };


// import { Gateway, Wallets } from 'fabric-network';
// import path from 'path';
// import fs from 'fs';
// import { fileURLToPath } from 'url';

// let contract;

// // __dirname workaround for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// async function initGateway() {
//   const ccpPath = path.resolve(__dirname, 'connection-profile.json');
//   const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

//   const walletPath = path.join(__dirname, '../wallet');
//   const wallet = await Wallets.newFileSystemWallet(walletPath);

//   const identity = await wallet.get('admin');
//   if (!identity) {
//     throw new Error('❌ Admin identity not found in wallet');
//   }

//   const gateway = new Gateway();
//   await gateway.connect(ccp, {
//     wallet,
//     identity: 'admin',
//     discovery: { enabled: false, asLocalhost: true },
//   });

//   const network = await gateway.getNetwork('mychannel');
//   contract = network.getContract('desat-contract');

//   console.log('✅ Gateway connected, contract loaded');
// }

// function getContract() {
//   if (!contract) throw new Error('Contract not initialized. Call initGateway() first.');
//   return contract;
// }

// async function submitTransaction(functionName, ...args) {
//   if (!contract) throw new Error('Contract not initialized. Call initGateway() first.');
//   try {
//     const result = await contract.submitTransaction(functionName, ...args);
//     console.log(`📤 Transaction ${functionName} submitted with args:`, args);
//     return result.toString();
//   } catch (err) {
//     console.error(`❌ Error in submitTransaction(${functionName}):`, err);
//     throw err;
//   }
// }

// export { initGateway, getContract, submitTransaction };


import { Gateway, Wallets } from 'fabric-network';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

let contract;

// 🔁 __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🧠 Initialize the Gateway connection to Fabric
async function initGateway() {
  try {
    const ccpPath = path.resolve(__dirname, 'connection-profile.json');
    const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

    const walletPath = path.join(__dirname, '../wallet');
    const wallet = await Wallets.newFileSystemWallet(walletPath);

    const identity = await wallet.get('admin');
    if (!identity) {
      throw new Error('❌ Admin identity not found in wallet. Run enrollment first.');
    }

    const gateway = new Gateway();
    await gateway.connect(ccp, {
      wallet,
      identity: 'admin',
      discovery: {
        enabled: false,   // ⚠️ discovery disabled for non-TLS
        asLocalhost: true,
      },
    });

    const network = await gateway.getNetwork('mychannel');
    contract = network.getContract('desat-contract');

    console.log('✅ Gateway connected, contract loaded');
  } catch (err) {
    console.error('❌ Error connecting to Fabric gateway:', err.message);
    throw err;
  }
}

// 📦 Get Fabric Contract
function getContract() {
  if (!contract) throw new Error('⚠️ Contract not initialized. Call initGateway() first.');
  return contract;
}

// 📤 Submit transaction to Fabric
async function submitTransaction(functionName, ...args) {
  if (!contract) throw new Error('⚠️ Contract not initialized. Call initGateway() first.');
  try {
    const result = await contract.submitTransaction(functionName, ...args);
    console.log(`📤 Transaction ${functionName} submitted with args:`, args);
    return result.toString();
  } catch (err) {
    console.error(`❌ Error in submitTransaction(${functionName}):`, err.message);
    throw err;
  }
}

// 📩 Evaluate query (read-only)
async function evaluateTransaction(functionName, ...args) {
  if (!contract) throw new Error('⚠️ Contract not initialized. Call initGateway() first.');
  try {
    const result = await contract.evaluateTransaction(functionName, ...args);
    console.log(`🔎 Query ${functionName} evaluated with args:`, args);
    return result.toString();
  } catch (err) {
    console.error(`❌ Error in evaluateTransaction(${functionName}):`, err.message);
    throw err;
  }
}

export { initGateway, getContract, submitTransaction, evaluateTransaction };
