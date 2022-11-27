const p = document.querySelector("#player")
const c = document.querySelector("#computer")

p.children[0].src = "./images/question.jpg";
c.children[0].src = "./images/question.jpg";

const pvp_buts = document.getElementsByClassName('game-but')

var recent_click = ''

for (var i=1;i<4;i++) {
    pvp_buts[i].addEventListener('click', () => {
        console.log(pvp_buts[i].id)
        recent_click = pvp_buts[i].id
    })
}

function getComputerSelection() {
    return Math.floor(Math.random()*3)

}

function getPlayerSelection() {
    return recent_click == '' ? 'paper' : recent_click;
    
}

rps_dict = {'rock': 0, 'paper': 1, 'scissors': 2,
            2: 'scissors', 1: 'paper', 0 : 'rock'
}

function playRound(timer, interval) {
    var comp = getComputerSelection();
    var player = getPlayerSelection();

    var playerNum = rps_dict[player.toLowerCase()]

    console.log(`You picked ${player}, the computer picked ${rps_dict[comp]}`)

    if (playerNum==comp) {
        return 'Tie';
    } 
    else if (checkPlayerWin(comp, playerNum)) {
        timer.innerHTML = 'Player Wins';
    } else {
        timer.innerHTML = 'Computer Wins';
    }

    clearInterval(interval)
}

function checkPlayerWin(comp, player) {
    if (player==comp+1) return true;
    if (comp==2&&player==0) return true;
    return false; 
}

function game() {
    for (var i=0;i<5;i++) console.log(playRound());
}

var loaded = false;

const play = document.querySelector('#play')
play.addEventListener('click', () => {
    // show PvP on HTML
    var game = document.getElementsByClassName('game')[0];
    game.className = 'game'

    // time the game
    var timer = document.getElementById('timer');
    time_interval = setInterval(() => {updateTimer(timer)}, 1000);

    // end the game after 3 secs 
    setTimeout(() => {playRound(timer, time_interval)}, 3000);
})

function updateTimer(timer) {
    curr = timer.innerHTML
    new_time = parseInt(curr) - 1
    timer.innerHTML = new_time
}

// game();

