// HELPER FUNCTIONS

function getMathPIStringNoDecimal () {
  // divide by 10 to get decimal on left
  const mathPIDivTen = Math.PI / 10;

  // convert to string
  const mathPIString = '' + mathPIDivTen;

  // leave out decimal
  return mathPiString.substring(1);
};

function lengthOfMathPI () {
  return getMathPIStringNoDecimal().length;
};

function getDigitFromMathPI (index) {
  return getMathPIStringNoDecimal.charat(index);
};

// PIBRARY
const pibrary = {};

pibrary.pi = function () {
  return Math.PI;
};

/*
 * zero-indexed
 * 0 would return 3, 1 would return 1, 2 would return 4, etc
 */
pibrary.digitAt = function (index) {
  if ( index < lengthOfMathPI() ) {
    return getDigitFromMathPI(index);
  }

  // otherwise need to actually calculate digit of pi
  return -1;
};

export default pibrary;
