// Assignment Code
var generateBtn = document.querySelector("#generate");
function checkArray(arr){
  return arr===true
}

// Write password to the #password input
function writePassword() {
  // Setting up variables, groups of different symbols.
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
  var allSymbols = [];
  // Asking how many characters are desired.
  var totalChars = parseInt(prompt("Number of characters? Min 8, Max 128"), 10);
  // Password Array (Empty Right Now)
  passwordArr = [];
  // if too few or too many are selected, or if cancel is clicked user will be restarted
  if (totalChars < 8) {
    alert("Password must be between 8 and 128 characters");
  } else if (totalChars > 128) {
    alert("Password must be between 8 and 128 characters");
  } else if (totalChars === null) {
    alert("Select a password length");
  } else {
    // Checks with user if they want certain character classes
    var chooseNum = confirm("Do you want Lowercase characters?");
    if (chooseNum === true) {
      // If they want a class, it is pushed into a master array.
      allSymbols.push(alphabet);
    }
    var chooseUpper = confirm("Do you want Uppercase characters?");
    // As people confirm whether or not theyd like certain characters it adds to allSymbols, a master array.
    if (chooseUpper === true) {
      allSymbols.push(upperalphabet);
    }
    // Code will continue to push arrays to master array
    var chooseNum = confirm("Do you want Numbers?");
    if (chooseNum === true) {
      allSymbols.push(numbers);
    }

    var chooseSymb = confirm("Do you want Symbols?");
    if (chooseSymb === true) {
      allSymbols.push(symbols);
    }
    // If no classes are selected, function is aborted.
    if (allSymbols.length === 0) {
      alert("You must select at least one character type");
      return;
    }
    // Loops same # of times as there are desired password characters
    for (let i = 0; i < totalChars; i++) {
      var charType = Math.floor(Math.random() * allSymbols.length);
      var charSelect = Math.floor(Math.random() * allSymbols[charType].length);
      passwordArr.push(allSymbols[charType][charSelect]);
      // This selects a random class from within the master array and a random character from within that class and pushes it into the password array
    }

    //if by chance a certain character type isn't included, this next loop should fix that
    console.log(passwordArr);
    var test = new Array (allSymbols.length)
    do{
    for (let i = 0; i < allSymbols.length; i++) {
      test[i] = passwordArr.some((v) => allSymbols[i].includes(v));
      if (passwordArr.some((v) => allSymbols[i].includes(v))) {
        // console.log(passwordArr.some(v => allSymbols[i].includes(v)) + " password test")
      } else {
        // console.log(passwordArr.some(v => allSymbols[i].includes(v)) + " password test")
        passwordArr[Math.floor(Math.random() * totalChars)] =
          allSymbols[i][Math.floor(Math.random() * allSymbols[i].length)];
      }
    }
    console.log(test)
    console.log(test.every(checkArray))
  }
    while (test.every(checkArray)!==true)
    // password array is changed to string
    var passwordchars = passwordArr.join("");
    console.log(passwordchars);

    for (let i = 0; i < allSymbols.length; i++) {
      var test = passwordArr.some((v) => allSymbols[i].includes(v));
    }
        // password pasted to text box
    console.log("--------------------------")
    document.getElementById("password").value = passwordchars;

  }

}
generateBtn.addEventListener("click", writePassword);
// Add event listener to generate button
