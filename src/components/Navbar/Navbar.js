import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='text-center p-8'>
            <Link className='mr-4' to='/home'> Home</Link>
            <Link className='mr-4' to='/topics'>Quiz</Link>
            <Link className='mr-4' to='/statictics'>Chart</Link>
            <Link className='mr-4' to='/question'>Question</Link>
            
        </div>
    );
};

export default Navbar;