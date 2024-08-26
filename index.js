let startTime = 85; 
let currentTime = startTime;
let timerInterval;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const messageDisplay = document.getElementById("message");
const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");

function updateTimerDisplay() {
  let minutes = Math.floor(currentTime / 60);
  let seconds = currentTime % 60;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  timerDisplay.textContent = `${minutes}:${seconds}`;
}
function startStopTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    startStopBtn.textContent = "Start";
  } else {
    timerInterval = setInterval(() => {
      if (currentTime > 0) {
        currentTime--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        messageDisplay.style.display = "block";
      }
    }, 1000);
    startStopBtn.textContent = "Stop";
  }
  isRunning = !isRunning;
}
function resetTimer() {
  clearInterval(timerInterval);
  currentTime = startTime;
  updateTimerDisplay();
  messageDisplay.style.display = "none";
  startStopBtn.textContent = "Start";
  isRunning = false;
}

startStopBtn.addEventListener("click", startStopTimer);
resetBtn.addEventListener("click", resetTimer);

updateTimerDisplay(); 
