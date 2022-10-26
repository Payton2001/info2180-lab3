"use strict";

window.onload = function(){

    const X  = 'X'
    const O = 'O'
    const winOrder = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    let whoseTurn = X
    let state = ['','','','','','','','','']
    let gameRunning = true
    const btn = document.querySelector('button')
    const square = document.querySelectorAll('#board div')
    const status = document.getElementById('status')
    let count = square.length

    btn.addEventListener('click', gameBtn)

    for (let i = 0; i < count; i++){

        square[i].classList.add('square')
        square[i].addEventListener('click', function(){

        //gameRunning = true
            if(this.innerHTML != X && this.innerHTML != O){

                if(whoseTurn == 'X' && gameRunning == true){
                    this.innerHTML = X
                    this.classList.add(X)
                    state[i] = whoseTurn
                    whoseTurn = O
                    console.log(state)
                    if(isWinner(X) && gameRunning == true){
                        status.textContent = 'Congratulations! X is the winner!'
                        status.classList.add('you-won')
                        gameRunning = false
                        console.log(gameRunning)
                    }
                    isDraw()
                
                }
                else if (whoseTurn == 'O' && gameRunning == true){
                    this.innerHTML = O
                    this.classList.add(O)
                    
                    state[i] = whoseTurn
                    whoseTurn = X
                    console.log(state)
                    if(isWinner(O) && gameRunning == true){
                        status.textContent = 'Congratulations! O is the winner!'
                        status.classList.add('you-won')
                        gameRunning = false
                        console.log(gameRunning)
                    }
                    isDraw()
                    
                }
                if (gameRunning == false){
                    console.log(gameRunning)
                    return;
                }
            }
        })

        //Set Hover
        square[i].addEventListener('mouseover', function(){
            this.classList.add('hover')
        })
        square[i].addEventListener('mouseout', function(){
            this.classList.remove('hover')
        })

    }

    function isWinner(whoseTurn){
        return winOrder.some(arr =>{
            return arr.every(index =>{
                return square[index].classList.contains(whoseTurn)
            })
        })
    }

    function isDraw(){
        if((!isWinner(X) || !isWinner(O)) && !(state.includes(''))){
            status.textContent = 'There was no winner the game was a draw!'
            status.classList.add('status')
            gameRunning = false

        }
    }

    function gameBtn(){
        gameRunning = true
        whoseTurn = X
        state = ['','','','','','','','','']
        status.textContent = "Move your mouse over a square and click to play an X or an O."
        status.classList.remove('you-won')
        for (let a =0; a < count; a++){
            square[a].classList.remove(X)
            square[a].classList.remove(O)
            square[a].textContent =''
        }
        console.log('button clicked')
    }    
}
