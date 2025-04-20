// registerUser.js
'use strict';

const FabricCAServices = require('fabric-ca-client');
const { Wallets } = require('fabric-network');
const fs = require('fs');
const path = require('path');

async function main() {
  try {
    // const ccpPath = path.resolve(__dirname, 'fabric-network', 'connection-org1.json');
    const ccpPath = '/home/student/fabric-samples/test-network/organizations/peerOrganizations/org1.example.com/connection-org1.json';

    const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

    const caInfo = ccp.certificateAuthorities['ca.org1.example.com'];
    const caTLSCACerts = caInfo.tlsCACerts.pem;
    const ca = new FabricCAServices(caInfo.url, { trustedRoots: caTLSCACerts, verify: false }, caInfo.caName);

    // const walletPath = path.join(__dirname, 'wallet');
    const walletPath = '/home/student/shehroz/blockchain/nn/desat-fabric-app/backend/wallet';

    const wallet = await Wallets.newFileSystemWallet(walletPath);

    // Check if user is already enrolled
    const userIdentity = await wallet.get('appUser');
    if (userIdentity) {
      console.log('✅ User "appUser" already exists in the wallet');
      return;
    }

    // Check if admin exists
    const adminIdentity = await wallet.get('admin');
    if (!adminIdentity) {
      console.log('❌ Admin identity not found in the wallet. Run enrollAdmin.js first.');
      return;
    }

    // Build a user object for authenticating with the CA
    const provider = wallet.getProviderRegistry().getProvider(adminIdentity.type);
    const adminUser = await provider.getUserContext(adminIdentity, 'admin');

    // Register and enroll user
    const secret = await ca.register({
      affiliation: 'org1.department1',
      enrollmentID: 'appUser',
      role: 'client',
    }, adminUser);

    const enrollment = await ca.enroll({
      enrollmentID: 'appUser',
      enrollmentSecret: secret,
    });

    const x509Identity = {
      credentials: {
        certificate: enrollment.certificate,
        privateKey: enrollment.key.toBytes(),
      },
      mspId: 'Org1MSP',
      type: 'X.509',
    };

    await wallet.put('appUser', x509Identity);
    console.log('✅ Successfully registered and enrolled user "appUser"');

  } catch (error) {
    console.error(`❌ Failed to register user "appUser": ${error}`);
    process.exit(1);
  }
}

main();
