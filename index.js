const buttonsEl= document.querySelectorAll("button");
const resultEl=document.getElementById("result");

const playerScoreEl=document.getElementById("player-score");
const computerScoreEl=document.getElementById("computer-score");
let playerScore=0;
let computerScore=0;


buttonsEl.forEach(button=> {
    button.addEventListener('click',()=>{
        const result=playRound(button.id,computerPlay());
        // console.log('user choice',button.id,'computer choice',computerPlay());
        // console.log(result);
        resultEl.textContent=result;

    });
});

// here we have created moves of computer by using random method 
function computerPlay(){
    const choices=['Rock','Paper','Scissors'];
    const randomChoice=Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}
function playRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection){
        return("It's a tie! ");
    }
    else if(
        (playerSelection === 'Rock' && computerSelection === 'Scissor')||
        (playerSelection === 'Paper' && computerSelection === 'Rock')||
        (playerSelection === 'Scissor' && computerSelection === 'Paper')
    ){
        playerScore++;
        playerScoreEl.textContent=playerScore;
        return("Bravo! You won, "+playerSelection + " beats " + computerSelection);
    }
    else{
        computerScore++;
        computerScoreEl.textContent=computerScore;
        return("Oops! You lose, "+computerSelection + " beats " + playerSelection);
    }
}