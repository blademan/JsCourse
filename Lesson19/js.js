//let p  = document.getElementsByTagName('p');
//console.log(p);
//
//p[0].style.color = 'red';
//p[2].style.fontSize = '24px';
//
//for ( var i = 0; i < p.length; i++) {
//    p[i].style.color = 'blue';
//}
//
//let up = document.getElementsByClassName('up');
//
//for ( var i =0;  i < up.length; i++) {
//   
//    up[i].onclick = function() {
//        alert('it work');
//    }
//}
//
//
//
//let tempC = [ -10, -10, 0, 0, 10, 10, 20, 0, 20, 0];
//let videjaTemp = 0;
//for ( let k = 0; k < tempC.length; k++ ) {
//    
//   videjaTemp +=  tempC[k];
//}
//
//console.log(videjaTemp/tempC.length);
//
//console.log( Math.min.apply(null, tempC));
//console.log( Math.max.apply(null, tempC));

 console.log('-------------------');
let temp = [
    [1, 2, 4, 5],
    [-3,0, 4, 4],
    [1, 3, 5, 6]
];

for ( let d = 0; d < temp.length; d++) {
    videjaTemp = 0;
    for ( let y = 0; y<temp[d].length; y++) {
        videjaTemp += temp[d][y];
    }
    console.log( videjaTemp/temp[d].length);
}
