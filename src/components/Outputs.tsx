import React from "react";
import {IInvestment} from "../interface/interface"

export default function Outputs(investment: IInvestment){
  return (
    <>
      <section id="outputs">
      <p>Initial Investment is {investment.initialInvestment}</p>
      <p>Initial Investment is {investment.annualInvestment}</p>
      <p>Initial Investment is {investment.expectedReturn}</p>
      <p>Initial Investment is {investment.duration}</p>
    </section>
    </>

  )
};