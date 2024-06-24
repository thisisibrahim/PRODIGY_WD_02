
let startBtn = document.querySelector('.btn-start');
let stopBtn = document.querySelector('.btn-stop');
let resetBtn = document.querySelector('.btn-reset');
let timer;

let tens = 0;
let seconds = 0;

startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
});

resetBtn.addEventListener('click', function () {
    timer = false;
    tens = 0;
    seconds = 0;

    document.querySelector('.tens').innerHTML = "00";
    document.querySelector('.seconds').innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        tens++;

        if (tens == 100) {
            seconds++;
            tens = 0;
        }

        let secString = seconds;
        let tenString = tens;

        if (seconds < 10) {
            secString = "0" + secString;
        }

        if (tens < 10) { 
            tenString = "0" + tenString;
        }

        document.querySelector('.seconds').innerHTML = secString;
        document.querySelector('.tens').innerHTML = tenString; 
                setTimeout(stopWatch, 10);
    }
}