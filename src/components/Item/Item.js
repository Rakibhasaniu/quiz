import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Topicdetails from '../Topicdetails/Topicdetails';

const Item = () => {
     const allData = useLoaderData().data;
    console.log(allData);

    
   
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 ' > 
            {
                allData.map(topic => <Topicdetails key={topic.id} topic={topic}></Topicdetails>)
            }
        </div>
    );
};

export default Item;