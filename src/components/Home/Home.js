import React, { useContext } from 'react';
import { DataContext } from '../../layout/Main';
import Display from '../Display/Display';
import Header from '../Header/Header';
 
const Home = () => {

    const datas= useContext(DataContext);
    // console.log(datas);
    const dt = datas.data
   
    
    return (
        <div >
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