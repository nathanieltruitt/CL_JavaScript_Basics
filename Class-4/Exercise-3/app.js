const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const reset = document.querySelector("#reset");
let timerRunning = true;
let interval;
// create functions
function startTimer() {
  if (!(interval === null || interval === undefined)) return;
  timerRunning = true;
  interval = setInterval(() => {
    let counter = Number(second.innerText);
    // stop the timer if timerRunning
    if (timerRunning === false) return;

    if (counter < 59) {
      second.innerText = counter < 9 ? `0${counter + 1}` : counter + 1;
      counter = counter + 1;
    } else {
      second.innerText = "00";
      counter = 0;
      minute.innerText =
        Number(minute.innerText) < 9
          ? `0${Number(minute.innerText) + 1}`
          : Number(minute.innerText) + 1;
    }
  }, 1000);
}

function resetTimer() {
  timerRunning = false;
  clearInterval(interval);
  interval = null;
  minute.innerText = "00";
  second.innerText = "00";
}

// event listeners
start.addEventListener("click", startTimer);
stop.addEventListener("click", () => {
  timerRunning = false;
  clearInterval(interval);
  interval = null;
});
reset.addEventListener("click", resetTimer);
