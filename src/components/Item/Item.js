import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Topicdetails from '../Topicdetails/Topicdetails';

const Item = () => {
     const allData = useLoaderData().data;
    

    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20' > 
            <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
            {
                allData.map(topic => <Topicdetails key={topic.id} topic={topic}></Topicdetails>)
            }
            </div>
        </div>
    );
};

export default Item;