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
    
}