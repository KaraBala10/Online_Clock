let clock = document.getElementById('clock');
let x = function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}
setInterval(x, 1);