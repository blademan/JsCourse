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
           fade(this, 1000, function() {
                this.style.display = 'none';
                itemsNone++;
                
                if(items.length == itemsNone) {
               alert('Game over: ' + timer.time + 's');
               clearInterval(runBorder);
               clearInterval(gameTime);                    
                }
           });
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
    
    
    function fade(elem, t, f) {
        var fps =50;
        var time = t || 500;
        var steps =time / fps;
        var op = 1;
        var d0 = op /steps;
        
        var callback = f || function() {};
        
        var timer = setInterval(function () {
            op -= d0;
            elem.style.opacity = op;
            steps--;
            
            if ( steps === 0 ) {
                clearInterval(timer);
                callback.call(elem);
            }
        }, (1000 /fps));
    } 
}
