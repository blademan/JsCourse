var moveTo = 0;
var timer;
var test = document.getElementById('test');



function move() {
    test.style.marginLeft = moveTo + 'px';
    moveTo = moveTo +3;
    setTimeout(move, 30);
}

// var timer = setInterval(move, 50);
document.getElementById('stop').onclick = function() {
    clearInterval(timer);
};

// setTimeout(move, 5000);


var a = 10;
obr();
function obr() {
    document.getElementById('out').innerHTML = a;
    a--;
    timer = setTimeout(obr, 1000);
    if ( a < 0) {
       clearTimeout(timer);
       alert('bac bac');
    }
}