
let case11 = document.getElementById('case11');
let case12 = document.getElementById('case12');
let case13 = document.getElementById('case13');
let case14 = document.getElementById('case14');
let case15 = document.getElementById('case15');
let case21 = document.getElementById('case21');
let case22 = document.getElementById('case22');
let case23 = document.getElementById('case23');
let case24 = document.getElementById('case24');
let case25 = document.getElementById('case25');
let case31 = document.getElementById('case31');
let case32 = document.getElementById('case32');
let case33 = document.getElementById('case33');
let case34 = document.getElementById('case34');
let case35 = document.getElementById('case35');
let case41 = document.getElementById('case41');
let case42 = document.getElementById('case42');
let case43 = document.getElementById('case43');
let case44 = document.getElementById('case44');
let case45 = document.getElementById('case45');
let case51 = document.getElementById('case51');
let case52 = document.getElementById('case52');
let case53 = document.getElementById('case53');
let case54 = document.getElementById('case54');
let case55 = document.getElementById('case55');

var score = 00;
var tic = 0;
var snakeHeadPos = 33;
var snakeDirection = 'left';
var snakeFuturePos = 33;
var caseToModify = '';
var snakeLen = 2;
var snakeLog = ['case33']
var allTable = ['case11','case12','case13','case14','case15','case21','case22','case23','case24','case25','case31','case32','case33','case34','case35','case41','case42','case43','case44','case45','case51','case52','case53','case54','case55'];
var gameRunning = true;
var fruitEaten = false;
var fruitPos = String(allTable[Math.floor(Math.random() * allTable.length)]);;
document.getElementById(String(fruitPos)).style.backgroundColor = 'red';

window.addEventListener("keydown", function(event) {
    if (gameRunning == true) {
        console.log(event.key)
    if (event.key == 'ArrowUp' && snakeDirection != 'down') {
        snakeDirection = 'top';
        snakeHeadPos = snakeFuturePos;
    }
    else if (event.key == 'ArrowDown' && snakeDirection != 'top') {
        snakeDirection = 'down';
        snakeHeadPos = snakeFuturePos;
    }
    else if (event.key == 'ArrowLeft' && snakeDirection != 'right') {
        snakeDirection = 'left';
        snakeHeadPos = snakeFuturePos;
    }
    else if (event.key == 'ArrowRight' && snakeDirection != 'left') {
        snakeDirection = 'right';
        snakeHeadPos = snakeFuturePos;
    }
    console.log(snakeFuturePos);
    }
});

window.setInterval('display()', 1000);
function display() {
    if (gameRunning == true) {
        if (tic >= snakeLen && fruitEaten == false) {
                document.getElementById(String(snakeLog[1])).style.backgroundColor = 'white';
                snakeLog.shift();
        }
        else {fruitEaten = false}
    if (snakeDirection == 'top' && snakeHeadPos >20) {
        snakeFuturePos = snakeHeadPos - 10;
        snakeHeadPos = snakeFuturePos;
    }
    else if (snakeDirection == 'down' && snakeHeadPos <50) {
        snakeFuturePos = snakeHeadPos + 10;
        snakeHeadPos = snakeFuturePos;
    }
    else if (snakeDirection == 'left' && snakeHeadPos%10 >1) {
        snakeFuturePos = snakeHeadPos - 1;
        snakeHeadPos = snakeFuturePos;
    }
    else if (snakeDirection == 'right' && snakeHeadPos%10 <5) {
        snakeFuturePos = snakeHeadPos + 1;
        snakeHeadPos = snakeFuturePos;
    }
    else {
        gameRunning = false;
        console.log('t mort pd');
    }
    caseToModify = String(`case${snakeFuturePos}`);
    if (snakeLog.includes(caseToModify)) {
        gameRunning = false;
        console.log('t mort pd');
    }
    snakeLog.push(caseToModify);
    console.log(snakeLog);
    document.getElementById(caseToModify).style.backgroundColor = 'green';
    if (String(caseToModify) == String(fruitPos)) {
        fruitGeneration();
        fruitEaten = true;
        score ++
        if (score <=9) {
            score = `0${score}`;
        }
        document.getElementById('score').textContent = score;
    }
    if (tic>=1) {
        document.getElementById(String(snakeLog[snakeLog.length - 2])).style.backgroundColor = 'green';
    }
    document.getElementById(String(snakeLog[snakeLog.length - 1])).style.backgroundColor = 'darkgreen';
    }
    tic ++;
}

function fruitGeneration() {
    allTable = allTable.filter(val => !snakeLog.includes(val));
    console.log(allTable);
    fruitPos = String(allTable[Math.floor(Math.random() * allTable.length)]);
    document.getElementById(fruitPos).style.backgroundColor = 'red';
    allTable = ['case11','case12','case13','case14','case15','case21','case22','case23','case24','case25','case31','case32','case33','case34','case35','case41','case42','case43','case44','case45','case51','case52','case53','case54','case55']
}
