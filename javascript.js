function getComputerChoice(){
   let go = Math.floor(Math.random() * 3);
   let shoot ="";
   if(go === 2){
        return("Rock");
    }else if (go == 1){
        return ("Paper");
    }else{
        return("Scissors");
    }
}


function readySetGo(playerChoice,computerChoice){
    if (playerChoice == "Rock" && computerChoice =="Paper"){
          return("You lost, Paper beats rock")
    }else if(playerChoice == "Rock" && computerChoice =="Scissor"){
        return("You Won, rock beats Scissor")
    }else if(playerChoice == "Rock" && computerChoice =="Rock"){
        return("You tied, Rock ties Rock")
        
}if (playerChoice == "Paper" && computerChoice =="Paper"){
    return("You tied, paper can't beat paper")
}else if(playerChoice == "Paper" && computerChoice =="Scissor"){
  return("You lost, scissor beats paper")
}else if(playerChoice == "Paper" && computerChoice =="Rock"){
  return("You Won, paper beats rock")
}




}

