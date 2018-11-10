window.onload = function(){
    var cipars1 = document.querySelector('.n1');
    var cipars2 = document.querySelector('.n2');
    var rezultats = document.querySelector('.izvade');
    var button = document.querySelectorAll('button');
    
       
for ( var i = 0; i< button.length; i++) {
    button[i].onclick = function() {
        var op = this.getAttribute('data-op');
        
    var a = parseInt(cipars1.value);
       var b = parseInt(cipars2.value);
       var rez;
          if( op === '+') {
            rez = a+b;
         
        }
        else if( op ==='-'){
            rez = a - b;
        }
        else if ( op === '/') {
            rez= (a/b);
        }
        else if ( op === '*') {
            rez= a*b;
        } else{
            rez = ' Nepareiza operacija';
        }
        rezultats.innerHTML = parseFloat(rez);
    }
}
      
        for ( var i = 0; i< button.length; i++) {
            button[i].setAttribute('disabled' , 'disabled');
            cipars1.onclick 
        } 
        
        btnEna = function() {
            
        for ( var i = 0; i< button.length; i++) {
            button[i].removeAttribute('disabled');
            cipars1.onclick 
        }
        }
            
    cipars1.onclick = function() {
        cipars1.value = '';
       
     btnEna();
     
      }  
    cipars2.onclick = function() {
        cipars2.value = '';
       
       btnEna();
    }
    }
