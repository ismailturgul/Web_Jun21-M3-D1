/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const calculateAndTriple = function (a, b) {
  return a === b ? (a + b) * 3 : a + b;
};

console.log(calculateAndTriple(3, 3));
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
  string1 += string.slice(4, 6);
  console.log(string1);
};
removeCharacter();

/*
4)
 Create a function to find the largest of three given integers.
*/

const largestNumber = function () {
  let a = 3;
  let b = 2;
  let c = 1;

  if (a > b && a > c) {
    return console.log(`a is the biggest number = ${a}`);
  } else if (b > a && b > c) {
    return console.log(`b is the biggest number = ${b}`);
  } else {
    console.log(`c is the biggest number = ${c}`);
  }
};
largestNumber();

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const checkTheRange = function () {
  let x = 30;
  let y = 33;

  if ((x + y >= 40 && x + y <= 60) || (x + y >= 70 && x + y <= 100)) {
    console.log(`${x + y} = in the range`);
  } else {
    console.log(`is not in the range`);
  }
};
checkTheRange();

/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const displayCityNames = function () {
  let citys = ["New York", "Guadalajara", "Omotepe", "Los Angelos"];

  for (let i = 0; i < citys.length; i++) {
    currentCity = citys[i];
    if (
      currentCity.slice(0, 3) === "New" ||
      currentCity.slice(0, 3) === "Los"
    ) {
      console.log(currentCity);
    }
  }
};
displayCityNames();

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const calculateTheSumOfArray = function () {
  let numbersInArray = [1, 2, 3];
  console.log(numbersInArray.reduce((a, b) => a + b));
};
calculateTheSumOfArray();
