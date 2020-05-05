const validations = (a, b) => {
  if (a === undefined) {
    return 'please define number "a"';
  }
  if (b === undefined) {
    return 'please define number "b"';
  }
  if (typeof a !== 'number' && typeof b !== 'number') {
    return ' wrong input type';
  }
};

const scitanie = (a, b) => {
  validations(a, b);
  return a + b;
};

const odcitanie = (a, b) => {
  validations(a, b);
  return a - b;
};
const nasobenie = (a, b) => {
  validations(a, b);
  return a * b;
};
const delenie = (a, b) => {
  validations(a, b);
  return a / b;
};

module.exports = { scitanie, odcitanie, nasobenie, delenie };
