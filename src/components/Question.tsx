import { useState } from "react";
import Answer from "./Answer";
import { nanoid } from "nanoid";

interface QuestionInterface {
  id: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  isSelected: boolean;
  isGameOver: boolean;
}

export default function Question(props: QuestionInterface) {
  const combineAnswers = props.incorrect_answers.filter(
    (answer) => answer !== props.correct_answer
  );
  combineAnswers.push(props.correct_answer);

  const randomizeAnswers = combineAnswers.sort(() => 0.5 - Math.random());

  const answers = randomizeAnswers.map((answer, index) => {
    return {
      id: nanoid(),
      answer: randomizeAnswers[index],
      isSelected: false,
      isCorrect: answer === props.correct_answer,
    };
  });

  const [possibleAnswers, setPossibleAnswers] = useState(answers);
  interface AnswerInterface {
    id: string;
    answer: string;
    isCorrect: boolean;
    isSelected: boolean;
  }

  function handleClick(event: any, id: string) {
    setPossibleAnswers((possibleAnswers) => {
      const newState = possibleAnswers.map((answer) => {
        if (answer.id === id) {
          answer.isSelected = answer.isSelected ? false : true;
        } else {
          answer.isSelected = false;
        }
        return answer;
      });
      return newState;
    });
  }

  return (
    <div className="question">
      <h3>{props.question}</h3>
      <div className="question__answers">
        {possibleAnswers.map((answer: AnswerInterface) => {
          return (
            <Answer
              answer={answer.answer}
              id={answer.id}
              isSelected={answer.isSelected}
              isCorrect={answer.isCorrect}
              handleClick={handleClick}
              isGameOver={props.isGameOver}
            />
          );
        })}
      </div>
    </div>
  );
}
