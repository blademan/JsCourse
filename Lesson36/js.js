window.onload = function() {

let btn = document.querySelector('.animate');
let blue = document.querySelector('.bluebox');


function myAnimation() {
    let blue = document.querySelector('.bluebox');
    let pos = 0;
    let id = setInterval(frame, 10);
    
    function frame() {
            
            blue.style.top = pos + 'px'; 
            blue.style.left = pos + 'px';
        pos++;
        if( pos == 300) {
            pos--;
            blue.style.top = pos + 'px'; 
            blue.style.left = pos + 'px';
             
    
     
    }
}
console.log(btn);
btn.addEventListener('click', myAnimation);
}
}