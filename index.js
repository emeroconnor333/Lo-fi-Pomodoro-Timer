const countdownEl = document.getElementById("countdown");
const startBtn = document.getElementById("start-btn");
const quadrantEl = document.getElementById("quadrantEl");
let paused = 1;
let intervalId = "";
let time = 0;
let stage = 1;

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time < 0) {
        clearInterval(intervalId);
    }
}

function incrementStage() {
    stage = (stage % 9) + 1; // Increment stage number
    document.body.id = `bg-${stage}`; // Update background
    // Update time
    if (stage === 1){
        console.log("Initial page");
        quadrantEl.innerText = "1/4";
        time = 0;
    }
    else if (stage === 9) {
        console.log("Long break");
        time = 15 * 60;
    }
    else if (stage % 2 === 0) {
        console.log("pomo time");
        quadrantEl.innerText = `${stage / 2}/4`;
        time = 25 * 60;
    }
    else {
        console.log("short break");
        time = 5 * 60;
    }
}

function startTimer(){
    incrementStage();
    if (paused === 1) {
        paused = 0;

        let startingMinutes = 25;
        time = startingMinutes * 60;
        
        intervalId = setInterval(updateCountdown, 1000);

        startBtn.innerText = "reset";
    }
    else {
        paused = 1;
        clearInterval(intervalId);
        startBtn.innerText = "start";
        document.getElementById("countdown").innerText = "25:00";
    }
    
}

function skip() {
    console.log("skip!");
    incrementStage();
}