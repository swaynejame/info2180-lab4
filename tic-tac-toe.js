function tictactoe(){

	var board = document.querySelector("#board");
	var boardBoxes = board.querySelectorAll("div");
	var EMPTY ='';
	var tracker=0;
	var cellNum=0;
	var x_O;
	var stat = document.querySelector("#status");

	boardBoxes.forEach(element =>{
		element.setAttribute("class","square");//Adds class with value square to each div
		element.textContent =EMPTY;
		element.setAttribute("id",cellNum++);
	});

	boardBoxes.forEach(element => {
		element.addEventListener("click",function(){
			if (element.textContent !== EMPTY){
				return; //alert("Stop trying to cheat");
			}
			tracker+=1;
			if(tracker %2 ==0){
				this.textContent='O';
				this.classList.add('square','O');
			}
			else{
				this.textContent='X';
				this.classList.add('square','X');
			}
			gameOver();
		});//end inner
	});//end outer

	boardBoxes.forEach(element=>{
		element.addEventListener("mouseover",function(){
			element.classList.add("hover");
		});
		element.addEventListener("mouseleave",function(){
			element.classList.remove("hover");
		});
	});

	function gameOver(){
		if(boardBoxes[0].textContent==boardBoxes[1].textContent && boardBoxes[1].textContent==boardBoxes[2].textContent &&boardBoxes[0].textContent==boardBoxes[2].textContent && boardBoxes[2].textContent !== "")
			results(boardBoxes[0].textContent);
		if(boardBoxes[3].textContent==boardBoxes[4].textContent && boardBoxes[4].textContent==boardBoxes[5].textContent &&boardBoxes[3].textContent==boardBoxes[5].textContent && boardBoxes[5].textContent !== "")
			results(boardBoxes[3].textContent);
		if(boardBoxes[6].textContent==boardBoxes[7].textContent && boardBoxes[7].textContent==boardBoxes[8].textContent &&boardBoxes[6].textContent==boardBoxes[8].textContent && boardBoxes[8].textContent !== "")
			results(boardBoxes[6].textContent);
		if(boardBoxes[0].textContent==boardBoxes[3].textContent && boardBoxes[3].textContent==boardBoxes[6].textContent &&boardBoxes[0].textContent==boardBoxes[6].textContent && boardBoxes[6].textContent !== "")
			results(boardBoxes[0].textContent);
		if(boardBoxes[1].textContent==boardBoxes[4].textContent && boardBoxes[4].textContent==boardBoxes[7].textContent &&boardBoxes[1].textContent==boardBoxes[7].textContent && boardBoxes[7].textContent !== "")
			results(boardBoxes[1].textContent);
		if(boardBoxes[2].textContent==boardBoxes[5].textContent && boardBoxes[5].textContent==boardBoxes[8].textContent &&boardBoxes[2].textContent==boardBoxes[8].textContent && boardBoxes[8].textContent !== "")
			results(boardBoxes[2].textContent);
		if(boardBoxes[0].textContent==boardBoxes[4].textContent && boardBoxes[4].textContent==boardBoxes[8].textContent &&boardBoxes[0].textContent==boardBoxes[8].textContent && boardBoxes[8].textContent !== "")
			results(boardBoxes[0].textContent);
		if(boardBoxes[6].textContent==boardBoxes[4].textContent && boardBoxes[4].textContent==boardBoxes[2].textContent &&boardBoxes[6].textContent==boardBoxes[2].textContent && boardBoxes[2].textContent !== "")
			results(boardBoxes[6].textContent);
	}

	var results = function(x_O){
		stat.classList.add("class", "you-won");
    	stat.textContent = `Congratulations! ${x_O} is the Winner!`;
	}
}
window.onload=tictactoe;