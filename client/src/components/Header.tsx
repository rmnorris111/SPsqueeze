import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Simply Probate</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
