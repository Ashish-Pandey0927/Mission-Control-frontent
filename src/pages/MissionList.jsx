import React from 'react';

const MissionList = ({ missions, onView }) => {
  return (
    <div className="border-2 border-orange-400 p-4 text-center rounded-xl bg-[#1a0c2e]" style={{ padding: '1rem' }}>
      <h2 className="text-[2rem] font-bold text-orange-300 mb-2" style={{ marginBottom: '0.5rem' }}>MISSION LIST</h2>
      <table className="w-full text-center text-[1.2rem]">
        <thead>
          <tr className="text-yellow-300">
            <th>Mission</th>
            <th>Status</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id} className="text-white border-t border-purple-500">
              <td>{mission.name}</td>
              <td>
                <span className={`px-2 py-1 rounded-full text-xs ${mission.status === 'ACTIVE' ? 'bg-green-600' : 'bg-blue-600'}`} style={{ padding: '0.25rem 0.5rem' }}>
                  {mission.status}
                </span>
              </td>
              <td>
                <button
                  onClick={() => onView(mission.id)}
                  className="bg-red-600 text-yellow-100 px-3 py-1 rounded hover:bg-red-500"
                  style={{ padding: '0.25rem 0.75rem' }}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionList;
