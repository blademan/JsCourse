window.onload = function(){

var foto = document.querySelectorAll('.gal1 img');  
    
var foto2 = document.querySelectorAll('.gal2 img');

var newSlider = new Slider(foto);
    
document.querySelector('.gal1 .buttons .back').onclick = function() {
        newSlider.prev();
    }
        document.querySelector('.gal1 .buttons .next').onclick = function() {
        newSlider.next();
    }
        
        var newSlider2 = new Slider(foto2);
    
document.querySelector('.gal2 .back').onclick = function() {
        newSlider2.prev();
    }
        document.querySelector('.gal2 .next').onclick = function() {
        newSlider2.next();
    }



 function Slider(foto) {
     var xthis.foto = foto;
     var i = 0;
     
     this.prev = function () {
         this.foto[i].classList.remove('show');
         i--;
         if(i < 0) {
             i = this.foto.length - 1;
         }
         this.foto[i].classList.add('show');
     }
     
     this.next = function () {
         this.foto[i].classList.remove('show');
         i++;
         if(i >= this.foto.length) {
             i = 0;
         }
         this.foto[i].classList.add('show');
     }
     
 }   
}