window.addEventListener('DOMContentLoaded', function() {
 
  
var tab = document.querySelectorAll('.info-header-tab');
var tabContent = document.querySelectorAll('.info-tabcontent');
var info = document.querySelector('.info-header');
    
function hideTab(a) {
    for(let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
}
    
hideTab(1);
    
function showTab(b) {
    if( tabContent[b].classList.contains('hide')) {
        hideTab(0);
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

info.addEventListener('click', function(event) {
    let target = event.target;
    if(target.className == 'info-header-tab') {
        for( let i = 0; i < tab.length; i++) {
            if(target == tab[i]) {
                showTab(i);
                break;
            }
        }
    }
})
    
// Timer
    
let deadLine ='2018-11-23';
    
function getTimeRem(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor( (t/1000) %60);
    let minutes = Math.floor( (t/1000/60) %60);
    let hours = Math.floor( (t/(1000*60*60)) );
    
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
                             
                             
};
  
function setClock(id, endtime) {
    let timer = document.querySelector('#timer');
    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let seconds = document.querySelector('.seconds');
    
    function updateClock() {
        let t = getTimeRem(endtime);
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;
        if(t.total<=0){
            clearInterval(timeInterval);
        }
    };
    
updateClock();
    let timeInterval = setInterval(updateClock, 1000);
};
  
    setClock('timer', deadLine);
    
});

