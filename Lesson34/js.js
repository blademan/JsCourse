$(function(){
    
new Slider ({
    images: '.photo img',
    next: '.next',
    prev: '.prev',
    auto: true,
    t: 2000
});
    
    
    
    
    
    
function Slider(gallery) {
    
    this.images = $(gallery.images);
    this.next = $(gallery.next);
    this.prev = $(gallery.prev);
    var i =0;
    
    var imglenght = this.images.length;
    var imgset = this.images;
 
        this.prev.on('click', function() {
        move( imgset, -1);
    });
    
    this.next.on('click', function() {
        move( imgset, 1);
    })
    
    
    function move(elements, direction) {
        $(elements).eq(i).fadeOut(1000);
        
        i += direction;
        
        if((direction > 0) && ( i >= elements.length)) {
            i = 0;
        }
        else if((direction < 0) && (i < 0)) {
            i = elements.length -1;
        }
       $(elements).eq(i).fadeIn(1000);
    }
    
    
    if (gallery.auto) {
        var t = gallery.t ? gallery.t : 1000;
//        if ( this.prev ) { this.prev.addClass('hide'); }
//        if ( this.next ) { this.next.addClass('hide'); }
        tick( gallery.t, function() {
            console.log('Круг замкнулся!');
        });
    }
    

    function tick(t, f) {
        var callback = f || function() {};
        
        timer = setInterval(function() {
            move( imgset, 1 );
            if ( i == imglenght -1 ) {
                callback();
            }
        }, t);
    }
    
    
}
   
})
