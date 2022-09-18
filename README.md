# create_game_project
Rock, Paper and Scissor Game using HTML, CSS and JAVASCRIPT

<img width="493" alt="Screen Shot 2022-09-18 at 7 25 40 PM" src="https://user-images.githubusercontent.com/110350498/190933160-fff8fcc3-3314-485c-9afc-c5665e15dea2.png">

Introduction: During PerScholas admission process, I was given Rock Paper Scissor as a coding challenge question to  Psedocode. At that moment I did not about this game so I went through all the rules of the game which was provided as a link and then with in time frame limit I came up with my Psedocode. I was always tempted to code my algorithm so when creating the game  as project oppotunity came ,I was really excited and selected Rock Paper Scissor as my project. you can access my game on the github by
clicking the link:  https://samijain26.github.io/create_game_project/

About the game: This game need two players. Both the players have to pick  rock, paper, or scissors as a choice. Then User decide how many turns they want to play. Whoever wins the most turn is the winner.
Game Rule: 1. Rock crush scissor
           2. Scissor cut paper
           3. Paper cover Rock


HTML page layout:


HTML gives the basic structure of the game. style.css file is linked in the head tag which will be used for styling the HTML.

Description of elements use in code is below:

. <section class ="container"> This is main div container to hold all other div

.<div class = "inside_container">  --> Inside div conatiner holds  title to display on the screen.

.<div class="score">  --> This div holds the score of both player

.<div class= "turn">  --> This div holds number of turns to be played

. <div class="image_container">  --->  This div holds image container div to show user choice and computer choice
.<div class = "result"> --> This div hold the result of individual turn play

.<div class="choice"> --> This div hold all three buttons (Rock , paper, Scissor) which user  clicks to choose his/her option

.<div class = "last"> --> This div holds Restart and endgame buttton which would display when all the turns are finished

**************************************************************************

CSS file: This file carries the specific styling of each individual element for their Display,background color, fontsize,alignment etc. Each div has used Display property Flex. Display control to none or flex is controlled in the VS code


*********************************************************************************

About VS code(JAVASCRIPT)

 I have designed this game to play against computer. Player name is choosen with a Prompt box and assigned to the player oblect.
************************************************************
let playerName = prompt(
    "please enter your name to play against computer",
    "Sami"
  );

  if (playerName != " ") {
    playerOBj.name = playerName;
  }

*************************************************************

Player is then prompted to enter number of turns he/she wants to play.

numberTurn = prompt(
    `${playerName} how many times you want to play. please enter a number to proceed`
  );

  if (numberTurn !== "0" && numberTurn !== "") {
    numberTurn = parseInt(numberTurn);

    let turn = document.querySelector(".update_turn");
   
    turn.innerHTML = `<h2> Total turns: ${numberTurn}</h2>`;

*******************************************************************
 
A random option will be generated from the computer’s side

function getComputerOption() {
      const options = ["rock", "paper", "scissor"];
      const option = options[Math.floor(Math.random() * options.length)];
      return option;
    }

*******************************************************************


 The player has to choose one option among the rock, paper, and scissors.  
 
 let rockbtn = document.querySelector(".rock");
    let paperbtn = document.querySelector(".paper");
    let scissorbtn = document.querySelector(".scissor");

    let imageContainer = document.querySelector(".image_container");
    let icontainer = document.querySelector(".inside_container");
    console.dir(imageContainer);
    // }

    let playerChoice = [rockbtn, paperbtn, scissorbtn];

    An eventlistner is added to each button and Play() function is called so when player picks his/her choice, Images corresponding to their choice pops up in the image container.

       playerChoice.forEach((choice) => choice.addEventListener("click", play));

    let playerScore = 0;
    let computerScore = 0;

    imageContainer.classList.add("image_container_display");

      // getting inside image container choice for user pick and computer pick

      let image_src = document.querySelectorAll(".img");

      image_src[0].src = getImageSrc(playerPick);
      //image_src[0].style.animate="rotate"
      image_src[1].src = getImageSrc(computerPick);

******************************************************************
  Function  getImageSrc(option) helps to show user picked choice and computer picked choice in the image container

  function getImageSrc(option) {
      if (option === "rock") {
        return "rock.png";
      } else if (option === "paper") {
        return "paper.png";
      } else option === "scissor";
      return "scissor.png";
    }
 
 *****************************************************************

 when user and computer picks their choice then

  funtion winnerDecision() is called which follows all the games rules to decide who won in that turn. This function calls following function  to decide the winner of that turn.
  
  tieScore() -----> if game tie
  playerwinStats()------->if player wins
  computerwinStats()------->if computer wins

 

    winnerDecision(playerPick, computerPick);

if (player === computer) {
        tieScore(computerScoreUpdate, playerScoreUpdate, result);
      } else if (player === "rock") {
        if (computer === "paper") {
          computerwinStats(result, computerScoreUpdate);
        } else {
          playerwinStats(result, playerScoreUpdate);
        }
      } else if (player === "scissor") {
        if (computer === "rock") {
          computerwinStats(result, computerScoreUpdate);
        } else {
          playerwinStats(result, playerScoreUpdate);
        }
      } else if (player === "paper") {
        if (computer == "scissor") {
          computerwinStats(result, computerScoreUpdate);
        } else {
          playerwinStats(result, playerScoreUpdate);
        }
      }
      return playerScore, computerScore;
    }

***************************************************************
After each turn turn count is checked to see if all the turns are finished. If so then gameOver() function is called to calculate the final winner.This function checks if game tie or there is win/lose state.

 function gameOver(playerChoice, turn)

 this function disables all three button so user can not click any more.

  playerChoice.forEach((option) => {
        option.style.display = "none";
        imageContainer.classList.remove("image_container_display");
      });

Logic to see final winner

  if (playerScore > computerScore) {
        result.style.color = "blue";
        result.innerHTML = `<img src="winner.png" class="img_style" ><h2>${playerOBj.name} Won the Game</h2>`;
       
      } else if (playerScore < computerScore) {
        result.style.color = "red";
        result.innerHTML = `<img src="loser.png" class="img_style" ><h2>${playerOBj.name} lost the Game</h2>`;
       
      } else {
        result.style.color = "yellow";
        result.innerHTML = `<img src="tie.png" class="img_style" ><h2>Game Tie </h2>`;
        
      }

After this final result is dispalyed on the screen

turn.style.display = "flex";
      turn.innerHTML = "<h2>Game Over!!</h2>";
      
After Two new buttons pop up
Restart button reset the window location and game restarts

 restart.innerText = "Restart";
      restart.style.display = "flex";

      restart.addEventListener("click", () => {
        window.location.reload();
      });

EndGame button ends the game and shows default browser

      endgame.innerText = "End Game";
      endgame.style.display = "flex";

      endgame.addEventListener("click", () => {
        icontainer.style.display = "none";
      });
    }


****************************************************************************

Lastly if  the user does not enter any turns to play against computer then program disable all the DIV and blank browser appers

else {
    let icontainer = document.querySelector(".inside_container");
    icontainer.style.display = "none";
    setTimeout(() =>
      alert("you did not enter any turns to play.See you next time", 300)
    );
  }
}


The game is responsive so that it can be played on small device.