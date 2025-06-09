import React, { useState } from 'react';

const AddMissionForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('ACTIVE');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    onAdd({ name, status, details: 'No details yet', logs: [], time: '00:00:00' });
    setName('');
    setStatus('ACTIVE');
  };

  return (
    <div className="border-2 border-yellow-400 p-4 rounded-xl bg-[#1a0c2e]" style={{ padding: '1rem' }}>
      <h2 className="text-xl font-bold text-orange-400 mb-4" style={{marginBottom: '1rem'}}>+ ADD MISSION</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Mission Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-transparent border border-purple-500 p-2 rounded text-white"
            style={{ padding: '0.5rem' }}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="bg-transparent border border-purple-500 p-2 rounded text-white" style={{ padding: '0.5rem' }}>
          <option value="ACTIVE">ACTIVE</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>
        <button type="submit" className="bg-red-600 hover:bg-red-500 text-yellow-200 p-2 rounded-xl font-bold" style={{ padding: '2rem'}}>ADD</button>
      </form>
    </div>
  );
};

export default AddMissionForm;
