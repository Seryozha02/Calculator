const leftButton = document.querySelector(".leftButton");
const centerButton = document.querySelector(".centerButton");
const rightButton = document.querySelector(".rightButton");
const num = document.getElementById("num");
const addAB = document.querySelector(".addAB");
const valueOfSum = document.getElementById("valueOfSum");
const inputNum1 = document.getElementById("inputNum1");
const inputNum2 = document.getElementById("inputNum2");
const plyus = document.querySelector(".plyus");
const equals = document.querySelector(".equals");
const fibonLeft = document.querySelector(".fibonLeft");
const fibonRight = document.querySelector(".fibonRight");


function Counter() {
    let count = 0;
    this.up = function () {
        return ++count;
    }
    this.down = function () {
        return --count;
    }
    this.reset = function () {
        return count = 0;
    }
}

let counter = new Counter();
leftButton.addEventListener("click", function() {
    num.innerHTML = counter.down();
});

rightButton.addEventListener("click", function() {  
   num.innerHTML = counter.up();
    });

centerButton.addEventListener("click", function() {
    
    num.innerHTML = counter.reset();

});


//////////
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
//taymer start
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
//taymer end

fibonLeft.addEventListener("click", function() {
    document.getElementById("inputNumFibo").value = "";
    n = 0;
});

let n = 0;
fibonRight.addEventListener("click", function() {
    n++

    function fibonacci(n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
    fibonacci(n);
    document.getElementById("inputNumFibo").value = fibonacci(n);
});