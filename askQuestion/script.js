var correctAnswer = 0;
var question1 = prompt('What is the name of the star in our solar system?');
var question2 = prompt('Is it raining today?');
var question3 = prompt('What is the chemical symbol of water?');
var question4 = prompt('Does UK have a king or a queen?');
var question5 = prompt('Am I beautiful?');

if (question1.toLowerCase() === 'sun' ){
  correctAnswer +=1;
}
if (question2.toLowerCase() === 'no' ){
  correctAnswer +=1;
}
if (question3.toLowerCase() === 'h2o' ){
  correctAnswer +=1;
}
if (question4.toLowerCase() === 'queen' ){
  correctAnswer +=1;
}
if (question5.toLowerCase() === 'no' ){
  correctAnswer +=1;
}
console.log(correctAnswer);
document.write('<p style="color: black; background-color: red; font-weight: bold;">You have answered ' + correctAnswer + ' correct answers!</p>' )
if (correctAnswer === 5){
  document.write('<h1>Congratulations. You have won the GOLD Crown! You are the best!!</h1>');
} else if (correctAnswer === 3 || correctAnswer === 4 ){
  document.write('<h2>You have earned the SILVER Crown</h2>');
} else if (correctAnswer <= 2 ){
  document.write('<h2>Oh.. :( <br> You have the BRONZE Crown. <br>Maybe you can melt it!<br> :P </h2>');
}
