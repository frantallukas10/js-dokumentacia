const sum = (a, b) => {
  if (a === undefined || b === undefined) {
    return 'please define two numbers';
  }
  return a + b;
};

module.exports = { sum };
