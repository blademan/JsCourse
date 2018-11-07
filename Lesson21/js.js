window.onload = function(e) {
    
    var btn = document.querySelector('input[name="calc"]');
    var inp1 = document.querySelector('input[name=num1]');
     var inp2 = document.querySelector('input[name=num2]');
    var result = document.querySelector('.res');
    var resset = null;
    
    btn.onclick = function(){
       
        var res = parseInt(inp1.value)+ parseInt(inp2.value);
         result.innerHTML = res;
        
        this.disabled = true;
        

    }
     inp2.onclick = function() {
      inp2.value = resset;
           btn.disabled = false;
     }
  inp1.onclick = function() {
      inp1.value = resset; 
         btn.disabled = false;
  }
    
}