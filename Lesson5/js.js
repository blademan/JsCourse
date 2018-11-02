var p = document.getElementsByTagName('p');
var one = document.getElementsByClassName('one');

console.log(p);

for ( var i =0; i < p.length; i++) {
    p[i].onclick = f1;
    
}

for ( var i =0; i < one.length; i++) {
    one[i].onclick = f2;
    
}


function f1() {
//    alert('Hi');
    console.log(this);
    this.style.color = 'pink';
  
}
function f2() {

    this.style.fontWeight = 'bold';
}