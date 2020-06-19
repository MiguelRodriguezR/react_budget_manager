import React, { useState } from "react";

const Ask = ({saveNewBudget}) => {
  const [quantity, saveQuantity] = useState(0);
  const [error, saveError] = useState(false);

  const defineBudget = (b) => {
    const valu = Number(b.target.value);
    saveQuantity(valu);
    saveError(valu <= 0);
  };

  const addBudget = e => {
      e.preventDefault();
      error ? void(0) : saveNewBudget(quantity);
  }


  return (
    <div className="contenido-principal contenido">
      <h2>What is your Budget</h2>
      <form action="" className="form" onSubmit = {addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="$"
          onChange={defineBudget}
        />
        {error ? <span className="error">must be higer than 0</span> : null}
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Define Budget"
        />
      </form>
    </div>
  );
};

export default Ask;
