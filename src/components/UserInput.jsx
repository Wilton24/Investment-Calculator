import { useState } from "react";
// import {IInvestment} from "../interface/interface";

export default function UserInput({investment, setInvestment}) {


  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input 
            type="number"
            value={investment.initialInvestment}
            onChange={(e)=> setInvestment({...investment, initialInvestment: e.target.value})}
             />
        </p>
        <p>
          <label>Annual Investment</label>
          <input 
            type="number"
            value={investment.annualInvestment}
            onChange={(e)=> setInvestment({...investment, annualInvestment: e.target.value})}
             />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input 
            type="number"
            value={investment.expectedReturn}
            onChange={(e)=> setInvestment({...investment, expectedReturn: e.target.value})}
             />
        </p>
        <p>
          <label>Duration</label>
          <input 
            type="number"
            value={investment.duration}
            onChange={(e)=> setInvestment({...investment, duration: e.target.value})}
             />
        </p>
      </div>
    </section>
  );
};