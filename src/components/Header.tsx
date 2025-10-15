import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm p-4 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center">
        <img
          src="https://s3.amazonaws.com/producao.spayce.com.br/1757606840194_fastdeal_logo_iso.png"
          alt="Fastdeal Logo"
          className="h-8 mr-3"
        />
        <h1 className="text-xl font-bold text-gray-800">Fastdeal Onboarding</h1>
      </div>
    </header>
  );
};

export default Header;