function camelize(str) {
  let reducer = (acc, value) => {
    if (str.indexOf(value) === 0) {
      acc.push(value);
    } else {
      acc.push(value.charAt(0).toUpperCase() + value.slice(1));
    };
    return acc;
  };
  return str.split('-').reduce(reducer, []).join('')
}
