import React from 'react'
import { TbWorld } from "react-icons/tb";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


function Footer() {
  return (
    <>
    <div className='flex justify-around items-center xs:flex-col xs:gap-5 lg:flex-row lg:gap-0 mr-10 bg-gray-100 w-full p-5'>
      <span className='flex gap-3 flex-col'>
        <p className='font-bold'>Support</p><br />
        <p>Help Center</p>
        <p>Flow Cover</p>
        <p>Anti-discrimination</p>
        <p>Disability Support</p>
        <p>Cancellation options</p>
        <p>Report neighborhood concern</p>
    </span>

    <span className='flex gap-3 flex-col'>
        <p className='font-bold'>Quick Links</p><br />
        <p>Help Center</p>
        <p>Flow Cover</p>
        <p>Anti-discrimination</p>
        <p>Disability Support</p>
        <p>Cancellation options</p>
        <p>Report neighborhood concern</p>
    </span>

    <span className='flex gap-3 flex-col'>
        <p className='font-bold'>Contacts</p><br />
        <p>Help Center</p>
        <p>Flow Cover</p>
        <p>info@flow.com</p>
        <p>chizupraie31@gmail.com</p>
        <p>+234 558 9933 43</p>
        <p>Report neighborhood concern</p>
    </span>

    </div><hr className='m-8'/>
    <div className='flex justify-between items-center mx-10 my-5 xs:flex-col xs:gap-8 lg:gap-0 lg:flex-row'>
        <div className='flex jusstify-around items-center gap-3 xs:flex-col lg:flex-row'>
        <p>&copy; copyright 2024 Flow,inc.</p>
        <p> Terms.</p>
        <p> Sitemap.</p>
        <p>Privacy.</p>
        <p> Your Privacy Choices.</p>
        </div>

        <div className='flex jusstify-around items-center gap-3 xs:flex-col lg:flex-row'>
            <p><TbWorld /></p>
            <p>English(US)</p>
            <p>$ USD</p>
            <p><IoLogoFacebook /></p>
            <p><FaSquareTwitter /></p>
            <p><FaInstagramSquare /></p>
        </div>
    </div>
    </>
  )
}

export default Footer
