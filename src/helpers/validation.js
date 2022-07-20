const ifStringOrEmpty = (line) => {
  if (typeof line !== 'string' || line === '') {
    throw new Error ('wrong type of text or empty');
  }
}

const ifNumberOrEmpty = (number) => {
  if (typeof number !== 'number' || number === null) {
    throw new Error ('wrong type of number or null');
  }
}

module.exports = {
  ifStringOrEmpty,
  ifNumberOrEmpty
};