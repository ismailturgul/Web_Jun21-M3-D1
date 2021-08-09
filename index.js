/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
const maxLetter = (str) => {
  let max = 0;
  let maxChar = "";
  str.split("").forEach((char) => {
    //loop trough every element
    if (str.split(char).length > max) {
      // check if current char is bigger then max (max => 0)
      max = str.split(char).length;
      // add the element to max (max => +1)
      maxChar = char;
      // maxChar becomes to current char
    }
  });
  return maxChar;
  // return the maxChar with the highest elements
};
maxLetter("1223334444");

/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/
const isAnagram = (str1, str2) =>
  str1.split("").sort().join("") === str2.split("").sort().join("");

// split("") = split´s strings between each char ( with an comma)
// sort() = alphabeticly sorted
// join("") = put every element in a only string, ( join("+") would put a "+" between every element )
