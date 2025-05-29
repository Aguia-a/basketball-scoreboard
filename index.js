let counterElHome = document.getElementById("counter-el-home");
let counterElGuest = document.getElementById("counter-el-guest");
let scoreHome = 0;
let scoreGuest = 0;

updateScore();

function updateScore() {
    if(scoreHome < 0) {
        scoreHome = 0;
    } else if(scoreHome > 99) {
        scoreHome = 99;
    }
    if(scoreGuest < 0) {
        scoreGuest = 0;
    } else if(scoreGuest > 99) {
        scoreGuest = 99;
    }
    counterElHome.textContent = scoreHome; 
    counterElGuest.textContent = scoreGuest;
}

/*-HOME COUNTER START-*/
//ADD FUNCTIONS
function add1Home() {
    scoreHome += 1;
    updateScore();
}

function add2Home() {
    scoreHome += 2;
    updateScore();
}

function add3Home() {
    scoreHome += 3;
    updateScore();
}
// DEL FUNCTIONS
function del1Home() {
    scoreHome -= 1;
    updateScore();
}

function del2Home() {
    scoreHome -= 2;
    updateScore();
}

function del3Home() {
    scoreHome -= 3;
    updateScore();
}
/*-HOME COUNTER END-*/

/*-GUEST COUNTER START-*/
//ADD FUNCTIONS
function add1Guest() {
    scoreGuest += 1;
    updateScore();
}

function add2Guest() {
    scoreGuest += 2;
    updateScore();
}

function add3Guest() {
    scoreGuest += 3;
    updateScore();
}

// DEL FUNCTIONS
function del1Guest() {
    scoreGuest -= 1;
    updateScore();
}

function del2Guest() {
    scoreGuest -= 2;
    updateScore();
}

function del3Guest() {
    scoreGuest -= 3;
    updateScore();
}
/*-GUEST COUNTER END-*/

/*-RESET FUNCTION START-*/
function reset() {
    scoreHome = 0;
    scoreGuest = 0;
    
    updateScore();
}
/*-RESET FUNCTION END-*/