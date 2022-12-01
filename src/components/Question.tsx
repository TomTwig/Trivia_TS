import { useState } from "react";
import Answer from "./Answer";
import { nanoid } from "nanoid";

interface Question {
  id: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
}

export default function Question(props: Question) {
  interface Answer {
    id: string;
    answer: string;
    isCorrect: boolean;
    isSelected: boolean;
  }

  const combineAnswers = props.incorrect_answers.filter(
    (answer) => answer !== props.correct_answer
  );
  combineAnswers.push(props.correct_answer);

  const randomizeAnswers = combineAnswers.sort(() => 0.5 - Math.random());

  const answers = randomizeAnswers.map((answer) => {
    return {
      id: nanoid(),
      answer: answer,
      isSelected: false,
      isCorrect: answer === props.correct_answer,
    };
  });

  const [possibleAnswers, setPossibleAnswers] = useState(answers);

  function handleClick(event: any, id: string) {
    setPossibleAnswers((prevState) => {
      const newState = prevState.map((answer)=>{
        if( answer.id === id){
          answer.isSelected = answer.isSelected ? false : true;
        }else{
          answer.isSelected = false
        }
        return answer
      });
     return newState
  });
  
}

  return (
    <div className="question">
      <h3>{props.question}</h3>
      <div className="question__answers">
        {possibleAnswers.map((answer: Answer) => {
          return (
            <Answer
              answer={answer.answer}
              id={answer.id}
              isSelected={answer.isSelected}
              isCorrect={answer.isCorrect}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}
