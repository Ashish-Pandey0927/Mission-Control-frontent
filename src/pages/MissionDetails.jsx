import React from "react";

const getRandomIndiaLocation = () => {
  // Random lat/lng within approximate bounding box of India
  const minLat = 8.4, maxLat = 37.6;
  const minLng = 68.7, maxLng = 97.25;
  const lat = (Math.random() * (maxLat - minLat) + minLat).toFixed(5);
  const lng = (Math.random() * (maxLng - minLng) + minLng).toFixed(5);
  return `${lat},${lng}`;
};

const MissionDetails = ({ mission }) => {
  const randomLocation = getRandomIndiaLocation();

  return (
    <div className="relative h-[90vh] w-full overflow-hidden rounded-xl">
      {/* Frame Image on Top */}
      <img
        src="/Frame2.png"
        alt="Frame"
        className="absolute inset-0 w-full h-full object-fill pointer-events-none z-10"
        style={{ borderRadius: "1rem" }}
      />

      {/* Actual Content Below the Frame */}
      <div
        className="relative z-0 p-4 bg-[#1a0c2e] h-full overflow-hidden"
        style={{ padding: "4rem 10rem", borderRadius: "1rem" }}
      >
        <h2 className="text-[1.5rem] font-bold text-center text-orange-300 mb-2">
          INDIVIDUAL MISSION DETAILS
        </h2>
        <div className="text-white text-[1.5rem] text-center mb-2">
          <strong>{mission.name}</strong>
          <br />
          {mission.details}
        </div>
        <div className="mb-4 text-orange-400 text-center">
          STATUS: {mission.status}
          <br />
          <span className="text-[3rem] font-mono" style={{ fontFamily: "Digital" }}>
            {mission.time}
          </span>
        </div>
        <div>
          <div className="relative rounded-xl overflow-hidden mb-4">
            <iframe
              title="Random Map of India"
              width="100%"
              height="250"
              style={{ border: "2px solid #0f0820", borderRadius: "1rem" }}
              loading="lazy"
              allowFullScreen
              src={`https://maps.google.com/maps?q=${randomLocation}&z=6&output=embed`}
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                backgroundColor: "#1a0c2e",
                opacity: 0.6,
                mixBlendMode: "multiply",
              }}
            ></div>
          </div>
          <h3 className="text-yellow-300 font-semibold mb-2 text-center text-[1.5rem]">
            ERROR LOGS
          </h3>
          <ul className="pl-4 text-sm text-center list-none">
            {mission.logs.length > 0 ? (
              mission.logs.map((log, index) => <li key={index}>{log}</li>)
            ) : (
              <li>No logs</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MissionDetails;
