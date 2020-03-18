let computerMove, playerMove, randomNumber;

let	buttonTest = document.getElementById('button-test');
let	buttonRock = document.getElementById('button-rock');
let	buttonPaper = document.getElementById('button-paper');
let	buttonScissors = document.getElementById('button-scissors');

const buttonClicked = (argButtonName) => {
    clearMessages();
    console.log(argButtonName + ' zosta� klikni�ty');
    playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
};

function getMoveName(argMoveId) {
    console.log('wywo�ano funkcj� getMoveName z argumentem: ' + argMoveId);
    if (argMoveId === 1) {
        return 'kamie�';
    } else if (argMoveId === 2) {
        return 'papier';
    } else if (argMoveId === 3) {
        return 'no�yce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zak�adam, �e chodzi�o o "kamie�".');
        return 'kamie�';
    }
}

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywo�ano funkcj� displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove === 'papier' && argComputerMove === 'kamie�') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove === 'no�yce' && argComputerMove === 'papier') {
        printMessage('Wygrywasz!');
    }else if (argPlayerMove === 'kamie�' && argComputerMove === 'no�yce') {
        printMessage('Wygrywasz!');
    }else if (argPlayerMove === argComputerMove && argComputerMove === argPlayerMove) {
        printMessage('remis!');
    }else {
        printMessage('Przegrywasz :(');
    }
    printMessage('Zagra�em ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

buttonRock.addEventListener('click',function(){
    buttonClicked('kamie�');
});
buttonPaper.addEventListener('click',function(){
    buttonClicked('papier');
});
buttonScissors.addEventListener('click',function(){
    buttonClicked('no�yce');
});