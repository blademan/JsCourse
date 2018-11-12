window.onload = function(e) {
    var link = document.querySelectorAll('a[target=blank]');
    //console.log(link);
    
    
    for ( var i = 0 ; i < link.length; i++) {
       link[i].onclick = confirmAway;
    }
    
    function confirmAway(e) {
        if(!confirm('Bad link')){
        return false;
        }
    }
}