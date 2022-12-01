
  interface Question {
    id: string;
    correct_answer: string;
    incorrect_answers: string[];
    question: string;
  }

export default function Question(props:Question){

    const answers = props.incorrect_answers;



    return(
<div className="Question">

    



</div>
    )
}
