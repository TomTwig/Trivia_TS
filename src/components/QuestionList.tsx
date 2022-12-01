import React, { useState, useEffect } from "react";
import Question from "./Question";


export default function QuestionList() {
  const [questions, setQuestions] = useState([]);

  interface Question {
    id: string;
    correct_answer: string;
    incorrect_answers: string[];
    question: string;
  }

  useEffect(() => {
    const url: string = "https://opentdb.com/api.php?amount=5&type=multiple";
    async function getQuestions() {
      const response = await fetch(url);
      const data = await response.json();
      setQuestions(() => {
        return data.results;
      });
    }
    getQuestions();
  }, []);

  return (
    <div className="questionsList">
      <h2>Questions</h2>
<div className="questionsList__questions">
{questions.length > 0
        ? questions.map((question: Question) =>{
            return <Question key={question.id} id={question.id} correct_answer={question.correct_answer} incorrect_answers={question.incorrect_answers} question={question.question}  />
        })
        : "Loading..."}
</div>
     
    </div>
  );
}
