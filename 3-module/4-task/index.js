function showSalary(users, age) {
  return users.filter(value => value.age <= age).map(value => `${value.name}, ${value.balance}`).join('\n');
}
