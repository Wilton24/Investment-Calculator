import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useEffect, useState } from "react";
import Outputs from "./components/Outputs";
// import {IInvestment} from "./interface/interface.tsx";

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,});

    const [isLogged, setIsLogged] = useState(false);


  function handleLogInvestments(){  
    setIsLogged((isLogged)=> isLogged = true);  
  };

  function handleClearInvestment(){  
    setIsLogged((isLogged)=> isLogged = false);  
  };

  return (
    <>
      <Header />
      <UserInput 
        investment={investment}
        setInvestment={setInvestment} />
      <div className="buttons-container">
        <button 
          className="logBtn"
          onClick={handleLogInvestments}>Log All
        </button>
        <button 
          className="logBtn"
          onClick={handleClearInvestment}>Clear Investment
        </button>
      </div>

      <Outputs 
        investment={investment}
        isLogged={isLogged}
      />
    </>
  )
}

export default App
