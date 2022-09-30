function getComputerSelection() {
    return Math.floor(Math.random()*3)

}

function getPlayerSelection() {
    return prompt();
}

rps_dict = {'rock': 0, 'paper': 1, 'scissors': 2,
            2: 'scissors', 1: 'paper', 0 : 'rock'
}

function playRound() {
    var comp = getComputerSelection();
    var player = getPlayerSelection();

    var playerNum = rps_dict[player.toLowerCase()]

    console.log(`You picked ${player}, the computer picked ${rps_dict[comp]}`)

    if (playerNum==comp) {
        return 'Tie';
    } 
    else if (checkPlayerWin(comp, playerNum)) {
        return 'Player Wins';
    } else {
        return 'Computer Wins';
    }
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

const play = document.querySelector('.play-but')
play.addEventListener('click', () => {
    playRound();
})

function updateTimer(time) {
    return time-=1
}

// game();