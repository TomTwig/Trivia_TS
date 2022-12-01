import { useState, useEffect } from "react";
import Question from "./Question";

interface QuestionListInterface {
  isGameOver: boolean,
  amountRounds: number
}

export default function QuestionList(props:QuestionListInterface) {

  interface QuestionInterface {
    id: string;
    correct_answer: string;
    incorrect_answers: string[];
    question: string;
    isSelected:boolean
  }
  const [questions, setQuestions] = useState([]);


  useEffect(() => {
    const url: string = "https://opentdb.com/api.php?amount=5&type=multiple";
    async function getQuestions() {
      const response = await fetch(url);
      const data = await response.json();
      const simplifyData = data.results.map((question:QuestionInterface)=>{

        return {
          id: question.id,
          correct_answer: question.correct_answer,
          incorrect_answers: question.incorrect_answers,
          question: question.question,
          isSelected : false,
        }
      })
      setQuestions(() => {
        return simplifyData
      });
    }
    getQuestions();
  }, [props.amountRounds]);

  return (
    <div className="questionsList">
      <h2>Questions</h2>
      <div className="questionsList__questions">
        {questions.length > 0
          ? questions.map((question: QuestionInterface) => {
              return (
                <Question
                  key={question.id}
                  id={question.id}
                  correct_answer={question.correct_answer}
                  incorrect_answers={question.incorrect_answers}
                  question={question.question}
                  isSelected={question.isSelected}
                  isGameOver={props.isGameOver}
                  amountRounds={props.amountRounds}
                 
                />
              );
            })
          : "Loading..."}
      </div>
    </div>
    
  );
}
