import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='flex justify-evenly  bg-slate-500   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-4 lg:py-4 rounded '>
            <div className='dev'>
                <h4>Web Dev Quiz</h4>
            </div>
            <div >
            <Link className='mr-4' to='/home'> Home</Link>
            <Link className='mr-4' to='/topics'>Topics</Link>
            <Link className='mr-4' to='/statictics'>Chart</Link>
            <Link className='mr-4' to='/blog'>Blog</Link>
            
        </div>
        </div>
    );
};

export default Navbar;

