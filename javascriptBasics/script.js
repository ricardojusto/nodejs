// random number guessing game
    // var randomNumber = Math.floor(Math.random() * 6) + 1;
    // var guess = prompt('i am thinking of a number between 1 and 6. what is it?');
    // if (parseInt(guess)=== randomNumber) {
    //   document.write('<p>You guessed the number!</p>');
    // }else{
    //   document.write("<p>I' m sorry. The number was " + randomNumber + '</p>');
    // }

  var correctGuess = false;
  var randomNumber = Math.floor(Math.random() * 6 ) + 1;
  var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
  if (parseInt(guess) === randomNumber ) {
    correctGuess = true;
  } else if ( parseInt(guess) < randomNumber){
    var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess);
      if (parseInt(guessMore) === randomNumer){
        correctGuess = true;
      }
  }else if ( parseInt(guess) > randomNumber){
    var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
      if (parseInt(guessLess) === randomNumer){
        correctGuess = true;
      }
  }
  if ( correctGuess ) {
      document.write('<p>You guessed the number!</p>');
  } else {
      document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
  }
