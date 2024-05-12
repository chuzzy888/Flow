import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import f1 from '../assets/images/f1.jpg'
import f2 from '../assets/images/f2.jpg'
import f3 from '../assets/images/f3.jpg'
import Footer from '../components/Footer';

function Homepage() {
  const [isRent, setIsRent] = useState(true);

  const handleToggle = (rent) => {
    setIsRent(rent);
  };

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='homepage-background h-96 w-full lg:m-8 md:m-2 xs:m-2 rounded-2xl relative animate__animated animate__fadeIn'>
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className='text-white text-2xl font-black'>Find your perfect home</h1>
            <p className="text-white mt-4">Discover the best home to {isRent ? 'rent' : 'buy'}, from luxury apartment to spacious family homes.</p>
            <div className='flex justify-center items-center bg-white md:w-72 xs:w-64 p-2 mt-4 relative'>
              <CiSearch className='text-xl text-green-900 mr-5' />
              <input type="text" placeholder='Search address, city or Zip code' className='outline-none md:mr-8 ' />
              <button className='p-1 px-2 home-button rounded-lg xs:text-xs md:text-sm font-medium ml-2 hover:bg-gray-500 hover:text-white absolute right-2'>Search</button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-around items-center bg-gray-200 mx-10 p-2 rounded-xl'>
        <span className={`w-1/2 flex justify-center items-center rounded-xl p-1 ${isRent ? 'bg-white' : ''}`}>
          <button onClick={() => handleToggle(true)}  className='border border-gray-600 rounded px-2'>To Rent</button>
        </span>
        <span className={`w-1/2 flex justify-center items-center p-1 rounded-xl ${!isRent ? 'bg-white' : ''}`}>
          <button onClick={() => handleToggle(false)} className='border border-gray-500 rounded px-2'>To Buy</button>
        </span>
      </div>
      <p className='ml-10 font-bold m-5'>Featured for you</p><hr className='m-8' />
      <div className='flex justify-around items-center flex-wrap xs:gap-5 lg:gap-0 xs:m-5 md:m-0'>
        <div>
          <img src={f3} alt="" className='w-80 rounded-xl'/>
          <p>Luxury 2 bed flat, The park</p>
          <p className='text-gray-500'>$1,800 per month</p>
        </div>

        <div>
          <img src={f2} alt="" className='w-80 rounded-xl'/>
          <p>Luxury 2 bed flat, The park</p>
          <p  className='text-gray-500'>$1,800 per month</p>
        </div>

        <div>
          <img src={f1} alt="" className='w-80 rounded-xl'/>
          <p>Luxury 2 bed flat, The park</p>
          <p className='text-gray-500'>$1,800 per month</p>
        </div>
     </div>
     <p className='ml-10 font-bold m-5'>Popular Searches</p><hr className='m-8' />
     <div className='flex items-center flex-wrap lg:mx-20 gap-5 md:m-8 xs:m-5'>
      <span className='bg-gray-100 p-2 rounded-3xl flex justify-center items-center'>New York</span>
      <span className='bg-gray-100 p-2 rounded-3xl flex justify-center items-center'>Los Angelos</span>
      <span className='bg-gray-100 p-2 rounded-3xl flex justify-center items-center'>San Francisco</span>
      <span className='bg-gray-100 p-2 rounded-3xl flex justify-center items-center'>Chicago</span>
      <span className='bg-gray-100 p-2 rounded-3xl flex justify-center items-center'>Miami</span>
      <span className='bg-gray-100 p-2 rounded-3xl flex justify-center items-center'>Austin</span>
     </div><hr className='m-8' />
     <Footer/>
    </>
  );
}

export default Homepage;
