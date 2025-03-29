import Header from "./Header.jsx";
import UserInput from "./UserInput.jsx";
import Results from "./Result.jsx";
import { Fragment,useState } from "react";
function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <Fragment>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      <Results input={userInput} />
    </Fragment>
  );
}

export default App;
