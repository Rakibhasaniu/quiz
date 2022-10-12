import React, { useContext } from 'react';
import { DataContext } from '../../layout/Main';
import Display from '../Display/Display';
import Header from '../Header/Header';
 
const Home = () => {

    const datas= useContext(DataContext);
    // console.log(datas);
    const dt = datas.data
   
    
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <Header></Header>
            <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
            {
                dt.map(quiz => <Display key={quiz.id} quiz={quiz}></Display> )
            }
            </div>
        </div>
    );
};

export default Home;