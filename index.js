const countdownEl = document.getElementById("countdown");
const startBtn = document.getElementById("start-btn");
let paused = 1;
let intervalId = "";



function startTimer(){
    if (paused === 1) {
        paused = 0;

        let startingMinutes = 25;
        let time = startingMinutes * 60;
        
        intervalId = setInterval(updateCountdown, 1000);
        function updateCountdown() {
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;

            seconds = seconds < 10 ? '0' + seconds : seconds;

            countdownEl.innerHTML = `${minutes}:${seconds}`;
            time--;
            if (time < 0) {
                clearInterval(intervalId);
            }
            return time;
        }

        startBtn.innerText = "reset";
    }
    else {
        paused = 1;
        clearInterval(intervalId);
        startBtn.innerText = "start";
    }
    
}