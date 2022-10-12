import React from 'react';

const Topicdetails = ({topic}) => {
    const{name,total,logo} = topic;
    return (
        <div className='shadow-md shadow-indigo-500/50 rounded'>
        <img
          className=' bg-slate-500 object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
          src={logo}
          alt=''
        />
        <p className='mb-2 text-xl font-bold leading-none sm:text-2xl mx-4'>{name}</p>
       <p className='font-bold mx-4'>Total:{total}</p>
        
      </div>
    );
};

export default Topicdetails;