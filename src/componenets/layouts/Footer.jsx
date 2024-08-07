import React from 'react'
import { FaHeart } from 'react-icons/fa'

function Footer() {
    const footerYear=new Date().getFullYear()
  return (
   <footer className='footer p-10 bg-gray-700 text-primarty-content footer-center'>
     <p className='text-lg text-white'>Made by Trupti Devakar </p><FaHeart/>
    <p className='text-white'>Copyright &copy;{footerYear} All rights reserved</p>

   </footer>
  )
}

export default Footer