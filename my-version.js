// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCred(array) {
  let modifiedArray = [];
  for (let i = array.length - 1; i >= 0; i -= 2) {
    let checkDigit = array[i];
    modifiedArray.push(checkDigit);
    let everyOtherDigit = array[i - 1];
    if (i === 0) {
      everyOtherDigit = 0;
    }
    let doubledDigit = everyOtherDigit * 2;
    if (doubledDigit > 9) {
      doubledDigit -= 9;
    }
    modifiedArray.push(doubledDigit);
  }
  let sum = modifiedArray.reduce((acc, value) => acc + value);
  return sum % 10 === 0;
}

//Test function
console.log(validateCred(valid3)); // Should print true
console.log(validateCred(invalid3)); // Should print false

function findInvalidCards(array) {
  let invalidCards = array.filter(item => !validateCred(item));
  return invalidCards;
}

//Test function
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5]));// Shouldn't print anything
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers

console.log(findInvalidCards(batch)); // Test what the mystery numbers are

function idInvalidCardCompanies(array) {
  let companies = [];
  if (array.some(item => item[0] === 3)) {
    companies.push("Amex (American Express)");
  }
  if (array.some(item => item[0] === 4)) {
    companies.push("Visa");
  }
  if (array.some(item => item[0] === 5)) {
    companies.push("Mastercard");
  }
  if (array.some(item => item[0] === 6)) {
    companies.push("Discover");
  }
  for (item of array) {
    let firstDigit = item[0];
    if (firstDigit != 3 && firstDigit != 4 && firstDigit != 5 && firstDigit != 6) {
      console.log('Company not found');
    }
  }
  return companies;
}

//Test function
console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards

function convertString(string) {
  let stringArray = string.split('');
  let numberArray = stringArray.map(item => parseInt(item, 10));
  return numberArray;
}

//Test function
console.log(convertString('3540561326650676390'));

//Test different credit card numbers
console.log(validateCred(convertString('4916474862950520356')));
console.log(validateCred(convertString('6011711178518534453')));
console.log(validateCred(convertString('30260412255634')));
console.log(validateCred(convertString('3537674923168175665')));
console.log(validateCred(convertString('36991849156334')));
console.log(validateCred(convertString('348392976943847')));
console.log(validateCred(convertString('4929108789798312')));

function convertIntoValid(array) {
  let modifiedArray = [];
  for (let i = array.length - 1; i >= 0; i -= 2) {
    let checkDigit = array[i];
    modifiedArray.push(checkDigit);
    let everyOtherDigit = array[i - 1];
    if (i === 0) {
      everyOtherDigit = 0;
    }
    let doubledDigit = everyOtherDigit * 2;
    if (doubledDigit > 9) {
      doubledDigit -= 9;
    }
    modifiedArray.push(doubledDigit);
  }
  let sum = modifiedArray.reduce((acc, value) => acc + value);
  let modulo = sum % 10;
  array[array.length - 1] -= modulo;
  return array;
}
//Test function
console.log(validateCred(convertIntoValid(invalid1)));
console.log(validateCred(convertIntoValid(invalid2)));
console.log(validateCred(convertIntoValid(invalid3)));
console.log(validateCred(convertIntoValid(invalid4)));
console.log(validateCred(convertIntoValid(invalid5)));
