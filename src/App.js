import { useEffect, useState } from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(() => {
    const isAllHeld = dice.every(die => die.isHeld)
    const isAllSame = dice.every(die => dice[0].value === die.value)

    if (isAllHeld && isAllSame) {
      setTenzies(true)
    }
  }, [dice])

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }
  }
  
  function allNewDice() {   
    let newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return !die.isHeld?
        generateNewDie() :
        die
    }))
  }

  function newGame() {
    setDice(allNewDice())
    setTenzies(false)
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? 
        {...die, isHeld: !die.isHeld} :
        die
    }))
  }

  const diceElements = dice.map(die => {
    return (
      <Die 
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        holdDice={() => holdDice(die.id)}
      />
    )
  })


  return (
    <main className="py-20 h-screen bg-[#0B2434]">
      {tenzies && <Confetti />}
      <div className="bg-[#F5F5F5] mx-auto w-[600px] h-[600px] rounded-[10px] flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold mt-16">Tenzies</h1>
        <p className="text-lg mt-4 w-72">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="grid grid-cols-5 gap-6 mt-10">
          {diceElements}
        </div>
        <button 
          className="bg-indigo-600 active:shadow-[inset_5px_5px_10px_-3px_rgba(0,0,0,0.7)] text-white font-bold py-4 px-16 rounded-lg m-16 text-3xl"
          onClick={tenzies? newGame : rollDice}
        >{tenzies? "New Game" : "Roll"}</button>
      </div>
    </main>
  );
}

export default App;
