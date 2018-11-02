
autoSlider();
var left = 0;
var timer;

function autoSlider() {
    timer = setTimeout(function() {
        var strip = document.getElementById('strip');
        left = left -128;
        if (left < -512) {
            left = 0;
            clearTimeout(timer);
    }
        strip.style.left = left + 'px';
        autoSlider();
    }, 3000);
}

