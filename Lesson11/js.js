var block = document.getElementById('one');
// mouse click

// block.onclick = function () {
//     this.style.background = 'blue';
//     this.onclick = null;
// }

// double click

// block.ondblclick = function () {
//     this.style.background = 'blue';
// }


// right mouse click

// block.oncontextmenu = function () {
//     this.style.background = 'black';
//     return false;
// }


// block.onmouseenter = function() {
//     console.log('in!!!');
   
// }

// // mouse leave object
// block.onmouseleave = function() {
//     console.log('leave');
// }

var a = 0;
// block.onmousemove = function() {
//     a++;
//     this.style.width = 100 + a+'px';
// };

block.onmousedown = function(event) {
    this.style.background = 'green';
    console.log('button:' +event.button);
    console.log('which:' +event.which);
}