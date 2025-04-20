import fs from 'fs';
import path from 'path';
import { connect, signers } from '@hyperledger/fabric-gateway';

const mspId = 'Org1MSP';

const cert = fs.readFileSync('./identity/cert.pem');
const key = fs.readFileSync('./identity/key.pem');
const tlsCert = fs.readFileSync('./identity/tls-ca-cert.pem');

const peerEndpoint = 'localhost:7051';

export async function createGateway() {
  const identity = { mspId, credentials: cert };
  const signer = signers.newPrivateKeySigner(key);

  const gateway = connect({
    identity,
    signer,
    client: {
      tlsRootCerts: tlsCert,
      url: `grpcs://${peerEndpoint}`
    }
  });

  return gateway;
}
