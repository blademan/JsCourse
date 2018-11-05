document.getElementById('myslide').onmousemove =function (event) {
    var x = event.offsetX; // parent
    console.log(x);
    document.getElementById('two').style.width = x +'px';
}