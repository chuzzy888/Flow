import React from 'react';
import './Upload.css'
import { RiCameraFill } from "react-icons/ri";

const FileUpload = () => {
  
  return (
    <div className='main'>

      <div className='sub-main rounded-md shadow-md border-white'>
      <input
        type="file"
        style={{ display: 'none' }}
        accept="image/*"
      />

      
      <button
       
        onClick={() => document.querySelector('input[type="file"]').click()}
      >
        <span className='icon' ><RiCameraFill /></span> 
      </button>
      <p>Click to change picture</p>
      </div>



      
    
    </div>
  );
};

export default FileUpload;
 
