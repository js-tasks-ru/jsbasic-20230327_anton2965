function sumSalary(salaries) {
  let result = 0;

  for (let salary in salaries) {
    Number.isInteger(salaries[salary]) ? result += salaries[salary]: result;
  }

  return result;
}
