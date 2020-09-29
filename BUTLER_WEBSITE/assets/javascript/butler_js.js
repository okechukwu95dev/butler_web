var R1A = document.querySelector('#R1A');
var R1B = document.querySelector('#R1B');
var R1C = document.querySelector('#R1C');


var R2A = document.querySelector('#R2A');
var R2B = document.querySelector('#R2B');
var R2C = document.querySelector('#R2C');

var R3A = document.querySelector('#R3A');
var R3B = document.querySelector('#R3B');
var R3C = document.querySelector('#R3C');


var turn_blue = function(x) {
    document.body.style.background = '#3E729F';
}

var turn_black = function (x) {
    document.body.style.background = "#522f92";
}

var turn_green = function (x) {
    document.body.style.background = "#84db5c";
}

var turn_orange = function (x) {
    document.body.style.background = "#ff9332";
}

var turn_purple = function (x) {
    document.body.style.background = "#c13daf";
}

var turn_sblue = function (x) {
    document.body.style.background = "#5498df";
}

var turn_lpink = function (x) {
    document.body.style.background = "#b042e8";
}




R1A.addEventListener('dblclick', turn_blue);
R1B.addEventListener('dblclick', turn_black);
R1C.addEventListener('dblclick', turn_green);
R2A.addEventListener('dblclick', turn_orange);
R2B.addEventListener('dblclick', turn_purple);
R2C.addEventListener('dblclick', turn_sblue);
R3A.addEventListener('dblclick', turn_lpink);
R3B.addEventListener('dblclick', turn_blue);
R3C.addEventListener('dblclick', turn_purple);

