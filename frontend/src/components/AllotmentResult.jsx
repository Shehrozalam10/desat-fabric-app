import React, { useState } from 'react';
import axios from '../api/api';

const AllotmentResult = () => {
  const [result, setResult] = useState(null);

  const handleGetResult = async () => {
    try {
      const res = await axios.get('/student/result');
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert('Error fetching result');
    }
  };

  return (
    <div>
      <button onClick={handleGetResult} className="px-4 py-2 bg-purple-500 text-white rounded">
        Get Allotment Result
      </button>
      {result && <pre className="mt-4 p-2 bg-gray-100">{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
};

export default AllotmentResult;
