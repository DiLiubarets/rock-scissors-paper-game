for (i=0; i<=5; i++){
var userInput = prompt("Do you choose rock, paper or scissors?");
var computerOutput = Math.random();
if (computerOutput < 1/3) {
  computerOutput = "rock";
} else if (computerOutput <= 2/3) {
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
  } else if (input1 === "paper") {
    if (input2 === "rock") {
      return "paper wins";
    } else {
      return "scissors wins";
    }
  }else if (input1 === "scissors") {
    if (input2 === "rock") {
      return "rock wins";
    } else {
      return "scissors wins";
    }
  }
}
 alert('User Input: ' + userInput + ' Computer Input:  ' + computerOutput + ' Compare ' + compare(userInput, computerOutput));


}