let boxElOne = document.querySelector(".box1")
let boxElBtnOne = document.querySelector("#btnBox1")
let boxElTwo = document.querySelector(".box2")
let boxElBtnTwo = document.querySelector("#btnBox2")
let boxElThree = document.querySelector(".box3")
let boxElBtnThree = document.querySelector("#btnBox3")
//
let boxElFour = document.querySelector(".box4")
let boxElBtnFour = document.querySelector("#btnBox4")
let boxElFive = document.querySelector(".box5")
let boxElBtnFive = document.querySelector("#btnBox5")
let boxElSix = document.querySelector(".box6")
let boxElBtnSix = document.querySelector("#btnBox6")
//
let boxElSeven = document.querySelector(".box7")
let boxElBtnSeven = document.querySelector("#btnBox7")
let boxElEight = document.querySelector(".box8")
let boxElBtnEight = document.querySelector("#btnBox8")
let boxElNine = document.querySelector(".box9")
let boxElBtnNine = document.querySelector("#btnBox9")
//
let squareOne = 0
let squareTwo = 0
let squareThree = 0
let squareFour = 0
let squareFive = 0
let squareSix = 0
let squareSeven = 0
let squareEight = 0
let squareNine = 0
///////////////////
var playerOneBox = document.querySelector("#one")
var playerTwoBox = document.querySelector("#two")
//
let columnLeftEl = document.querySelector("#columnLeft")
let columnRightEl = document.querySelector("#columnRight")
//////////////////////////////////////////////////////////
let inputDivBox = document.querySelector(".inputDiv")
let containerBox = document.querySelector("#container")
let clearBox = document.querySelector("#clear")
let pointBox = document.querySelector("#point")
let scoreSectionBox = document.querySelector("#scoreSection")
let whoStartBox = document.querySelector("#whoStart")

containerBox.style.display = "none"
clearBox.style.display = "none"
pointBox.style.display = "none"
scoreSectionBox.style.display = "none"
whoStartBox.style.display = "none"


let playerOnePoints = 0
let playerTwoPoints = 0
let count = 0
let game = 0


function submitValues(){
	let playerOneVal = document.getElementById("playerOne").value
	let playerTwoVal = document.getElementById("playerTwo").value
	
	whoStartGame()
	playerOneBox.innerText = playerOneVal
	playerTwoBox.innerText = playerTwoVal
	console.log("Submit Values: " + playerOneVal + "  " + playerTwoVal)
	
containerBox.style.display = "block"
clearBox.style.display = "block"
pointBox.style.display = "block"
whoStartBox.style.display = "block"
inputDivBox.style.display = "none" 
}

function whoStartGame(){
	let playerOneVal = document.getElementById("playerOne").value
	let playerTwoVal = document.getElementById("playerTwo").value
	whoStartBox.style.fontWeight = "bold"
	
	if((game%2) == 0){
		whoStartBox.innerText = playerOneVal + "'s turn"
	}
	else{
		whoStartBox.innerText = playerTwoVal + "'s turn"
	}
}

