const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const btnStart = document.querySelector(".btn_start");
const btnReset = document.querySelector(".btn_reset");

let nowHrs = 0;
if (hours.textContent === "") {
  hours.textContent = "00";
}

let nowMin = 0;
if (minutes.textContent === "") {
  minutes.textContent = "00";
}

function addMin() {
  nowMin += 1;
  seconds.textContent = textContent.length === 1 ? `0 + ${nowMin}` : nowMin;
}

let nowSec = 0;
if (seconds.textContent === "") {
  seconds.textContent = "00";
}

function addSec() {
  nowSec += 10;
  seconds.textContent = nowSec;
}

seconds.addEventListener("click", addSec);
