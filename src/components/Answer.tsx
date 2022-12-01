import { useState } from "react";

interface Answer {
    id: string;
    answer: string;
    isCorrect: boolean,
    isSelected: boolean,
    handleClick: (event:any, id: string) => void
  }


export default function Answer(props:Answer){

   

    return(
        <div className={props.isSelected ? "answer selected" : "answer"}>
            <button onClick={(event)=>{

                console.log(props.id)

                props.handleClick(event,props.id)


               
            }}>{props.answer}</button>
        </div>
    )
}