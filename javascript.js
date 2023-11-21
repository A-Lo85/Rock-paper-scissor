function getComputerChoice(){
   let go = Math.floor(Math.random() * 3);
   let shoot ="";
   if(go == 2){
        return("Rock");
    }else if (go == 1){
        return ("Paper");
    }else if(go == 0){
        return("Scissors");
    }
}


function readySetGo(playerChoice,computerChoice){
    if (playerChoice == "Rock" && computerChoice =="Paper"){
          return("You lost, Paper beats rock")
    }else if(playerChoice == "Rock" && computerChoice =="Scissors"){
         return("You Won, rock beats Scissor")
    }else if(playerChoice == "Rock" && computerChoice =="Rock"){
         return("You tied, Rock ties Rock") 
    }
    
    
    else if (playerChoice == "Paper" && computerChoice =="Paper"){
         return("You tied, paper can't beat paper") 
    }else if(playerChoice == "Paper" && computerChoice =="Scissors"){
         return("You lost, scissor beats paper")
    }else if(playerChoice == "Paper" && computerChoice =="Rock"){
         return("You Won, paper beats rock")
    } 

     else if (playerChoice == "Scissors" && computerChoice =="Paper"){
        return("You lost, Paper beats rock")
    }else if(playerChoice == "Scissors" && computerChoice =="Scissors"){
         return("You tied, scissor can't beat scissor")
    }else if(playerChoice == "Scissors" && computerChoice =="Rock"){
        return("You lost, Rock beats scissor")
    }
}

