var block = document.getElementById('test');
var left = 0;
var top1 = 0;
var right1 = 0;
var bottom1 = 0;


document.onkeydown = function (event) {
    console.log(event);
    if(event.key == 'ArrowRight') {
block.style.left = left + 'px';
left = left +5;
    }
    if (event.key == 'ArrowLeft') {
        block.style.left = left + 'px';
      left=   left-5;
    }
    if(event.key == 'ArrowDown') {
        block.style.top = top1 + 'px';
        top1 =top1+5;
    }


    if (event.key == 'ArrowUp') {
        block.style.top = top1 +'px';
       top1 = top1-5;
    }
};