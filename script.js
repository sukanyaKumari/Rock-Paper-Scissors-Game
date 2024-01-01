let userScore =0;
let compScore =0;
const choices = document.querySelectorAll(".choice");
const mymsg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");

const getcompChoice=()=>{
    let opt = ["rock","paper","scissors"];
   const ind = Math.floor(Math.random()*3);
   return opt[ind];

}
const showwinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userScore++;
        uScore.innerText = userScore;
        console.log("you win!");
        mymsg.innerText =`You Win! your ${userChoice} beats ${compChoice}`;
        mymsg.style.backgroundColor="green";
    }
    else{
        compScore++;
        cScore.innerText = compScore;
        console.log("computer win!");
        mymsg.innerText =`You lose comp win! ${compChoice} beats your ${userChoice}`;
        mymsg.style.backgroundColor="red";
    }

}
const playGame=(userChoice)=>{
    console.log("user choice"+userChoice);
    const compChoice= getcompChoice();
    console.log("comp choice"+compChoice);
    if(userChoice === compChoice){
        console.log("draw");
        mymsg.innerText ="Game was Draw Play Again!";
        mymsg.style.backgroundColor="rgb(48, 16, 63)";
        
    }
    else{
        let userwin =true;
        if(userChoice==="rock"){
            //paper,scissors
            userwin = compChoice==="paper" ? false: true;
        }
        else if(userChoice==="paper"){
            userwin = compChoice==="rock"? false:true;
        }
        else{
            userwin = compChoice==="rock"? false: true;
        }
        showwinner(userwin,userChoice,compChoice);
    }
}
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});