let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');

let hScore=0;
let gScore=0;

function hPlusOne(){
    hScore+=1;
    homeScore.textContent = hScore
}
function hPlusTwo(){
    hScore+=2;
    homeScore.textContent = hScore
}
function hPlusThree(){
    hScore+=3;
    homeScore.textContent = hScore
}

function gPlusOne(){
    gScore+=1;
    guestScore.textContent = gScore
}
function gPlusTwo(){
    gScore+=2;
    guestScore.textContent = gScore
}
function gPlusThree(){
    gScore+=3;
    guestScore.textContent = gScore
}

function newGame(){
    gScore = 0;
    guestScore.textContent = gScore;
    hScore=0;
    homeScore.textContent = hScore;
}