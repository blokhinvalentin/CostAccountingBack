const stringValidation = (string) => typeof string === 'string' || string !== '';

const numberValidation = (number) => typeof number === 'number';

module.exports = {
  stringValidation,
  numberValidation
};