import { Fragment } from "react";
import logo from "./assets/investment-calculator-logo.png";
export default function Header() {
  return (
    <Fragment>
      <header id="header">
        <img src={logo} alt="Investment Calculator" />
        <h1>Investment Calculator</h1>
      </header>
    </Fragment>
  );
}
