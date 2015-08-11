
// function acr(s){
//     var words, acronym, nextWord;

//     words = s.split(' ');
//     acronym= "";
//     index = 0
//     while (index<words.length) {
//             nextWord = words[index];
//             acronym = acronym + nextWord.charAt(0);
//             index = index + 1 ;
//     }
//     return acronym
// }





// def make_acronym(sentence)
//   return "Not a String" unless sentence.is_a?(String)

//    sentence.split.map do |word|
//     word[0].upcase
//   end.join
// end

// var makeAcronym = function(arg){
//   return arg.split(" ").map(function(word)




function makeAcronym(val){
  if(typeof val !== "string"){
    return "Not a String";
  }
  if(val.length !== 0 && val.match(/^[a-zA-Z ]+$/) === null) {
    return "Not Letters";
  }
  return val.split(" ").map(function(word) {return word.charAt(0).toUpperCase();
  }).join("");
}


console.log(makeAcronym("hello codewarrior"));