// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var upperalphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var symbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "+",
    "-",
    "?",
    "(",
    ")",
    ",",
    ".",
    "=",
    "~",
    "[",
    "]",
    "{",
    "}",
    "`",
  ];
  var allSymbols = [alphabet];
  var chooseUpper = confirm("Do you want Uppercase characters?");
  // As people confirm whether or not theyd like certain characters it adds to allSymbols, a master array.
  if (chooseUpper === true) {
    allSymbols.push(upperalphabet);
  }

  var chooseNum = confirm("Do you want Numbers?");
  if (chooseNum === true) {
    allSymbols.push(numbers);
  }

  var chooseSymb = confirm("Do you want Symbols?");
  if (chooseSymb === true) {
    allSymbols.push(symbols);
  }
  console.log(allSymbols);
  var totalChars = parseInt(prompt("Number of characters? Min 8, Max 128"), 10);
  passwordArr = [];

  for (let i = 0; i < totalChars; i++) {
    var charType = Math.floor(Math.random() * allSymbols.length);
    console.log("char type " + charType);
    console.log("length of allSymbols[charType]" + allSymbols[charType].length);
    var charSelect = Math.floor(Math.random() * allSymbols[charType].length);
    passwordArr.push(allSymbols[charType][charSelect]);
  }
  var passwordchars = passwordArr.join("");
  console.log(passwordchars);
  document.getElementById("password").value = passwordchars
  // var password = generatePassword();
  // var passwordText = document.querySelector(passwordchars);

  // passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
