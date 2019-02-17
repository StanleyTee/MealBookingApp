/*function time() {

var clockElement = document.getElementById("clock");
function updateClock() {
	clockElement.innerHTML = `<h3>${new Date().toLocaleTimeString()}</h3>`;
}

setInterval(function (){updateClock( clockElement );}, 1000);

}*/

function notify(){
	setTimeout("alert('I am still here');",3000);
}