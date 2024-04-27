function guessingGame() {
    const answer = Math.floor(Math.random() * 100);
    let guesses = 0;
    let isOver = false;
  
    return function(guess) {
      if (isOver) return "The game is over, you already won!";
  
      guesses++;
  
      if (guess === answer) {
        isOver = true;
        return `You win! You found ${answer} in ${guesses} guesses.`;
      } else if (guess < answer) {
        return `${guess} is too low!`;
      } else {
        return `${guess} is too high!`;
      }
    };
  }
  
  module.exports = { guessingGame };