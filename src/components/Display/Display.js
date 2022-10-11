import React from 'react';
import { Link } from 'react-router-dom';

const Display = ({quiz}) => {
    // console.log(quiz);
    const {id,name,logo,total} = quiz;
    return (
        <div>
        <img
          className='bg-slate-900	'
          src={logo}
          alt=''
        />
        <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
       <Link to={`/quiz/${id}`}><button 
        >
          Start Quiz
        </button></Link>
        
      </div>
    );
};

export default Display;