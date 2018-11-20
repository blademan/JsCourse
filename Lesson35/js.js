window.onload = displayTime()
    
function displayTime() {
    var now = new Date();
    var div = document.querySelector('.clock');
    
    div.innerHTML = now.toLocaleTimeString();
    
    setTimeout(displayTime, 1000); //rekursija
}