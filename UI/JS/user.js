function validate(){
	if (checkUsername(document.getElementById("username").value)) {
		alert("Enter username");
	}else{
		function storeUserName() {
			sessionStorage.setItem("username",document.getElementById("username").value);
		}
	}
}

function get(){
    var username = sessionStorage.getItem("username");
    document.getElementById("message").innerHTML = `<h3 style="background-color:#9ab4b4; color:#679595;"> Welcome, ${username} </h3>`
}
/*window.onload = function(){
	get();
}*/