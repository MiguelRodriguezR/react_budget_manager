export const checkBudget = (budget, left) => {
  let classColor = "alert ";
  let colors = {
    "alert-danger": 0.25,
    "alert-warning": 0.5,
    "alert-success": 1,
  };
  classColor += Object.keys(colors)[
    Object.values(colors).findIndex((percent) => left <= budget * percent)
  ];
  return classColor;
};
