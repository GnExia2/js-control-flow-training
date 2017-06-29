console.log("login.js loaded");

var userLogin = {userName: "octocat_rules", password: "abacadabra"}

var inputPassword;

var loggedIn = false;

while (!loggedIn){
	inputPassword = prompt("Enter password for user " + userLogin.userName + ".")
	if (inputPassword === userLogin.password){
		console.log("Passwords match!");
    loggedIn = true;
	} else {
		console.log("Passwords do not match. Try Again!");
	}
}
