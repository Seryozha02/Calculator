const leftButton = document.querySelector(".leftButton");
const centerButton = document.querySelector(".centerButton");
const rightButton = document.querySelector(".rightButton");
const num = document.getElementById("num");
const addAB = document.querySelector(".addAB");
const valueOfSum = document.getElementById("valueOfSum");
const inputNum1 = document.getElementById("inputNum1");
const inputNum2 = document.getElementById("inputNum2");
const plyus = document.querySelector(".plyus")
const equals = document.querySelector(".equals")

let i = 0;
leftButton.addEventListener("click", function minus() {
    i--;
    num.innerHTML = i;
});

rightButton.addEventListener("click", function pulus() {
    i++;
    num.innerHTML = i;
});

centerButton.addEventListener("click", function reset() {
    i = 0;
    num.innerHTML = i;
});

function add(a) {
    return function name(b) {
        return a + b;
    }
}

addAB.addEventListener("click", function() {
    plyus.innerText = "+"
    equals.innerText = "="
    let inputNum1Value = Number(inputNum1.value);
    let inputNum2Value = Number(inputNum2.value);
    valueOfSum.innerText = add(inputNum1Value)(inputNum2Value)
});

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();

function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
  }
  
  function pause() {
    clearInterval(cron);
  }
  
  function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '000';
  }
  function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
  }
  
  function returnData(input) {
    return input > 10 ? input : `0${input}`
  }