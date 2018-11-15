function Popup() {
    this.modal = document.querySelector('.modal');
    this.overlay = document.querySelector('.overlay');
    this.xClose = document.querySelector('.modal-close');
   var popup = this;
    
    
    this.open = function(content) {
        popup.modal.innerHTML = content;
     popup.xClose.classList.add('open');
        popup.modal.classList.add('open');
        popup.overlay.classList.add('open');
}
    this.close = function() {
         popup.modal.classList.remove('open') 
        popup.xClose.classList.remove('open');
        popup.overlay.classList.remove('open');
     }
   this.xClose.onclick = popup.close;
   
}




window.onload = function(){
    
    var newPop = new Popup();
    
    document.querySelector('.boxmodal').onclick = function(){
   var form2 = document.querySelector('.for-contact-popup');
        newPop.open(form2.innerHTML);
    }
    
     document.querySelector('.callme').onclick = function(){
         var form = document.querySelector('.for-callme-popup');
        newPop.open(form.innerHTML);
    }
    
    
    
    
}