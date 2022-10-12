import React, { useState } from "react";



const Quiz = ({ quiz }) => {
  
  const { options, question,correctAnswer } = quiz;
  console.log(quiz);
  const[correct, setCorrect] = useState(false);

  const handleQuiz = (answer, correctAns) => { 
    if(answer == correctAns){
      alert('correct')
    }
    else{
      alert('false')
    }

   }

  return (
    <div>
      <div className="rounded">
        {<h1 className="py-4 ">Quiz: {question}</h1>}
        {options.map((option, i) => (
          <div className="py-32 w-2/4 h-4 bg-gray-400 my-4 ">
            {i}.<button onClick={()=>handleQuiz(option, correctAnswer)}>{option}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
