import React, { useState } from 'react';
import axios from '../api/api';

const VCUpload = () => {
  const [vc, setVc] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('/student/upload-vc', { vc });
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    }
  };

  return (
    <div className="mb-4">
      <textarea
        value={vc}
        onChange={(e) => setVc(e.target.value)}
        placeholder="Paste VC JSON"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button onClick={handleSubmit} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Upload VC
      </button>
    </div>
  );
};

export default VCUpload;
