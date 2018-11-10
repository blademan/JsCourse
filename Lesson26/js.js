window.onload = function(){

var items = document.querySelectorAll('.wrapper .box');
var itemsNone = 0;
var gameTime =document.querySelector('.time');
var timer = new Timer(0, gameTime);
    
    
    
 function activeItem() {
     this.classList.toggle('item--active');
 }
 
 var runBorder = setInterval(function() {
     var rand = mtRand(0, items.length -1);
     activeItem.call(items[rand]);
 }, 200) ;
    
    var gameTime = setInterval(function() { 
        timer.tick();
    }, 1000);
    
    for( var i = 0; i < items.length; i++) {
        items[i].onclick = function() {
    
                this.style.display = 'none';
                itemsNone++;
                
                if(items.length == itemsNone) {
               alert('Game over: ' + timer.time + 's');
               clearInterval(runBorder);
               clearInterval(gameTime); 
                  
                }
           
        }
    }
    function Timer(time, elem ) {
        this.time = time;
        this.elem = elem;
        this.elem.innerHTML = this.time;
        
        this.tick = function() {
            this.time++;
            this.elem.innerHTML = this.time;
        }
    }
    
    function mtRand(min, max) {
        return Math.floor(Math.random() *(max -min +1 ) ) ;
    }
    
  
}
