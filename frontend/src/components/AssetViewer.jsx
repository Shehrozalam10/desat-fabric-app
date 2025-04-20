import { useState } from 'react';
import axios from 'axios';

export default function AssetViewer() {
  const [assetId, setAssetId] = useState('');
  const [asset, setAsset] = useState(null);

  const getAsset = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/asset/${assetId}`);
      setAsset(res.data.asset);
    } catch (err) {
      console.error(err);
      alert('Asset not found!');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Query Asset</h2>
      <input
        type="text"
        placeholder="Asset ID"
        value={assetId}
        onChange={(e) => setAssetId(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={getAsset} className="bg-blue-500 text-white px-4 py-2">Query</button>
      {asset && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
          <pre>{JSON.stringify(asset, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
