import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Topics = () => {
    
    const allData = useLoaderData();
    // console.log(allData);
    const {data} = allData;
    
     const quizs = data.questions;
     console.log(quizs);
   
    
    return (
        <div>
            <h2>Quiz of {data.name}</h2>
            {
               quizs.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>) 
            }
        </div>
    );
};

export default Topics;