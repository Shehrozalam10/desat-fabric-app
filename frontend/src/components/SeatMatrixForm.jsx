import React, { useState } from 'react';
import axios from '../api/api';

const SeatMatrixForm = () => {
  const [seats, setSeats] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('/college/seat-matrix', { seats });
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert('Submission failed');
    }
  };

  return (
    <div className="mb-4">
      <input
        value={seats}
        onChange={(e) => setSeats(e.target.value)}
        placeholder="Enter number of seats"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button onClick={handleSubmit} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
        Submit Seat Matrix
      </button>
    </div>
  );
};

export default SeatMatrixForm;
