var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
  
  function generatePassword() {
  
  //Asks userInput for num of char in password
  var numOfChar = prompt("enter the length of password");
  if (!(numOfChar >= 8 && numOfChar <= 128)) {
    alert("You must choose between 8 and 128 characters!")
    return;
  }
  
  //Variable arrays for different choices of characters
  var lowercaseLetters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
  var uppercaseLetters= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialCharacters= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]; 
  var numbers= [1,2,3,4,5,6,7,8,9,0];

  
  //userInput confirmation for numeric, lowercase, uppercase, special (separately)
  //If user chooses special characters then concat to array userChoice
  var userChoice= [];
  var lowercase = confirm("Would you like to include lowercase letters?");
   if (lowercase) {
     userChoice=lowercaseLetters.concat(userChoice);
    }

  //If user chooses uppercase letters then concat to array userChoice
  var uppercase = confirm("Would you like to include uppercase letters?");
  if (uppercase) {
    userChoice=uppercaseLetters.concat(userChoice);
    }

  //If user chooses number then concat to array userChoice
  var numbersChoice= confirm("Would you like to include numbers?");
  if (numbersChoice) {
    userChoice=numbers.concat(userChoice);
  }

  //If user chooses special characters then concat to array userChoice
  var special = confirm("Would you like to include special characters?");
  if (special) {
    userChoice=specialCharacters.concat(userChoice);
    }
  
//Takes concat array and randomly generates password from user choice of characters
var passwordGenerator = []; 
  for (var i = 0; i < parseInt(numOfChar); i++) {
    passwordGenerator.push(userChoice[Math.floor(Math.random() * userChoice.length)]) 
    console.log(passwordGenerator)
    console.log(typeof passwordGenerator)
  }
  return password=passwordGenerator.join("");
}
 //Button for user click
// generateBtn.addEventListener("click", writePassword);
