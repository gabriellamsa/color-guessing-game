const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];

function runGame() {
    let guess = '';
    let correct = false;
    let numTries = 0;
    const targetIndex = Math.floor(Math.random() * COLORS_ARRAY.length);
    const target = COLORS_ARRAY[targetIndex];
    console.log(target); // Log the target color to the console for testing
    
    do {
        guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY.sort().join(', ') + '\n\nWhat color am I thinking of?\n').toLowerCase();
        
        if (guess === null) {
            alert('Game cancelled.\n\nGoodbye!');
            return;
        }
        
        numTries++;
        correct = checkGuess(guess, target, numTries);
    } while (!correct);

    alert('Congratulations! You guessed the color ' + target + ' correctly in ' + numTries + ' guesses!\n\nHit OK to see the color in the background.');
    document.body.style.background = target;
}

function checkGuess(guess, target, numTries) {
    let correct = false;
    let hint = '';

    if (!COLORS_ARRAY.includes(guess)) {
        alert('Sorry, I don\'t recognize that color.\n\nPlease, try again.');
    } else if (guess < target) {
        hint = 'Sorry, your guess is incorrect.\n\nHint: your color is alphabetically lower than mine.\n\nPlease, try again.';
    } else if (guess > target) {
        hint = 'Sorry, your guess is incorrect.\n\nHint: your color is alphabetically higher than mine.\n\nPlease, try again.';
    } else {
        correct = true;
    }

    if (!correct) {
        alert(hint);
    }
    return correct;
}