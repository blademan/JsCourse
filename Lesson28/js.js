window.onload = function(e) {
    
    var input = document.querySelectorAll('form input');
    
   document.querySelector('form').onsubmit = function(e) {
       var error = false;
       
       for (var i = 0; i<input.length; i++) {
          if(input[i].value === ''){
                 input[i].classList.add('errorInput');
              error = true;
             
           
          } else { 
              input[i].classList.remove('errorInput');
                   }
           if(error) {
                e.preventDefault();
           }
           
       }
   }
  
}