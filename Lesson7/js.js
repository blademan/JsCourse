document.getElementById('radius').oninput = cssGenerator;

function cssGenerator() {
    var div = document.getElementById('test');
    
    //text
    var out = document.getElementById('out');
//    console.log(this.value);
    div.style.borderRadius = this.value + 'px';
    
    // border-radius: 30px;
    out.innerHTML = 'border-radius: ' + this.value+'px;' ;
}