var m = {};
var n = {
    "one" : 12,
    "hello" : "world",
    "prim" : 2000
    
};


var  out  = document.getElementById('out');

for (var key in n) {
    out.innerHTML += key + '---'+ n[key] +'<br> ';
}