import React, {useState} from 'react';
import CheckButton from './components/CheckButton';
import QuestionList from './components/QuestionList';

function App() {

  const [isGameOver, setIsGameOver] = useState(false);
  const [amountRounds, setAmountRounds] = useState(0);

  function handleGameOver(){
    isGameOver ? setIsGameOver(false) : setIsGameOver(true);
  }

  function playAgain(){
    setAmountRounds((prevState)=>{
      return prevState + 1
    })

    setIsGameOver(false);
  
  }




  return (
    <>    
    
    <img className='background__image' src='../background_seamless.jpg' alt='background colorful polka'/>
    <div className="container">

    <h1 className='title'>Trivia</h1>

    <QuestionList isGameOver={isGameOver} amountRounds={amountRounds} />

    <CheckButton handleGameOver={handleGameOver} playAgain={playAgain} isGameOver={isGameOver} />
   

  </div></>

  );
}

export default App;
