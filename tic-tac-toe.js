//EVENT ONE
//const showBoard document.querySelector('#board');
//var boardSet = document.getElementById("#board").appendChild(); 
//var parent = getElementById("#board");
function tictactoe(){
	//document.querySelector("#board").classList.add("square");
	var boardBoxes = document.getElementById("board").querySelectorAll("div");
	for(x=0; x<boardBoxes.length; x++){
		boardBoxes[x].classList.add("square");
	}

}
window.onload=tictactoe;