let computerMove, playerMove, randomNumber;

let	buttonTest = document.getElementById('button-test');
let	buttonRock = document.getElementById('button-rock');
let	buttonPaper = document.getElementById('button-paper');
let	buttonScissors = document.getElementById('button-scissors');

const buttonClicked = (argButtonName) => {
    clearMessages();
    console.log(argButtonName + ' zosta³ klikniêty');
    playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
};

function getMoveName(argMoveId) {
    console.log('wywo³ano funkcjê getMoveName z argumentem: ' + argMoveId);
    if (argMoveId === 1) {
        return 'kamieñ';
    } else if (argMoveId === 2) {
        return 'papier';
    } else if (argMoveId === 3) {
        return 'no¿yce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zak³adam, ¿e chodzi³o o "kamieñ".');
        return 'kamieñ';
    }
}

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywo³ano funkcjê displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove === 'papier' && argComputerMove === 'kamieñ') {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove === 'no¿yce' && argComputerMove === 'papier') {
        printMessage('Wygrywasz!');
    }else if (argPlayerMove === 'kamieñ' && argComputerMove === 'no¿yce') {
        printMessage('Wygrywasz!');
    }else if (argPlayerMove === argComputerMove && argComputerMove === argPlayerMove) {
        printMessage('remis!');
    }else {
        printMessage('Przegrywasz :(');
    }
    printMessage('Zagra³em ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

buttonRock.addEventListener('click',function(){
    buttonClicked('kamieñ');
});
buttonPaper.addEventListener('click',function(){
    buttonClicked('papier');
});
buttonScissors.addEventListener('click',function(){
    buttonClicked('no¿yce');
});