function getMinMax(str) {
  let result = str.split(' ').filter(value => !isNaN(value)).map(value => Number(value));
  return {'min': Math.min(...result), 'max': Math.max(...result)};
};
