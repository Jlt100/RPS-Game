const playerSelection = "rock"; 
const computerSelection = computerPlay();
const rps =["rock", "paper", "scissors"];

function computerPlay() {
	let randomrps = rps[Math.floor(Math.random() * rps.length)];
		return randomrps; 
	}

function playRound( playerSelection, computerSelection) {
	if (playerSelection == "rock" && computerSelection == "rock"){ 
		console.log("It's a tie"); 
		}else if (playerSelection == "rock" && computerSelection == "paper"){
		console.log("You lose paper beats rock"); 
		}else if (playerSelection == "rock" && computerSelection == "scissors"){
		console.log("You win rock beats scissors"); 
			}
		}
	

