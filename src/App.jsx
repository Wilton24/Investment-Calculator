import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useEffect, useState } from "react";
import Outputs from "./components/Outputs";
import Results from "./components/Results";
// import {IInvestment} from "./interface/interface.tsx";

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,});

    const [isLogged, setIsLogged] = useState(false);

    const inputIsValid = investment.duration > 0;


  function handleLogInvestments(){  
    setIsLogged((isLogged)=> isLogged = true);  
  };

  function handleClearInvestment(){  
    setIsLogged((isLogged)=> isLogged = false);  
  };

  function handleCalculateInvestment(name, value ){
    setInvestment({...investment, [name]: +value});
  };

  const handleClearInvestmentBtn = <button 
                                      className="logBtn"
                                      onClick={handleClearInvestment}>Clear Investment
                                    </button>

  return (
    <>
      <Header />
      <UserInput 
        investment={investment}
        setInvestment={setInvestment}
        handleCalculateInvestment={handleCalculateInvestment} />
      {!inputIsValid && <p className="error">Please enter valid values</p>}
      {inputIsValid && <Results investment={investment}/>}

      <div className="buttons-container">
        <button 
          className="logBtn"
          onClick={handleLogInvestments}>Log All
        </button>

        {isLogged ? handleClearInvestmentBtn : null}
      </div>

      <Outputs 
        investment={investment}
        isLogged={isLogged}
      />
    </>
  )
}

export default App
