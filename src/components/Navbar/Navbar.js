import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='text-center  bg-slate-500   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-4 lg:py-4 rounded '>
            <Link className='mr-4' to='/home'> Home</Link>
            <Link className='mr-4' to='/topics'>Quiz</Link>
            <Link className='mr-4' to='/statictics'>Chart</Link>
            <Link className='mr-4' to='/question'>Question</Link>
            
        </div>
    );
};

export default Navbar;

