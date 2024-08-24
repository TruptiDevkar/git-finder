import React from 'react'
import { FaHeart } from 'react-icons/fa'

function Footer() {
    const footerYear=new Date().getFullYear()
  return (
   <footer className='footer p-10   footer-center bg-primary'>
     <p className='text-lg '>Made by Trupti Devakar </p><FaHeart/>
    <p className=''>Copyright &copy;{footerYear} All rights reserved</p>

   </footer>
  )
}

export default Footer