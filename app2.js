// const char = String.fromCharCode(122);
// console.log(Math.floor(Math.random() * 26 + 97));
function Password(length, adlowerCase, adUpperCase, adNum, adSymbols){
  const lowerCase = "asdfghjklqwertyuiopzxcvbnm";
  const UpperCase = "ASDFGHJKLQWERTYUIOPZXCVBNM";
  const Num = "0123456789";
  const Symbols = "@!#$%^&*()_+}|=--*/";

  let characters = "";
  let password = "";

  characters += adlowerCase ? lowerCase : "";
  characters += adUpperCase ? UpperCase : "";
  characters += adNum ? Num: "";
  characters += adSymbols ? Symbols : "";

  if(length <= 0){
    return`(password must be at least 1 character)`;
  }

  for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;

}

const passwordLength = 6;
const lowerCase = true;
const UpperCase = true;
const Num = true;
const Symbols = true;

const PassWord = Password(passwordLength, lowerCase, UpperCase, Num, Symbols);

console.log(`your password is ${PassWord}: `);