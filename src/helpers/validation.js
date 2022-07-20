const stringValidation = (string) => typeof string === 'string' || string !== '';

const numberValidation = (number) => typeof number === 'number' || number !== null;

module.exports = {
  stringValidation,
  numberValidation
};