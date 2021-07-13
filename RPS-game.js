
const rps =['rock', 'paper', 'scissors'];

function computerPlay() {
	let randomrps = rps[Math.floor(Math.random() * rps.length)];
		return randomrps; 
	}
const computerSelection = computerPlay();
playerInput = prompt("Choose 'rock', 'paper', or 'scissors'");

let userscore = 0;  
let compscore = 0;

	function playGame(playerInput, computerSelection){
	
		if(playerInput === computerSelection){
			console.log("It's a Tie");
}		else if(playerInput == 'rock'){ 
			if (computerSelection =='scissors') {
				console.log("Player wins");
				return userscore ++;  
			}else { 
				if(computerSelection == 'paper'){
					console.log("Sorry you lose");
					return compscore ++; 
				}
			}
		}

		else if(playerInput =='paper') {
			if( computerSelection =='rock'){ 
				console.log('Player Wins');
				return userscore ++; 
			}else {
				if(computerSelection == 'scissors'){ 
				console.log("Sorry You lose"); 
				return compscore ++;
				}
			}
		}
		else if(playerInput =='scissors'){
			if(computerSelection =='paper'){
				console.log('Player wins'); 
				return userscore ++;
			}else{
				if(computerSelection =='rock'){
					console.log("Sorry You Lose");
					return compscore ++; 
				}
	 		
			} 
		} 

	}


