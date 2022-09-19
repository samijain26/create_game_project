//main function which has all the funtionality of the game
function playGame() {
  
  
    alert(
      "Hi, let's play Rock Paper Scissor Shoot between you and computer. " +
        "Whoever wins the most turn would be rewarded " +
         " as a smarter brain. let me tell you all the game rule before proceed \n" +
         "RULES: \n 1. Rock crush scissor \n "+
         "2. Paper cover rock  \n 3. scissor cut paper \n  "+
        " if both player earns same point then it is a TIE game.\n To learn more Go to: 'wrpsa.com'" 
       
    );
   
 

  let playerOBj = {
    type: "human",
    
  };

  //alert to get player name and save as name propety of the player object
  let playerName = prompt(
    "please enter your name to play against computer",
    "Sami"
  );

  if (playerName != " ") {
    playerOBj.name = playerName;
  }

  console.log(`welcome ${playerOBj.name}`);

  

  
 

  //prompting user to enter how many times he/she wants to play to decide the winner. If user enter a
  //number, program continues

  numberTurn = prompt(
    `${playerName} how many times you want to play. please enter a number to proceed`
  );

  if (numberTurn !== "0" && numberTurn !== "") {
    numberTurn = parseInt(numberTurn);

    //updating dom for number of turns game would be played and holding the value in variable numberTurn
    
    let turn = document.querySelector(".update_turn");
   
    turn.innerHTML = `<h2> Total turns: ${numberTurn}</h2>`;

    // gets what the computer selected as option
    
    function getComputerOption() {
      const options = ["rock", "paper", "scissor"];
      const option = options[Math.floor(Math.random() * options.length)];
      return option;
    }

    // creating image on button oblect
    let rockbtn = document.querySelector(".rock");
    let paperbtn = document.querySelector(".paper");
    let scissorbtn = document.querySelector(".scissor");

    

    let imageContainer = document.querySelector(".image_container");
    let icontainer = document.querySelector(".inside_container");

    let player_score = document.querySelector("h3");
    player_score.innerHTML=`${ playerOBj.name} Score`
    
   

    let playerChoice = [rockbtn, paperbtn, scissorbtn];

    
    //getting  option to show the image for picked user and computer choice
   
    function getImageSrc(option) {
      if (option === "rock") {
        return "rock.png";
      } else if (option === "paper") {
        return "paper.png";
      } else option === "scissor";
      return "scissor.png";
    }

   
    //adding event listner on click event on each button

    playerChoice.forEach((choice) => choice.addEventListener("click", play));

    let playerScore = 0;
    let computerScore = 0;

//event listner function when player clicks a choice
   
function play() {
     

      //reducing the number of turn left after this click    
      numberTurn--;
      turn.innerHTML = `Turn remaining : ${numberTurn}`;

      // user and computer get thier choice
      let computerPick = getComputerOption();
      let playerPick = this.innerText.toLowerCase();

      //turning on display property for image continer to show user and computer choice

      imageContainer.classList.add("image_container_display");

      // getting inside image container choice for user pick and computer pick

      let image_src = document.querySelectorAll(".img");

      image_src[0].src = getImageSrc(playerPick);
      //image_src[0].style.animate="rotate"
      image_src[1].src = getImageSrc(computerPick);

  

      // imageContainer.textContent = `player pick ${this.classList} ${p_image_src} and computer picked ${computerPick} `
     

      // setTimeout (()=>winnerDecision(playerPick,computerPick),100)
     
      winnerDecision(playerPick, computerPick);
      
//checking to see if no turns left then deciding the winner by calling gameover funtion
      if (numberTurn === 0) {
        turn.innerHTML = `Turn remaining : ${numberTurn}`;
        setTimeout(() => gameOver(playerChoice, turn), 20);
      }
    }

    function gameOver(playerChoice, turn) {
      alert("All the turns finshed. let 's see final winner");

      const result = document.querySelector(".result");
      
      const restart = document.querySelector(".restart");
      const endgame = document.querySelector(".endgame");

      //removing picked choice and turning of the display of button so user can not click
      
      playerChoice.forEach((option) => {
        option.style.display = "none";
        imageContainer.classList.remove("image_container_display");
      });

//final score display
      turn.style.display = "flex";
      turn.innerHTML = "<h2>Game Over!!</h2>";

      console.log("player score:" + playerScore);
      console.log("computer score:" + computerScore);
      result.style.display = "flex";
      
     

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

      //giving user choice to replay the game or end the game

      restart.innerText = "Restart";
      restart.style.display = "flex";

      restart.addEventListener("click", () => {
        window.location.reload();
      });

      endgame.innerText = "End Game";
      endgame.style.display = "flex";

      endgame.addEventListener("click", () => {
        icontainer.style.display = "none";
      });
    }

    //function to decide who won each turn on click
    function computerwinStats(result, computerScoreUpdate) {
      result.innerHTML = `<img src="computer.png"  class="img_style" ><h2> Computer won this turn.</h2>`;
      computerScore++;
      computerScoreUpdate.style.display = "flex";
      computerScoreUpdate.innerHTML = `<h4> :${computerScore}</h4>`;
      console.log(result.innerHTML);
      return computerScore, computerScoreUpdate;
    }

    function playerwinStats(result, playerScoreUpdate) {
      result.innerHTML = `<img src="winner.png"  class="img_style"><h2> ${playerName} won this turn</h2>`;
      playerScore++;
      playerScoreUpdate.style.display = "flex";
      playerScoreUpdate.innerHTML = `<h4> :${playerScore}</h4>`;
      console.log(result.innerHTML);
      return playerScore, playerScoreUpdate;
    }

    function tieScore(computerScoreUpdate, playerScoreUpdate, result) {
      result.innerHTML = "<h2>Both Tie</h2>";
      computerScoreUpdate.style.display = "flex";
      playerScoreUpdate.style.display = "flex";
      playerScoreUpdate.innerHTML = `<h4> : ${playerScore}</h4>`;
      computerScoreUpdate.innerHTML = `<h4> :${computerScore}</h4>`;
      return playerScore, playerScoreUpdate;
    }

    //function to decide winning logic

    function winnerDecision(player, computer) {

      let playerScoreUpdate = document.querySelector(".p_score");
      let computerScoreUpdate = document.querySelector(".c_score");
      let result = document.querySelector(".result");
      result.style.display = "flex";
      computerScoreUpdate.style.display = "flex";
      playerScoreUpdate.style.display = "flex";
      
      playerScoreUpdate.innerHTML=`:${playerScore}`
      computerScoreUpdate.innerHTML=`:${computerScore}`
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

//this else is from the top of page alert box. if player does not enter number of turns then 
//game ends    
} else {
    let icontainer = document.querySelector(".inside_container");
    icontainer.style.display = "none";
    setTimeout(() =>
      alert("you did not enter any turns to play.See you next time", 300)
    );
  }
}

//calling to start the game
setTimeout(playGame, 1000);
