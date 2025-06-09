import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddMissionForm from './AddMissionForm';
import MissionList from './MissionList';
import MissionDetails from './MissionDetails';

const Dashboard = () => {
  const [missions, setMissions] = useState([
    {
      id: 1,
      name: 'Mission Alpha',
      status: 'ACTIVE',
      details: 'Surveying Sector 7',
      logs: ['[21:48] Thrusters ignited', '[21:52] Navigation failure'],
      time: '02:15:23',
    },
    {
      id: 2,
      name: 'Mission Beta',
      status: 'ACTIVE',
      details: 'Mapping Crater X',
      logs: [],
      time: '00:45:10',
    },
    {
      id: 3,
      name: 'Mission Gamma',
      status: 'COMPLETED',
      details: 'Deployed satellite',
      logs: [],
      time: '01:10:40',
    },
  ]);
  const [selectedMission, setSelectedMission] = useState(missions[0]);

  const navigate = useNavigate();

  const handleAddMission = (newMission) => {
    setMissions([...missions, { ...newMission, id: Date.now() }]);
  };

  const handleViewMission = (id) => {
    const mission = missions.find((m) => m.id === id);
    setSelectedMission(mission);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#0f0820] text-white font-mono px-4 py-6"
        style={{ padding: '1rem' }}
    >
      {/* Topbar */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-6"
          style={{ marginBottom: '1.5rem' }}>
        <h1 className="text-yellow-300 text-2xl font-bold mb-2 sm:mb-0">Welcome, Admin 👋</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-xl font-semibold"
          style={{ padding: '0.5rem 1rem' }}
        >
          Logout
        </button>
      </div>

      {/* 50-50 layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left column: AddMissionForm + MissionList */}
        <div className="flex flex-col gap-6">
          <AddMissionForm onAdd={handleAddMission} />
          <MissionList missions={missions} onView={handleViewMission} />
        </div>

        {/* Right column: MissionDetails */}
        <div>
          {selectedMission && <MissionDetails mission={selectedMission} />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