////////////////////////////////////////////////
//The computer knows who won////////////////////
////////////////////////////////////////////////
function computerCheck(){
	if(squareOne == 1 && squareTwo == 1 && squareThree == 1){
	console.log("Game Over")
	if((game%2) == 0){
		playerOneScore()
	}
	else{
		playerTwoScore()
	}
	//setTimeout set the delay the 
	//esecution of clearDisplay()
	setTimeout(function(){
	clearDisplay()                   
	},1500);                          
}
if(squareOne == 2 && squareTwo == 2 && squareThree == 2){
	console.log("Game Over")
	if((game%2) != 0){
		playerOneScore()
	}
	else{
		playerTwoScore()
	}
	setTimeout(function(){
	clearDisplay()                   
	},1500); 
}
//---------------------------------------------------------
if(squareFour == 1 && squareFive == 1 && squareSix == 1){
	console.log("Game Over")
	if((game%2) == 0){
		playerOneScore()
	}
	else{
		playerTwoScore()
	}
	setTimeout(function(){
	clearDisplay()                   
	},1500);
}
if(squareFour == 2 && squareFive == 2 && squareSix == 2){
	console.log("Game Over")
	if((game%2) != 0){
		playerOneScore()
	}
	else{
		playerTwoScore()
	}
	setTimeout(function(){
	clearDisplay()                   
	},1500);
}
//----------------------------------------------------------
if(squareSeven == 1 && squareEight == 1 && squareNine == 1){
	console.log("Game Over")
	if((game%2) == 0){
		playerOneScore()
	}
	else{
		playerTwoScore()
	}
	setTimeout(function(){
	clearDisplay()                   
	},1500);
}
//
if(squareSeven == 2 && squareEight == 2 && squareNine == 2){
	console.log("Game Over")
	if((game%2) != 0){
		playerOneScore()
	}
	else{
		playerTwoScore()
	}
	setTimeout(function(){
	clearDisplay()                   
	},1500);
}
//////////////////////Vertical cases/////////////////////////
//
if(squareOne == 1 && squareFour == 1 && squareSeven == 1){
	console.log("Game Over")
	if((game%2) == 0){
		playerOneScore()
	}
	else{
		playerTwoScore()
	}
	setTimeout(function(){
	clearDisplay()                   
	},1500);
}
//
if(squareOne == 2 && squareFour == 2 && squareSeven == 2){
	console.log("Game Over")
	if((game%2) != 0){
		playerOneScore()
	}
	else{
		playerTwoScore()
	}
	setTimeout(function(){
	clearDisplay()                   
	},1500);
}
//--------------------------------------------------------
if(squareTwo == 1 && squareFive == 1 && squareEight == 1){
	console.log("Game Over")
	if((game%2) == 0){
		playerOneScore()
	}
	else{
		playerTwoScore()
	}
	setTimeout(function(){
	clearDisplay()                   
	},1500);
}
//
if(squareTwo == 2 && squareFive == 2 && squareEight == 2){
	console.log("Game Over")
	if((game%2) != 0){
		playerOneScore()
	}
	else{
		playerTwoScore()
	}
	setTimeout(function(){
	clearDisplay()                   
	},1500);
}
//-----------------------------------------------------------
if(squareThree == 1 && squareSix == 1 && squareNine == 1){
	console.log("Game Over")
	if((game%2) == 0){
		playerOneScore()
	}
	else{
		playerTwoScore()
	}
	setTimeout(function(){
	clearDisplay()                   
	},1500);
}
//
if(squareThree == 2 && squareSix == 2 && squareNine == 2){
	console.log("Game Over")
	if((game%2) != 0){
		playerOneScore()
	}
	else{
		playerTwoScore()
	}
	setTimeout(function(){
	clearDisplay()                   
	},1500);
}
//////////////////////Diagonal cases/////////////////////////
//
if(squareOne == 1 && squareFive == 1 && squareNine == 1){
	console.log("Game Over")
	if((game%2) == 0){
		playerOneScore()
	}
	else{
		playerTwoScore()
	}
	setTimeout(function(){
	clearDisplay()                   
	},1500);
}
//
if(squareOne == 2 && squareFive == 2 && squareNine == 2){
	console.log("Game Over")
	if((game%2) != 0){
		playerOneScore()
	}
	else{
		playerTwoScore()
	}
	setTimeout(function(){
	clearDisplay()                   
	},1500);
}
//--------------------------------------------------------
if(squareThree == 1 && squareFive == 1 && squareSeven == 1){
	console.log("Game Over")
	if((game%2) == 0){
		playerOneScore()
	}
	else{
		playerTwoScore()
	}
	setTimeout(function(){
	clearDisplay()                   
	},1500);
}
//
if(squareThree == 2 && squareFive == 2 && squareSeven == 2){
	console.log("Game Over")
	if((game%2) != 0){
		playerOneScore()
	}
	else{
		playerTwoScore()
	}
	setTimeout(function(){
	clearDisplay()                   
	},1500);
}
if(count >= 9){
	console.log("--Draw--")
	setTimeout(function(){
	clearDisplay()                   
	},1000);
}


}

