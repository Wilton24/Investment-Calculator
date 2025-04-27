import React from "react";
import {IInvestment} from "../interface/interface"


export default function Outputs({investment, isLogged}: {investment:IInvestment, isLogged: boolean}) {
  let data = 
    <section id="outputs">
      <p>Initial Investment is {investment.initialInvestment}</p>
      <p>Initial Investment is {investment.annualInvestment}</p>
      <p>Initial Investment is {investment.expectedReturn}</p>
      <p>Initial Investment is {investment.duration}</p>
    </section>

  return (
    <>
      {isLogged ?  data : null}      
    </>

  )
};