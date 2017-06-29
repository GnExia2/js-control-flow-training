console.log("security_questions.js loaded");

Security Questions

/*
Work in the security_questions.js file.

    Create an array called securityQuestions. Each element of securityQuestions will be an object with two keys: question and expectedAnswer.

    Populate (fill) securityQuestions with at least three such objects. Feel free to just make them up. For example, one security question object might be:

    { question: "What was your first pet's name?", expectedAnswer: "FlufferNutter" }

    Write code that goes through each of the security questions in your array doing the following:

    use window.prompt (short name: prompt) to create a popup in the browser with the question
    check whether the user's input matches the expected answer
    * if the answer does match, ask the next question * if the answer doesn't match, stop asking questions and pop up an alert message.
*/



var securityQuestions = [
  {
    question:"What was your first car?",
    expectedAnswer:"Ferrari 458 Speciale"
  },
  {
    question:"What was your 2nd car?",
    expectedAnswer:"Lamborghini Centenario"
  },
  {
    question:"What was your 3rd car?",
    expectedAnswer:"Lamborghini Huracan"
  }
]

var userAnswer = "";
var hacker = false;

for (var i=0; i < securityQuestions.length; i++){
	userAnswer = prompt(securityQuestions[i].question);
	if (userAnswer !== securityQuestions[i].expectedAnswer){
		alert("Incorrect security question response!");
    hacker = true;
		break;
	}
}

if (hacker){
  console.log("Stop!");
}
