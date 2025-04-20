import { createGateway } from './connect.js';

const channelName = 'mychannel';
const chaincodeName = 'basic';

export async function readAsset(assetId) {
  const gateway = await createGateway();
  const network = await gateway.getNetwork(channelName);
  const contract = network.getContract(chaincodeName);

  const result = await contract.evaluateTransaction('ReadAsset', assetId);
  gateway.close();
  return result.toString();
}

export async function createAsset(assetId, color, size, owner, value) {
  const gateway = await createGateway();
  const network = await gateway.getNetwork(channelName);
  const contract = network.getContract(chaincodeName);

  await contract.submitTransaction('CreateAsset', assetId, color, size, owner, value);
  gateway.close();
  return { message: 'Asset created' };
}
