
//Red
function manual(){
document.getElementById("red").addEventListener("click", redlight);
function redlight() {
    document.getElementById("red").classList.add("darkRed");
    document.getElementById("red").classList.remove("lightRed");
    document.getElementById("yellow").classList.add("lightYellow");
    document.getElementById("green").classList.add("lightGreen");
}

//Yellow
document.getElementById("yellow").addEventListener("click", yellowlight);
function yellowlight() {
    document.getElementById("red").classList.add("lightRed");
    document.getElementById("red").classList.remove("darkRed");
    document.getElementById("yellow").classList.add("darkYellow");
    document.getElementById("yellow").classList.remove("lightYellow")
    document.getElementById("green").classList.add("lightGreen");
}

//Green
document.getElementById("green").addEventListener("click", greenlight);
function greenlight() {
    document.getElementById("red").classList.add("lightRed");   
    document.getElementById("yellow").classList.add("lightYellow");
    document.getElementById("yellow").classList.remove("darkYellow")
    document.getElementById("green").classList.add("darkGreen");
    document.getElementById("green").classList.remove("lightGreen");
}
document.getElementById("heading").innerHTML = "Operate the Signals Manually"
document.getElementById("signalTimer").innerHTML = " "
}


var interval;
var time = 0;
var red = 10;
var yellow =4;
var green = 10;

function auto() {
    interval = setInterval (function(){
    time++;
    red--
    document.getElementById("signalTimer").innerHTML = red;
    
    document.getElementById("red").classList.add("darkRed");
    document.getElementById("red").classList.remove("lightRed");
    document.getElementById("yellow").classList.add("lightYellow");
    document.getElementById("green").classList.add("lightGreen");
    
    if (time > 9 && time <= 13) {
        yellow--;
        document.getElementById("signalTimer").innerHTML = yellow
        document.getElementById("red").classList.add("lightRed");
        document.getElementById("red").classList.remove("darkRed");
        document.getElementById("yellow").classList.add("darkYellow");
        document.getElementById("yellow").classList.remove("lightYellow")
        document.getElementById("green").classList.add("lightGreen");
    }
    
    if (time > 13 && time < 24 ) {
        green--;
           document.getElementById("signalTimer").innerHTML = green
        document.getElementById("red").classList.add("lightRed");   
    document.getElementById("yellow").classList.add("lightYellow");
    document.getElementById("yellow").classList.remove("darkYellow")
    document.getElementById("green").classList.add("darkGreen");
    document.getElementById("green").classList.remove("lightGreen");
    }

    if (time == 24) {
        time = 0;
        red = 10;
        yellow =4;
        green = 10;
        document.getElementById("signalTimer").innerHTML = red;
    }
} , 1000)
document.getElementById("heading").innerHTML = "Automatic Operation is Running"
}

function stop () {
    clearInterval(interval)
    document.getElementById("heading").innerHTML = "Start Manual or Automatic Operation"
}