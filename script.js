// Assignment Code
var generateBtn = document.querySelector("#generate");
// Function used at bottom, checks if elements of an array equal the true boolean
function checkArray(arr) {
  return arr === true;
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
    alert("Please enter a number between 8 and 128");
  } else if (totalChars > 128) {
    alert("Please enter a number between 8 and 128");
  } else if (totalChars === null) {
    alert("Please enter a number between 8 and 128");
  } else if (totalChars>=8 && totalChars<=128) 
    {
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
    // This console log shows the current state of the array that is to be evaluated
    var test = new Array(allSymbols.length);
    do {
      for (let i = 0; i < allSymbols.length; i++) {
        test[i] = passwordArr.some((v) => allSymbols[i].includes(v));
        if (passwordArr.some((v) => allSymbols[i].includes(v))) {
          // If the char type is included in the password already it will evaluate the next character type.
        } else {
          passwordArr[Math.floor(Math.random() * totalChars)] =
            allSymbols[i][Math.floor(Math.random() * allSymbols[i].length)];
          // Otherwise a random character in the password is replaced by
          // a random character from the missing character type.
        }
      }
      // console logs to show whats going on-how the code is evaluating each password.
      console.log(test);
      console.log(test.every(checkArray));
    } while (test.every(checkArray) !== true);
    // This do while loop will continue checking code
    // until there is at least one of each character type
    // requested in the password.

    // Evaluated password array is changed to string.
    var passwordchars = passwordArr.join("");
    console.log(passwordchars);

    // This is to break up console analysis between consecutive password generations
    console.log("--------------------------");
    // Final password is pasted into the text box.
    document.getElementById("password").value = passwordchars;
  }
  // Final else checks for anything not a number
  else{
    alert("Please enter a number between 8 and 128")
  }
}
generateBtn.addEventListener("click", writePassword);
// Add event listener to generate button
