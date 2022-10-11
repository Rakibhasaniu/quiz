import React, { useContext } from 'react';
import { DataContext } from '../../layout/Main';
import Display from '../Display/Display';
 
const Home = () => {

    const datas= useContext(DataContext);
    // console.log(datas);
    const dt = datas.data
   
    
    return (
        <div>
            {
                dt.map(quiz => <Display key={quiz.id} quiz={quiz}></Display> )
            }
        </div>
    );
};

export default Home;