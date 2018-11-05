
document.onmousemove = function() {
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', '<img src="https://cdn0.iconfinder.com/data/icons/yooicons_set09_halloween/512/cheshire_cat.png" id="cat"> ');
    var cat = document.getElementById('cat');
    cat.style.position = 'fixed';
    
document.onmousemove = function(event) {
   
    cat.style.left = event.clientX + 20+ 'px';
    cat.style.top = event.clientY+20 + 'px';
   }
};