function boxOne(){
	count++
	
	if((count%2) != 0){
	boxElOne.style.backgroundColor = "red"
	boxElBtnOne.style.backgroundColor = "red"
	squareOne = 1
	console.log(count)
	}else{
	boxElOne.style.backgroundColor = "#00FF00"
	boxElBtnOne.style.backgroundColor = "#00FF00"
	squareOne = 2
	console.log(count)	
	}
	computerCheck()
}
///////////////////////////////////////////////
function boxTwo(){
	count++
	if((count%2) != 0){
	boxElTwo.style.backgroundColor = "red"
	boxElBtnTwo.style.backgroundColor = "red"
	squareTwo = 1
	console.log(count)
	}else{
	boxElTwo.style.backgroundColor = "#00FF00"
	boxElBtnTwo.style.backgroundColor = "#00FF00"
	squareTwo = 2
	console.log(count)	
	}
	computerCheck()
}
///////////////////////////////////////////////
function boxThree(){
	count++
	
	if((count%2) != 0){
	boxElThree.style.backgroundColor = "red"
	boxElBtnThree.style.backgroundColor = "red"
	squareThree = 1
	console.log(count)
	}else{
	boxElThree.style.backgroundColor = "#00FF00"
	boxElBtnThree.style.backgroundColor = "#00FF00"
	squareThree = 2
	console.log(count)	
	}
	computerCheck()
}
///////////////////////////////////////////////
function boxFour(){
	count++
	
	if((count%2) != 0){
	boxElFour.style.backgroundColor = "red"
	boxElBtnFour.style.backgroundColor = "red"
	squareFour = 1
	console.log(count)
	}else{
	boxElFour.style.backgroundColor = "#00FF00"
	boxElBtnFour.style.backgroundColor = "#00FF00"
	squareFour = 2
	console.log(count)	
	}
	computerCheck()
}
///////////////////////////////////////////////
function boxFive(){
	count++
	
	if((count%2) != 0){
	boxElFive.style.backgroundColor = "red"
	boxElBtnFive.style.backgroundColor = "red"
	squareFive = 1
	console.log(count)
	}else{
	boxElFive.style.backgroundColor = "#00FF00"
	boxElBtnFive.style.backgroundColor = "#00FF00"
	squareFive = 2
	console.log(count)	
	}
	computerCheck()
}
///////////////////////////////////////////////
function boxSix(){
	count++
	
	if((count%2) != 0){
	boxElSix.style.backgroundColor = "red"
	boxElBtnSix.style.backgroundColor = "red"
	squareSix = 1
	console.log(count)
	}else{
	boxElSix.style.backgroundColor = "#00FF00"
	boxElBtnSix.style.backgroundColor = "#00FF00"
	squareSix = 2
	console.log(count)	
	}
	computerCheck()
}
///////////////////////////////////////////////
function boxSeven(){
	count++
	
	if((count%2) != 0){
	boxElSeven.style.backgroundColor = "red"
	boxElBtnSeven.style.backgroundColor = "red"
	squareSeven = 1
	console.log(count)
	}else{
	boxElSeven.style.backgroundColor = "#00FF00"
	boxElBtnSeven.style.backgroundColor = "#00FF00"
	squareSeven = 2
	console.log(count)	
	}
	computerCheck()
}

///////////////////////////////////////////////
function boxEight(){
	count++
	
	if((count%2) != 0){
	boxElEight.style.backgroundColor = "red"
	boxElBtnEight.style.backgroundColor = "red"
	squareEight = 1
	console.log(count)
	}else{
	boxElEight.style.backgroundColor = "#00FF00"
	boxElBtnEight.style.backgroundColor = "#00FF00"
	squareEight = 2
	console.log(count)	
	}
	computerCheck()
}
///////////////////////////////////////////////
function boxNine(){
	count++
	
	if((count%2) != 0){
	boxElNine.style.backgroundColor = "red"
	boxElBtnNine.style.backgroundColor = "red"
	squareNine = 1
	console.log(count)
	}else{
	boxElNine.style.backgroundColor = "#00FF00"
	boxElBtnNine.style.backgroundColor = "#00FF00"
	squareNine = 2
	console.log(count)	
	}
	computerCheck()
}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
function clearDisplay(){
	count = 0
	game++
	whoStartGame()
	
 squareOne = 0
 squareTwo = 0
 squareThree = 0
 squareFour = 0
 squareFive = 0
 squareSix = 0
 squareSeven = 0
 squareEight = 0
 squareNine = 0
	
	boxElOne.style.backgroundColor = "white"
	boxElBtnOne.style.backgroundColor = "white"
	boxElTwo.style.backgroundColor = "white"
	boxElBtnTwo.style.backgroundColor = "white"
	boxElThree.style.backgroundColor = "white"
	boxElBtnThree.style.backgroundColor = "white"
	boxElFour.style.backgroundColor = "white"
	boxElBtnFour.style.backgroundColor = "white"
	boxElFive.style.backgroundColor = "white"
	boxElBtnFive.style.backgroundColor = "white"
	boxElSix.style.backgroundColor = "white"
	boxElBtnSix.style.backgroundColor = "white"
	boxElSeven.style.backgroundColor = "white"
	boxElBtnSeven.style.backgroundColor = "white"
	boxElEight.style.backgroundColor = "white"
	boxElBtnEight.style.backgroundColor = "white"
	boxElNine.style.backgroundColor = "white"
	boxElBtnNine.style.backgroundColor = "white"
	
	console.log("Count: " + count)
	console.log("Game: " + game)
}

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

function playerOneScore(){
	let playerOneVal = document.getElementById("playerOne").value
	playerOnePoints++
	columnLeftEl.innerText = playerOneVal  + ": " + playerOnePoints
	scoreSectionBox.style.display = "block"
	console.log(playerOneVal + ": " + playerOnePoints)
}

function playerTwoScore(){
	let playerTwoVal = document.getElementById("playerTwo").value
	playerTwoPoints++
	columnRightEl.innerText = playerTwoVal + ": " + playerTwoPoints
	scoreSectionBox.style.display = "block"
	console.log(playerTwoVal + ": " + playerOnePoints)
}


