import React from 'react';
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

function Navbar({title}) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-primary  '>
        <div className="container mx-auto"> 
            <div className="flex-none px-2 mx-2">
                <FaGithub className='inline pr-2 text-3xl text-neutral '/>
                <a  href='/' className='text-lg font-bold align-middle  text-neutral'> {title}</a>
            </div>

            <div className="flex-1 px-2 mx-2">
                <div className="flex justify-end">
                    <a href='/' className='btn btn-ghost btn-sm rounded-btn  text-neutral' >Home </a>
                    <a href='/about' className='btn btn-ghost btn-sm rounded-btn text-neutral ' >About </a>
                </div>
            </div>
        </div>
        </nav>

        )
  }
Navbar.defaultProps={
    title:'Github-Finder',
}

Navbar.defaultpropType={
    title:PropTypes.string,
}

export default Navbar
