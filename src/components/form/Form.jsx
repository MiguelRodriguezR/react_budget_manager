import React, { useState } from "react";

const Form = ({ actualBudget, saveActualBudget }) => {
  const cleanErrorsList = {
    bellowZero: false,
    bellowBudget: false,
  };

  const [name, saveName] = useState("");
  const [quantity, saveQuantity] = useState(0);
  const [errors, saveErrors] = useState(cleanErrorsList);

  const setError = (errorName = null) => {
    !errorName
      ? saveErrors(cleanErrorsList)
      : saveErrors({ ...errors, [errorName]: true });
    return errorName;
  };

  const resetForm = () => {
    saveName('');
    saveQuantity(0);
  }

  const setActualBudget = (e) => {
    e.preventDefault();
    let error =
      quantity <= 0
        ? setError("bellowZero")
        : actualBudget < quantity
        ? setError("bellowBudget")
        : setError();
    error ? void(0) : resetForm();    
    return error ? null : saveActualBudget(name, quantity);
  };

  return (
    <div>
      <h2>Add your Expenses here</h2>
      <form action="" onSubmit={setActualBudget}>
        <div className="field">
          <label htmlFor="">Expense Name</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="..."
            value={name}
            onChange={(e) => saveName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="">Expense Quantity</label>
          <input
            type="number"
            className="u-full-width"
            placeholder="..."
            value={quantity}
            onChange={(e) => saveQuantity(Number(e.target.value))}
          />
          {errors.bellowBudget ? (
            <span className="error">must be lower or equal to budget</span>
          ) : null}
          {errors.bellowZero ? (
            <span className="error">must be higer than 0</span>
          ) : null}
        </div>
        <button type="submit" className="button-primary u-full-width">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default Form;
