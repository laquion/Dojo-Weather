var cookie = document.querySelector(".cookie-policy");

function yes() {
    cookie.remove();
}

function load() {
    alert("Loading weather report...")
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function calculate(element) {
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = f2c(tempVal);
        } else {
            tempSpan.innerText = c2f(tempVal);
        }
    }
}