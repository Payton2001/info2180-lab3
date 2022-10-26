"use strict";

window.onload = function(){

    const X  = 'X';
    const O = 'O';
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
    let status = ['','','','','','','','',''];
    let gameRunning = false;
    const btn = document.getElementsByClassName('#btn');
    let square = document.querySelectorAll('#board div');
    let count = square.length;


    for (let i = 0; i < count; i++){
        square[i].classList.add('square');
        square[i].addEventListener('click', function(){
        
            gameRunning = true;
            if(whoseTurn == 'X'){
                this.innerHTML = X;
                this.classList.add(X);
                whoseTurn = O;
            
            }
            else if (whoseTurn == 'O'){
                this.innerHTML = O;
                this.classList.add(O);
                whoseTurn = X;
                
            }
        });

        //Set Hover
        square[i].addEventListener('mouseover', function(){
            this.classList.add('hover')
        });
        square[i].addEventListener('mouseout', function(){
            this.classList.remove('hover')
        })
    }
        
}
