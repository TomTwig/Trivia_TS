import { useEffect } from "react";

  interface Question {
    id: string;
    correct_answer: string;
    incorrect_answers: string[];
    question: string;
  }

export default function Question(props:Question){


 useEffect(()=>{


 },[])
    const combineAnswers = props.incorrect_answers.filter((answer)=>answer !== props.correct_answer);
    combineAnswers.push(props.correct_answer);
    
    
    const randomizeAnswers = combineAnswers.sort(()=> 0.5 - Math.random());
    console.log(randomizeAnswers);
    



    return(
<div className="question">

  <h3>{props.question}</h3>
  <div className="question__answers">
  {randomizeAnswers.map((answer)=>{
    return <button>{answer}</button>
  })}
  </div>


    



</div>
    )
}
