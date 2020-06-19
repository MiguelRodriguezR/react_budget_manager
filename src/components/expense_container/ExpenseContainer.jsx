import React from "react";
import Expense from "../expense/Expense";
import BudgetControl from "../budget_control/BudgetControl";

const ExpenseContainer = ({ expenses, left, budget }) => {
  return (
    <div className="expenses-container gastos-realizados">
      <h2>Your Expenses List</h2>
      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense}></Expense>
      ))}
      <BudgetControl
        left={left}
        budget={budget}
      ></BudgetControl>
    </div>
  );
};

export default ExpenseContainer;
