// Assignment code here
function generatePassword() {
  /*ask the user for the the desired length and verify that the answer is valid*/
  var length = prompt(`How long do you want your password to be?
Your password must be between 8 characters and 128 characters`);
  console.log(length)
  /* ask the user about lowercase */
  /*ask about uppercase*/
  /*ask about numeric*/
  /*ask about special characters*/
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
