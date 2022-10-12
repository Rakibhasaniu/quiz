import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Topics = () => {
    
    const allData = useLoaderData();
    
    const {data} = allData;
    
     const quizs = data.questions;
     
   
    
    return (
        <div className= 'flex justify-center items-center '>
            <div className=''>
            <h2 className='text-2xl text-center m-4 font-bold '>Quiz of {data.name}</h2>
            {
               quizs.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>) 
            }
        </div>
        </div>
    );
};

export default Topics;