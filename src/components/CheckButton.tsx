
interface CheckButtonInterface{
    handleGameOver: ()=>void,
    playAgain: ()=> void,
    isGameOver: boolean
}

export default function CheckButton(props:CheckButtonInterface){



    return(
        
        <div>
            {!props.isGameOver &&  <button onClick={props.handleGameOver}>Check results</button>}
            {props.isGameOver &&  <button onClick={props.playAgain}>Play Again</button>}
        </div>
        
           
        
        
    )



}