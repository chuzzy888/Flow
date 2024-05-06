import React, { useState } from 'react';
import logo from '../assets/images/lg.png';
import { VscAccount } from "react-icons/vsc";
import { FiMenu, FiX } from "react-icons/fi";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='flex justify-between items-center mx-8'>
        <div><img src={logo} alt="" className='w-32' /></div>
        <div className='hidden lg:flex justify-center items-center gap-5 font-medium'>
          <p>Explore</p>
          <p>Offers</p>
          <p>Magazine</p>
          <p>Community</p>
          <button className='but'>List your Property</button>
          <button className='bg-gray-100 p-2 rounded-xl'><VscAccount /></button>
        </div>
        {/* Hamburger menu */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </div>
      <hr />
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-100 fixed left-0 top-0 w-64 h-96 bg-white z-10 overflow-y-auto animate__animated animate__bounce">
          <div className="flex flex-col items-center gap-4 mt-4">
            <p>Explore</p>
            <p>Offers</p>
            <p>Magazine</p>
            <p>Community</p>
            <button className='but'>List your Property</button>
            <button className='bg-gray-100 p-2 rounded-xl'><VscAccount /></button>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
