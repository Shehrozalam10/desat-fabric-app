// backend/utils/didHelper.mjs
import { Ed25519VerificationKey2020 } from '@digitalbazaar/ed25519-verification-key-2020';

export default async function generateDID() {
  const keyPair = await Ed25519VerificationKey2020.generate();

  const did = `did:key:${keyPair.publicKeyMultibase}`;

  return {
    did,
    publicKey: keyPair.publicKeyMultibase,
    privateKey: keyPair.privateKeyMultibase,
  };
}
