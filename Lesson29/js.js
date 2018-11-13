window.onload = function(e) {
    
    new Slider({
        images: '.photo img',
        btnBack: '.gallery .back',
        btnNext: '.gallery .next',
     
   
    });
    
    
    
function Slider(parametri) {  //create new prototipe
    
    this.images = document.querySelectorAll(parametri.images);
    
    this.btnBack = document.querySelector(parametri.btnBack);
    this.btnNext = document.querySelector(parametri.btnNext);
    
    this.auto = parametri.auto;
    this.rate = parametri.rate || 1000;
    var i = 0;
    var slider = this;
 
    
    
    
    this.btnBack.onclick =  function() {
        slider.images[i].classList.remove('show');
        i--;
        
        if(i<0) {
            i = slider.images.length -1;
        }
        slider.images[i].classList.add('show');
    }
    
    this.btnNext.onclick = function() {
        slider.images[i].classList.remove('show');
        i++;
        
        if(i >= slider.images.length ){
            i = 0;
        }
        slider.images[i].classList.add('show');
    }
    
  
    
    
    if(slider.auto) {
        setInterval(slider.next, slider.rate);
    }
}
    
    
}