import React from 'react';

const Topicdetails = ({topic}) => {
    const{name,total,logo} = topic;
    return (
        <div className='p-5 m-5 '>
            <div className="card w-50 bg-yellow-500 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{total}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Topicdetails;