window.onload = function(){

var foto = document.querySelectorAll('.photos img');
    
var newSlider = new Slider(foto);
    
    
    var back =  document.querySelector('.back');
    
back.onclick = function() {
        newSlider.prev();
    }
        document.querySelector('.next').onclick = function() {
        newSlider.next();
    }



 function Slider(foto) {
     this.foto = foto;
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