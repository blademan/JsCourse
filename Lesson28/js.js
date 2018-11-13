window.onload = function(e) {
    
    var input = document.querySelectorAll('form input');
  
   document.querySelector('form').onsubmit = function(e) {
       var error = false;
      
       
       for (var i = 0; i<input.length; i++) {
          if(input[i].value === ''){
            input[i].classList.add('errorInput');
            error = true;
             
           
          } 
       }
       
       
           if(error) {
                e.preventDefault();
           }
       
   }
          
   
   
   for ( var i = 0; i< input.length; i++){
               
           input[i].oninput = function(){
               
           
              this.classList.remove('errorInput');
           
           }
       }
           
       for ( var i = 0; i< input.length; i++){               
           input[i].onfocus = function(){            
            this.classList.add('focus');
           
           }
       }   
    for ( var i = 0; i< input.length; i++){               
           input[i].onblur = function(){            
            this.classList.remove('focus');
           
           }
       }
           
       
           
       }
   
  
