const computerChoiceDispay = document.getElementById('computer-choice')
const userChoiceDispay = document.getElementById('user-choice')
const resultDispay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')

let computerChoice
let userChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDispay.innerHTML = userChoice

    generateRandomComputerChoice()
    getResult()
}))

function generateRandomComputerChoice() {
    const randNum = Math.floor(Math.random() * possibleChoices.length) + 1
    switch (randNum) {
        case 1:
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'scissors';
            break;
    }
    computerChoiceDispay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice) {
        result = 'Its a draw!'
    }
    if(computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You won!'
    }
    if(computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'You lost!'
    }
    if(computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lost!'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You won!'
    }
    if(computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You won!'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lost!'
    }
    resultDispay.innerHTML = result
}