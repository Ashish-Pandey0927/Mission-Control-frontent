import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full" style={{ padding: '1rem 1rem', paddingLeft: '3rem', paddingRight: '3rem' }}>
      <div
        className="flex justify-between items-center gap-4 bg-transparent shadow-md border-2 border-blue-500"
        style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem' }}
      >
        <h1 className="text-xl sm:text-2xl font-extrabold text-orange-400 tracking-wide">
          🚀 MISSION CONTROL
        </h1>

        <div className="flex gap-4">
          {/* Login Button */}
          <a
            href="#"
            className="bg-red-500 text-yellow-200 hover:text-gray-800 border-2 border-orange-400 rounded-xl font-semibold transition-all duration-200"
            style={{ padding: '0.5rem 2rem' }}
          >
            Login
          </a>

          {/* Logout (hidden by default, placeholder) */}
          <a
            href="#"
            className="text-gray-600 hover:text-red-600 font-medium transition-all duration-200 hidden sm:block"
            style={{ padding: '0.5rem 1rem', display: 'none' }}
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
