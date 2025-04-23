const timerEl = document.getElementById("timer");
const quadrantEl = document.getElementById("quadrantEl");
const startBtn = document.getElementById("start-btn");
const messageEl = document.getElementById("message");
let time = 25 * 60;
letIntervalId = "";
let stage = 1;


// Updating timer
function updateTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerEl.innerHTML = `${minutes}:${seconds}`;

    time--;
    
    if (time < 0) {
        clearInterval(intervalId);
        newStage();
    }
}

// Initial start functionality
function initialStart() {
    // New stage
    stage = (stage % 9) + 1; // Increment stage number
    document.body.id = `bg-${stage}`; // Update background
    getTime();
    quadrantEl.innerText = `${Math.floor(stage / 2)}/4`;
    updateTimer();

    // Change it to pause button
    startTimer();
}

// Starts the timer
function startTimer() {
    intervalId = setInterval(updateTimer, 1000);

    // Change it to pause button
    startBtn.setAttribute("onClick", "pause()");
    startBtn.innerText = "pause";
}

function getTime() {
    if (stage === 1){ // initial page
        time = 0;
    }
    else if (stage === 9) { // long break
        time = 15 * 60;
        messageEl.innerText = "time for a long break";
    }
    else if (stage % 2 === 0) { // pomo time
        time = 25 * 60;
        messageEl.innerText = "let's focus";
    }
    else { // short break
        time = 5 * 60;
        messageEl.innerText = "time for a break";
    }
}

function newStage() {
    stage = (stage % 9) + 1; // Increment stage number
    document.body.id = `bg-${stage}`; // Update background
    getTime();
    quadrantEl.innerText = `${Math.floor(stage / 2)}/4`;
    updateTimer();
    clearInterval(intervalId); // Pause timer
}

function pause() {
    clearInterval(intervalId);

    // Change it to start button
    startBtn.setAttribute("onClick", "startTimer()");
    startBtn.innerText = "start";
}

function skip() {
    newStage();

    // Change it to start button
    startBtn.setAttribute("onClick", "startTimer()");
    startBtn.innerText = "start";
}