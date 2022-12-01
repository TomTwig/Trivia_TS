interface CheckButtonInterface {
  handleGameOver: () => void;
  playAgain: () => void;
  isGameOver: boolean;
}

export default function CheckButton(props: CheckButtonInterface) {
  return (
    <div className="checkButton">
      {!props.isGameOver && (
        <button onClick={props.handleGameOver}>Check results</button>
      )}
      {props.isGameOver && (
        <button onClick={props.playAgain}>Play Again</button>
      )}
    </div>
  );
}
