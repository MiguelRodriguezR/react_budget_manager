import React, { useState } from "react";
import Ask from "../ask/Ask";
import Form from "../form/Form";
import shortid from "shortid";
import ExpenseContainer from "../expense_container/ExpenseContainer";

const Main = () => {
  const [budget, saveBudget] = useState(0);
  const [left, saveLeft] = useState(0);
  const [expenses, saveExpenses] = useState([]);

  const saveNewBudget = (budget) => {
    saveBudget(budget);
    saveLeft(budget);
  };

  const saveActualBudget = (name, quantity) => {
    saveLeft(left - quantity);
    const expense = {
      name,
      quantity,
      id: shortid.generate(),
    };
    saveExpenses([...expenses, expense]);
  };

  return (
    <div className="main">
      {budget === 0 ? (
        <Ask saveNewBudget={saveNewBudget}></Ask>
      ) : (
        <div className="divided-2 contenido-principal contenido">
          <Form actualBudget={left} saveActualBudget={saveActualBudget}></Form>
          <ExpenseContainer
            expenses={expenses}
            left={left}
            budget={budget}
          ></ExpenseContainer>
        </div>
      )}
    </div>
  );
};

export default Main;
