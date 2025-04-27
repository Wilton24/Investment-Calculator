import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";
import Outputs from "./components/Outputs";
// import {IInvestment} from "./interface/interface.tsx";

function App() {
  const [investment, setInvestment] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,});

  function handleLogInvestments(){
    console.log(investment);    
  };

  return (
    <>
      <Header />
      <UserInput 
        investment={investment}
        setInvestment={setInvestment} />
      <button 
        className="logBtn"
        onClick={handleLogInvestments}>Log All
      </button>

      <Outputs 
        investment={investment}
      />
    </>
  )
}

export default App
