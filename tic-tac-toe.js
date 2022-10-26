//let whoseTurn = X;
const X  = 'x';
const O = 'o';
const winOrder = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let whoseTurn = X;
let gameState = ['','','','','','','','','']
let gameRunning = false;
const btn = document.getElementsByClassName('#btn')
let square = document.querySelectorAll('#board div')
let count = square.length


window.onload = function(){
    setGrid();
}


function setGrid(){
    for (let i = 0; i < count; i++){
        square[i].className = 'square'
        square[i].classList.add('square')
        square[i].addEventListener('click', startGame())
        
    }
}