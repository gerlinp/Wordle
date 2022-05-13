// VISUAL
let board = document.querySelector('#board') // guesses board
let curBox = 0 // Starting letter placement
let curGuess = [] // Array for Guess word
let curWord = ''// current Word
let guesses = 0 // guesses made
let max = 0 // count for max letters in guess
let match = getRandomWord().toUpperCase().split('')
let solved = false
let loss = false
console.log(match)
const keys = document.querySelectorAll('button')



// function to create board
function makeBoard() {
    for (let i = 0; i < 30; i++) {
        board.innerHTML += `<div class="square box${i}"></div>`
    }
}
makeBoard(); // Creating the Board


// keyboard functions
for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = ({ target }) => {
        const letter = target.getAttribute("data-key")
        if (letter === 'enter') {
            makeGuess()
        } else if ( letter === 'del') {
            delGuess()
        } else {
            guess(letter)
        }
    }
}

// Function that picks a random word
function getRandomWord() {
    let random = Math.floor(Math.random() * wordList.length);
    return wordList[random]
}


// Add Letter
function guess(letter) {
    if ( max < 5) {
        document.querySelector(`.box${curBox}`).innerHTML = letter
        curBox++;max++;
        curGuess.push(letter)
    }
}
// Delete last Letter
function delGuess() {
    if (max > 0) {
        curBox--; max--;
        document.querySelector(`.box${curBox}`).innerHTML = ''
        curGuess.pop()
    }
}
//Make a Guess
function makeGuess() {
    
    if (max == 5) {
        if (wordList.includes(curGuess.join(''))) {
            let order = curBox - 5;
            for (let i = 0; i < 5; i++) {
                order++
                checkGuess(curGuess[i],i, order)
            }
            console.log(curGuess.join(''))
            curGuess = []
            max = 0
        } else {
            console.log('Not in word list')
        }
    }
}

function checkGuess(letter, index, box) {
    if (match.includes(letter)) {
        if (letter == match[index]) {
            document.querySelector(`.box${box - 1}`).classList.add('green')
            document.querySelector(`[data-key="${letter}"]`).classList.add('green')
        } else {
            document.querySelector(`.box${box - 1}`).classList.add('yellow')
            document.querySelector(`[data-key="${letter}"]`).classList.add('yellow')
        }
    } else {
        document.querySelector(`[data-key="${letter}"]`).classList.add('gray')
        document.querySelector(`.box${box - 1}`).classList.add('gray') 
    }
} 







