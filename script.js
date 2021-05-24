var rcon = 2
var ycon = 418


function signout(){
    document.getElementById('signout');
    alert('Dont Leave Yet');
}

function add(ycon){
    ycon++;
    document.getElementById("num-req").innerText = ycon;
}

function disappear(n){
    // element.remove();
    document.querySelector(".line"+ n).remove();
    // el.parentNode.parentNode.querySelector('img').remove();
    // el.parentNode.parentNode.querySelector('h1').remove();
    // el.parentNode.parentNode.querySelector('img').remove();
    // el.querySelector('img').remove();
}
// function add(){ 
// }