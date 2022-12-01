interface AnswerInterface {
  id: string;
  answer: string;
  isCorrect: boolean;
  isSelected: boolean;
  handleClick: (event: any, id: string) => void;
  isGameOver: boolean;
}

export default function Answer(props: AnswerInterface) {
  return (
    <div
      className={
        props.isSelected && !props.isCorrect && props.isGameOver
          ? "answer red"
          : "answer"
      }
    >
      <div
        className={
          !props.isSelected && props.isCorrect && props.isGameOver
            ? "answer green"
            : "answer"
        }
      >
        <div
          className={
            props.isSelected && props.isCorrect && props.isGameOver
              ? "answer green"
              : "answer"
          }
        >
          <div className={props.isSelected ? "answer selected" : "answer"}>
            <button
              onClick={(event) => {
                props.handleClick(event, props.id);
              }}
            >
              {props.answer}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
