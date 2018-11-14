
function $(selector) {
    var elements = document.querySelectorAll(selector);
    return new  OurJquery(elements);               
}

function OurJquery(elements) {
    
    this.elements = elements;
    
    this.on = function(eventName, f){
        
        for( var i = 0; i < this.elements.length; i++) {
            this.elements[i].addEventListener(eventName, f); 
        }
        return this;
    }
    


this.addClass = function(name) {
    for( var i = 0; i < this.elements.length; i++) {
        this.elements[i].classList.add('name');
    }
    return this;
}



this.test = function(html) {
    for( var i = 0; i < this.elements.length; i++){
    this.elements[i].innerHTML = html;
}
    return this;
}
//
//this.fade = function(fade) {
//    for( var i = 0; i < this.elements.length; i++){
//    this.elements[i].innerHTML = html;
//}
//    return this;
//}
}