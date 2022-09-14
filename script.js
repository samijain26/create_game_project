alert("Hi let's play Rock Paper Scissor Shoot to decide who would eat last slice of Pizza" +
"Remeber: Rock crush scissor, paper cover rock and scissor cut paper" +
"to learn more about game go to 'wrpsa.com'")

let playerOBj = {
    type : "human"
   

}
 class Button{
    constructor(name,img){
        this.name = name;
        this.img = img;
    }

 }

 let rock = new Button("Rock", "/rock.png")
 let paper = new Button("Paper", "/paper.png")
 let scissor = new Button("Scissor", "/scissor.png")


playerName = prompt("please enter your name to paly against computer")

if (playerName != " "){
    playerOBj.name = playerName
    
}

console.log(`welcome ${playerOBj.name}`)


//prompting user to enter how many times he/she wants to play to decide the winner. If user enter a
//number program continues

numberTurn = prompt(`${playerName} how many times you want to play. please enter a number to proceed`)

if(numberTurn =='0' ||numberTurn ==""  ){
    alert("I guess you changed your mind")
}else{
    numberTurn = parseInt(numberTurn)

}

let turn = document.querySelector(".update_turn")
turn.innerHTML= numberTurn 

// gets what the computer selected
function getComputerOption() {
    const options = ['rock', 'paper', 'scissor'];
    const option = options[Math.floor(Math.random() * options.length)];
    return option;
}

// function getPlayerOption(){
    let rockbtn = document.querySelector(".rock")
    let paperbtn = document.querySelector(".paper")
    let scissorbtn = document.querySelector(".scissor")
    let imageContainer = document.querySelectorAll(".chosen_image_container")
// }

let playerChoice = [rockbtn, paperbtn, scissorbtn]

//set html text and image on each button using object
playerChoice[0].innerHTML = `<img src=${rock.img} class="img_style"><h4>${rock.name}<h4>`
playerChoice[1].innerHTML = `<img src=${paper.img} class="img_style"><h4>${paper.name}<h4>`
playerChoice[2].innerHTML = `<img src=${scissor.img} class="img_style"><h4>${scissor.name}<h4>`


//adding event listner on click event on each button

playerChoice.forEach(choice => 
    choice.addEventListener("click", play))

   let playcount = 0 
    function play(){
      let computerPick = getComputerOption()

      console.dir(playerChoice)
      let playerPick = this.innerText
      console.log(playerPick)
      console.log(computerPick )

   
      //let playerChoice = 

        if (playcount != numberTurn){
            playcount ++
        }
       

    
    }
play()