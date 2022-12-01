import { useState } from "react";

interface Answer {
    id: string;
    answer: string;
    isCorrect: boolean,
    isSelected: boolean
  }


export default function Answer(props:Answer){

    const [isSelected, setIsSelected]= useState(false);

    return(
        <div className={isSelected ? "answer selected" : "answer"}>
            <button onClick={()=>{
                setIsSelected(isSelected?false:true);
            }}>{props.answer}</button>
        </div>
    )
}