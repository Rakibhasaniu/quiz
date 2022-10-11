import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {
    
    const allData = useLoaderData();
    const {data} = allData;
    // const quiz = data.question
    console.log(data);
    return (
        <div>
            <h2>This is Quiz Area</h2>
        </div>
    );
};

export default Topics;