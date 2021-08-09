
/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const calculateAndTriple = function (a, b) {
  return a === b ? (a + b) * 3 : a + b;
};

console.log(calculateAndTriple(4, 3));
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const checkIfItsEqual = function () {
  let firstNumber = 30;
  let secondNumber = 30;

  if (
    firstNumber === 50 ||
    secondNumber === 50 ||
    firstNumber + secondNumber === 50
  ) {
    console.log("true");
  } else {
    console.log("false");
  }
};

checkIfItsEqual();
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeCharacter = function () {
  let string = "Strive";
  string1 = string.slice(0, 3);
  string1 += string.slice(4, 7);
  console.log(string1);
};