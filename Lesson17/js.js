window.onload = function() {
    //Window.scrollTo(x, y)
    var scrolled;
    var timer;

    document.getElementById('top').onclick = function() {
      scrolled = window.pageYOffset;
       // window.scrollTo(0,0);
       scrollToTop();
    };
    function scrollToTop() {
        if(scrolled >0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled -100; // speed
            timer = setTimeout(scrollToTop, 100);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0,0);
        }
    }
};
