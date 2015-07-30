// Write a "isVowel" function that receives a string character and returns true/false.



// function isVowel(str) {
//   if ((str == "a")||(str == "e")||(str == "i")||(str == "o")||(str == "u")){ »»»»»»»podemos ter só um parentesis
//     return true;
//   }
//   else {
//     return false;
//   }
// }

// console.log(isVowel("x"));
// console.log(isVowel("a"));
// console.log(isVowel("i"));
// console.log(isVowel("z"));

//_________another option_______________


// function str(val){
//   switch(val) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         return true
//         break;    
//     default:
//         return false;
//   }
// }

// console.log(str("a"));

//_________another option_______________

// function isVowel(str) {
//   var vowels = ["a","e","i","o","u"];
//   return vowels.indexOf(str) != -1; //usamos o indeof para encontrar algo no array
// }

// console.log(isVowel("x"));
// console.log(isVowel("a"));

//_________another option_______________

// function isVowel(str) {
//   var vowels = "aeiou";
//   return vowels.indexOf(str) != -1; //usamos o indeof para encontrar algo na string
// }

// console.log(isVowel("x"));
// console.log(isVowel("a"));

//_________another option_______________

function isVowel(str) {
  
  return "aeiou".indexOf(str) != -1; //usamos o indeof para encontrar algo na string
}

console.log(isVowel("x"));
console.log(isVowel("a"));