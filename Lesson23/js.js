window.onload = function(){

var back = document.querySelector('.back');
var next = document.querySelector('.next');
var foto = document.querySelectorAll('.photos img');

var i = 0;
    
    next.onclick = function() {
        foto[i].className= '';
        i++;
         if ( i >= foto.length) {
            i = 0;
        }
        foto[i].className= 'show';
       
    }
    
     
    back.onclick = function() {
        foto[i].className= '';
        i--;
         if ( i < 0) {
            i = foto.length -1;
        }
        foto[i].className= 'show';
       
    }
}