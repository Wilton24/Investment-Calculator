import React from "react";
import {IInvestment} from "../interface/interface"
import{calculateInvestmentResults, formatter} from "../util/investment"

export default function Results({investment}) {
  const result = calculateInvestmentResults(investment);
  const initialInvestment = result.length > 0
  ? result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment
  : 0;

  console.log(result);
  
  return (
    <>
        <table id="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {result.map((data) => {

              const totalInterest = 
                data.valueEndOfYear - 
                data.annualInvestment * 
                data.year - 
                initialInvestment;

              return <tr key={data.year}>
                <td>{data.year}</td>
                <td>{formatter.format(data.valueEndOfYear.toFixed(2))}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
              </tr>
            })}
          </tbody>
        </table>
    </>

    
  )
}