// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // console.log("testing"); to make sure button is working
  var password = generatePassword();
  // console.log(generatePassword)
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
  
  function generatePassword() {
  
  //add "prompt function" for userInput for num of char in password
  var numOfChar = prompt("enter the length of password");
  if (!(numOfChar >= 8 && numOfChar < 128)) {
    alert("You must choose between 8 and 128 characters!")
    return;
  }
  // console.log(numOfChar);
  //  to make sure data is stored in num of char
  
  var lowercaseLetters= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
  var uppercaseLetters= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialCharacters= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]; 
  var numbers= [1,2,3,4,5,6,7,8,9,0];
  // console.log(uppercaseLetters);
  
  //userInput confirmation for numeric, lowercase, uppercase, special (separately)
  var userChoice= [];
  var lowercase = confirm("Would you like to include lowercase letters?");
  // console.log(lowercase);
   if (lowercase) {
     userChoice=lowercaseLetters.concat(userChoice);
     
    //  console.log(userChoice);

   }
  
  var uppercase = confirm("Would you like to include uppercase letters?");
  // console.log(uppercase);
  if (uppercase) {
    userChoice=uppercaseLetters.concat(userChoice);
    
    // console.log(userChoice);

  }

  var numbersChoice= confirm("Would you like to include numbers?");
  // console.log(numbersChoice);
  if (numbersChoice) {
    userChoice=numbers.concat(userChoice);
    
    // console.log(userChoice);

  }

  var special = confirm("Would you like to include special characters?");
  // console.log(special);
  if (special) {
    userChoice=specialCharacters.concat(userChoice);
    
    console.log(userChoice);

  }



  //save those confirmations in separate variables
  // store all the values in form of arrays
  // var userInput = {
    // userLowercase: lowercase,
    // userUppercase: uppercase,
    // userNumbers: numbersChoice,
    // userSpecial: special,
  
  // }
  // console.log(userInput) 

  //concat array
  

// var random = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
//   console.log("Random:", random);
// console.log(numOfChar)
// console.log(typeof numOfChar)
// console.log(numOfChar.length)
  

//if I call this password will it enter the password into box

var pleaseWork = []; 
  for (var i = 0; i < parseInt(numOfChar); i++) {
    pleaseWork.push(userChoice[Math.floor(Math.random() * userChoice.length)]) 
    console.log(pleaseWork)
    console.log(typeof pleaseWork)
  }
  
  // password=pleaseWork.join("");
  return password=pleaseWork.join("");
  
  
  
  
 

      //generate random num for concat array and grab the item
  //push that item in new password array
  // return new password
}
 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
