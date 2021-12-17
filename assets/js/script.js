var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
  
  function generatePassword() {
  
  //Asks userInput for num of char in password
  var numOfChar = prompt("How many characters would you like your password to be? (8-128)");
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
  var lowercase = confirm("Would you like to include lowercase letters? (a, b, c...)");
   if (lowercase) {
     userChoice=lowercaseLetters.concat(userChoice);
    }

  //If user chooses uppercase letters then concat to array userChoice
  var uppercase = confirm("Would you like to include uppercase letters? (A, B, C...)");
  if (uppercase) {
    userChoice=uppercaseLetters.concat(userChoice);
    }

  //If user chooses number then concat to array userChoice
  var numbersChoice= confirm("Would you like to include numbers? (1, 2, 3...)");
  if (numbersChoice) {
    userChoice=numbers.concat(userChoice);
  }

  //If user chooses special characters then concat to array userChoice
  var special = confirm("Would you like to include special characters? (!, @, #...)");
  if (special) {
    userChoice=specialCharacters.concat(userChoice);
    }
  if (!lowercase && !uppercase && !numbersChoice && !special){
    alert("You need to pick at least one set of characters!")
    return;
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
