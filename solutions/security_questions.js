console.log("security_questions.js loaded");

var securityQuestions = [
	{
		question: "What was your first pet's name?",
		expectedAnswer: "FlufferNutter"
	},
	{
		question: "What was the model year of your first car?",
		expectedAnswer: "1985"
	},
	{
		question: "What city were you born in?",
		expectedAnswer: "NYC"
	}
]

var Answer = "";
var nonUser = false;

for (var i=0; i < securityQuestions.length; i++){
		Answer = prompt(securityQuestions[i].question);
	if (Answer !== securityQuestions[i].expectedAnswer){
		alert("Incorrect");
    nonUser = true;
		break;
	}
}

if (nonUser){
  console.log("You've Been Locked Out");
}
