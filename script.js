var userInput = prompt("Do you choose rock, paper or scissors?");
var computerOutput = Math.random();
if (computerOutput < 0.34) {
  computerOutput = "rock";
} else if (computerOutput <= 0.67) {
  computerOutput = "paper";
} else {
  computerOutput = "scissors";
}


function compare(input1, input2) {
  if (input1 === input2) {
    return "The result is a tie!";
  } else if (input1 === "rock") {
    if (input2 === "scissors") {
      return "rock wins";
    } else {
      return "paper wins";
    }
  } else if (input2 === "paper") {
    if (input2 === "rock") {
      return "paper wins";
    } else {
      return "scissors wins";
    }
  }else if (input2 === "scissors") {
    if (input2 === "rock") {
      return "rock wins";
    } else {
      return "scissors wins";
    }
  }
}
 alert('User Input: ' + userInput + ' Computer Input:  ' + computerOutput + ' Compare ' + compare(userInput, computerOutput));


