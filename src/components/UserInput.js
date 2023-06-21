import React, { useState } from "react";
import classes from './UserInput.module.css';

const initialUserInput ={
  "current-savings": 20000,
  "yearly-contribution": 1200,
  "expected-return": 8,
  duration: 10,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input] : +value
      };
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings (₹)</label>
            <input
              onChange={(event) =>
                inputChangeHandler("current-savings", event.target.value)
              }
              value={userInput['current-savings']}
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings (₹)</label>
            <input
              onChange={(event) =>
                inputChangeHandler("yearly-contribution", event.target.value)
              }
              value={userInput['yearly-contribution']}
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className={classes["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              onChange={(event) =>
                inputChangeHandler("expected-return", event.target.value)
              }
              value={userInput['expected-return']}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              onChange={(event) =>
                inputChangeHandler("duration", event.target.value)
              }
              value={userInput['duration']}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className={classes.actions}>
          <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default UserInput;
