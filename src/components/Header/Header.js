import React from 'react';

const Header = () => {
    return (
        <div className="hero min-h-25 bg-base-200 bg-slate-500 py-4 m-2 rounded ">
  <div className="hero-content flex justify-around lg:flex">
    <img src="https://placeimg.com/100/50/arch" className="max-w-sm rounded-lg shadow-2xl"  alt=''/>
    <div>
      <h1 className="text-3xl ">Web Dev Quiz</h1>
    </div>
  </div>
</div>
    );
};

export default Header;