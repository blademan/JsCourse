


let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let toDay = 'пятница';

for ( let i = 0 ; i < 7; i++) {
    if ( i == 5 || i == 6) {
        document.write('<b>' + week[i] +'<br>' + '<b>');
    } else if ( week[i] == toDay) {
        document.write('<em>' + week[i] + '<br>' + '</em>');
        
    } else {
        document.write(week[i] + '<br>');
    }
    
};

