import { Fragment } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";
export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
    console.log(initialInvestment);
    
  return (
    <Fragment>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Intrest (Year)</th>
            <th>Total Intrest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {resultsData.map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year;
            
            const totalAmoutInvested = yearData.valueEndOfYear - totalInterest

            console.log(totalInterest,"totalInterest")
            console.log(totalAmoutInvested,"totalAmoutInvested")
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmoutInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
}
