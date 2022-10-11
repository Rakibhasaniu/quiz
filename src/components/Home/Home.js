import React, { useContext } from 'react';
import { DataContext } from '../../layout/Main';
import Display from '../Display/Display';
 
const Home = () => {

    const datas= useContext(DataContext);
    const dt = datas.data
    // console.log(dt);
   
    
    return (
        <div>
            {
                dt.map(quiz => <Display key={quiz.id} quiz={quiz}></Display> )
            }
        </div>
    );
};

export default Home;