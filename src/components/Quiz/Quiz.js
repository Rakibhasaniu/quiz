import React from 'react';



const Quiz = ({quiz}) => {
    // console.log(quiz);
    // const{question,options} = quiz;
    // const allOption = quiz.options;
    // // const allOption = quiz[0];
    // // const {option} = allOption;
    // console.log(allOption);
    const{options, question} = quiz;


    return (
        <div>
            
           <div>
           {
            <h1>Quiz: {question}</h1>
           }
           {
            options.map(option => <p>{option}</p>)
           }
           </div>
           
        </div>
    );
};

export default Quiz;