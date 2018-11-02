
var m = [11, 22, 33, 55, 111, 999];

//for ( var i = 0; i < m.length; i++) {
//    document.getElementById('out').innerHTML +=m[i]+'<br>';
//}

function masOut() {
    var p = document.getElementById('out');
    var str='';
    
    for (var i =0; i<m.length; i++) {
        str +='Masiva nr ' + i +' => '+ 'kas ieksa massiva ' +m[i] + '<br>';
    }
    p.innerHTML = str;
}
masOut();


function push() {
    var i1 = document.getElementById('i1').value;
    m.push(i1);
    masOut();
}

function pop() {
    m.pop(i1);
    masOut();
}