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
let won = null;
let c = 0;
let p = 0;

function readySetGo(playerChoice,computerChoice){
    if (playerChoice == "Rock" && computerChoice =="Paper"){
           won = false;
     return("You lost, paper beats rock")
    }else if(playerChoice == "Rock" && computerChoice =="Scissors"){
      won = true;
      
         return("You Won, rock beats Scissor")
    }else if(playerChoice == "Rock" && computerChoice =="Rock"){
         won =null;
        return("You tied, Rock ties Rock") 
       
    }
    
    
    else if (playerChoice == "Paper" && computerChoice =="Paper"){
         return("You tied, paper can't beat paper") 
    }else if(playerChoice == "Paper" && computerChoice =="Scissors"){
     let won = false;
         return("You lost, scissor beats paper")
    }else if(playerChoice == "Paper" && computerChoice =="Rock"){
     let won = true;
         return("You Won, paper beats rock")
    } 

     else if (playerChoice == "Scissors" && computerChoice =="Paper"){
          let won = true;
        return("You won, scissors beats paper")
    }else if(playerChoice == "Scissors" && computerChoice =="Scissors"){
         return("You tied, scissor can't beat scissor")
    }else if(playerChoice == "Scissors" && computerChoice =="Rock"){
     let won = false;
     
        return("You lost, rock beats scissors")
    }
}


function counter(){
    document.getElementById('Res').innerHTML = (readySetGo('Rock',getComputerChoice()));
 if(p==5 ){
     return (document.getElementById('Res').innerHTML ="You've won!")
 }else if(c == 5){
 return(document.getElementById('Res').innerHTML = "The computer won!")
 }else if(won == true){
    p++;
    document.getElementById('Per').innerHTML ="Your score: " + p;
 }else if( won == false){
     c++;
     document.getElementById('Com').innerHTML = "Computer's score: " + c;
 }
};










const body = document.body;   

const div= document.createElement('div');
div.setAttribute('id', 'theDiv'); 
body.append(div);

const theDiv = document.querySelector('#theDiv');

const rock = document.createElement('button');
rock.innerText='Rock'
rock.setAttribute('id', 'Rock');
rock.addEventListener('click', function(){
 counter();
 });
theDiv.append(rock);

const paper = document.createElement('button');
paper.innerText = 'Paper';
paper.setAttribute('id','Paper');
paper.addEventListener('click',function(){
    counter();
});
theDiv.append(paper);

const scissors = document.createElement('button')
scissors.innerText = 'Scissors';
scissors.setAttribute ('id', 'Scissors');
scissors.addEventListener('click',function(){
    counter();
});
theDiv.append(scissors);



const res = document.createElement('div');
res.setAttribute('id','Res');
theDiv.append(res)
 
const per = document.createElement('div');
per.setAttribute('id','Per');
theDiv.append(per);

const com = document.createElement('div');
com.setAttribute('id','Com');
theDiv.append(com);



