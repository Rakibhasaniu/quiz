import React, { useState } from "react";

const Quiz = ({ quiz }) => {
  
  const { options, question,correctAnswer } = quiz;
  console.log(quiz);
  const[correct, setCorrect] = useState(false);

  const handleQuiz = (answer, correctAns) => { 
    if(answer == correctAns){
      alert("Your answer is true")
    }
    else{
      alert("your answer is false")
    }

   }

  return (
    <div>
      <div>
        {<h1>Quiz: {question}</h1>}
        {options.map((option, i) => (
          <div className="py-2 bg-gray-400 my-4 ">
            {i}.<button onClick={()=>handleQuiz(option, correctAnswer)}>{option}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
