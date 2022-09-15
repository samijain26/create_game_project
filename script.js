alert(

  "Hi let's play Rock Paper Scissor Shoot to decide who would eat last slice of Pizza" +
    "Remeber: Rock crush scissor, paper cover rock and scissor cut paper" +
    "If you want to learn more about game rules:  Go to 'wrpsa.com'"
);

let playerOBj = {
  type: "human",
};
class Button {
  constructor(name, img) {
    this.name = name;
    this.img = img;
  }
}

let rock = new Button("Rock", "/rock.png");
let paper = new Button("Paper", "/paper.png");
let scissor = new Button("Scissor", "/scissor.png");

playerName = prompt("please enter your name to play against computer");

if (playerName != " ") {
  playerOBj.name = playerName;
}

console.log(`welcome ${playerOBj.name}`);

//prompting user to enter how many times he/she wants to play to decide the winner. If user enter a
//number program continues

numberTurn = prompt(
  `${playerName} how many times you want to play. please enter a number to proceed`
);

if (numberTurn == "0" || numberTurn == " ") {
  alert("I guess you changed your mind");
} else {
  numberTurn = parseInt(numberTurn);
}
 
//updating dom for number of turns game would be played and holding the value in variable numberTurn
let turn = document.querySelector(".update_turn");
turn.innerHTML = numberTurn;

// gets what the computer selected
function getComputerOption() {
  const options = ["rock", "paper", "scissor"];
  const option = options[Math.floor(Math.random() * options.length)];
  return option;
}

// function getPlayerOption(){
let rockbtn = document.querySelector(".rock");
let paperbtn = document.querySelector(".paper");
let scissorbtn = document.querySelector(".scissor");

let imageContainer = document.querySelector(".image_container");
console.dir(imageContainer);
// }

let playerChoice = [rockbtn, paperbtn, scissorbtn];

//set html text and image on each button using object
playerChoice[0].innerHTML = `<img src="${rock.img}" class="img_style"><h4>${rock.name}<h4>`;
playerChoice[1].innerHTML = `<img src="${paper.img}" class="img_style"><h4>${paper.name}<h4>`;
playerChoice[2].innerHTML = `<img src="${scissor.img}" class="img_style"><h4>${scissor.name}<h4>`;

//getting computer option
function getImageSrc(option) {
  if (option === "rock") {
    return "rock.png";
  } else if (option === "paper") {
    return "paper.png";
  } else option === "scissor";
  return "scissor.png";
}

let chosenImage = document.querySelectorAll(".chosen_image_container");  
//adding event listner on click event on each button

playerChoice.forEach((choice) => choice.addEventListener("click", play));

let playerScore = 0;
let computerScore = 0;
let p_image_src 
  let c_image_src
function play() {

    // user and computer get thier choice

  let computerPick = getComputerOption();
  let playerPick = this.innerText.toLowerCase();

  //turning on display property for image continer to show user and computer choice

  imageContainer.classList.add("image_container_display");

  //getting inside image container choice for user pick and computer pick

 

  //chosenImage[0] shows user image and chosenImage[1] shows computer picked image
 
   let image_src = document.querySelectorAll(".img");
   //c_image_src = document.createElement("img");
 
//   chosenImage[0].appendChild(p_image_src);
//   chosenImage[1].appendChild(c_image_src);

  image_src[0].src = getImageSrc(playerPick);
  image_src[1].src = getImageSrc(computerPick)
  //p_image_src.classList.add("img")
  //c_image_src.classList.add("img")
  

  


 //reducing the number of turn left after this click

 turn.innerHTML = `Turn remaining : ${numberTurn -1}`
  // imageContainer.textContent = `player pick ${this.classList} ${p_image_src} and computer picked ${computerPick} `
  //if()

  setTimeout(winnerDecision(playerPick,computerPick,p_image_src,c_image_src),5000)
 //  (winnerDecision("rock","rock" ),5000)

  console.log(playerPick)
  console.log(computerPick )

  
   //imageContainer.classList.remove("image_container_display");

   numberTurn--
   turn.innerHTML = `Turn remaining : ${numberTurn}`
   if(numberTurn == 0){
    gameOver(playerChoice,turn)
   }

  
}
function gameOver(playerChoice,turn){
   
 alert("i am in game over")
        //const chooseMove = document.querySelector('.move');
        const result = document.querySelector(".result");
        const restart = document.querySelector(".restart");
 
        playerChoice.forEach(option => {
            option.style.display = 'none';
            imageContainer.classList.remove("image_container_display");
        })
 
      
        turn.innerHTML= 'Game Over!!'
       
 
       
    if(playerScore > computerScore){
        result.style.display="flex"
        result.style.fontSize = "20px";
        result.innerText = "You Won The Game"
        result.style.color = "blue";

    }
    else if(playerScore < computerScore){
        result.style.display="flex"
        result.style.fontSize = '2opx';
        result.innerText = 'You Lost The Game';
        result.style.color = 'red';
    }
    else{
        result.style.display="flex"
        result.style.fontSize = '20px';
        result.innerText = 'Tie';
        result.style.color = 'grey'
    }
    restart.innerText = 'Restart';
    restart.style.display = 'flex'
    restart.addEventListener('click',() => {
        window.location.reload();
    })
}


function winnerDecision(player,computer,p_image,c_image){
    let playerScoreUpdate = document.querySelector(".p_score")
    let computerScoreUpdate = document.querySelector(".c_score")
    let result = document.querySelector(".result")
    console.dir(playerScore)
    console.dir(playerScore )
    if (player === computer){
        
        result.innerHTML= "<h2>Tie</h2>"
    }
    else if(player === 'rock'){
        if(computer === 'paper'){
            result.innerHTML= "<h2>Computer win</h2>"
            computerScore++;
            computerScoreUpdate.style.display="flex"
            computerScoreUpdate.innerHTML= `<h4>${computerScore}</h4>`;

        }else{
            result.innerHTML = "<h2>Player Won</h2>"
            playerScore++;
            playerScoreUpdate.style.display="flex"
            playerScoreUpdate.innerHTML = `<h4>${playerScore}</h4>`;
        }
    }
    else if(player === 'scissors'){
            if(computer === 'rock'){
            result.innerHTML= "<h2>Computer win</h2>"
            computerScore++;
            computerScoreUpdate.style.display="flex"
            computerScoreUpdate.innerHTML= `<h4>${computerScore}</h4>`;

             }else{
            result.innerHTML = "<h2>Player Won</h2>"
            playerScore++;
            playerScoreUpdate.style.display="flex"
            playerScoreUpdate.innerHTML = `<h4>${playerScore}</h4>`;
             }
         }
    else if(player == 'paper'){
            if(computer == 'scissors'){
            result.innerHTML= "<h2>Computer win</h2>"
            computerScore++;
            computerScoreUpdate.style.display="flex"
            computerScoreUpdate.innerHTML= `<h4>${computerScore}</h4>`;

             }else{
            result.innerHTML = "<h2>Player Won</h2>"
            playerScore++;
            playerScoreUpdate.style.display="flex"
            playerScoreUpdate.innerHTML = `<h4>${playerScore}</h4>`;
            }
        }
      
    }





//play()
