
var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("span");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++)
{
	//Changes the Color of Square 
    squares[i].style.backgroundColor = colors[i];
    
    //Action to be taken when Square is Clicked
    squares[i].addEventListener("click",function(){
     
    var colorPicked = this.style.backgroundColor;
     	if(colorPicked === pickedColor)
    	{
    		messageDisplay.textContent = "CORRECT";
    		changeColors(colorPicked);
    		h1.style.backgroundColor = colorPicked;
    		reset.textContent = "PLAY AGAIN?";
    	}
    	else
    	{
    		this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "TRY AGAIN";
    	}
    });
}

function changeColors(myColor){
  
  //Changing the Colors of Squares 
  for(var i=0; i<squares.length; i++)
  {
     squares[i].style.backgroundColor = myColor;
  }
}

function pickColor(){
    
    //Picking any Random color from our Array of Colors
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){

   var arr = [];

   for(var i=0; i<num; i++)
   {
     arr.push(randomColor());
   }

   return arr; 
}

function randomColor(){

	var r = Math.floor(Math.random() * 256);
   
    var g = Math.floor(Math.random() * 256);
	
	var b = Math.floor(Math.random() * 256);
  
	return "rgb(" + r + ", " + g + ", " + b + ")";

}

reset.addEventListener("click",function(){
    
   
    colors =  generateRandomColor(numSquares);
    
    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    reset.textContent = "NEW COLORS"
    messageDisplay.textContent = "";
    
    for(var i=0; i<squares.length; i++)
    {
    	squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "steelblue";
    
});

easybtn.addEventListener("click",function(){
	   easybtn.classList.add("selected");
	   hardbtn.classList.remove("selected");
	   numSquares = 3;
	    colors =  generateRandomColor(numSquares);
	    
	    pickedColor = pickColor();

	    colorDisplay.textContent = pickedColor;
	    
	    for(var i=0; i<squares.length; i++)
	    {
	    	if(colors[i]){
	    	squares[i].style.backgroundColor = colors[i];
	        }
	        else{
	        	squares[i].style.display = "none";
	        }
	    }

});

hardbtn.addEventListener("click",function(){
	   easybtn.classList.remove("selected");
	   hardbtn.classList.add("selected");
	   
	   numSquares = 6;

	    colors =  generateRandomColor(numSquares);
	    
	    pickedColor = pickColor();

	    colorDisplay.textContent = pickedColor;
	    
	    for(var i=0; i<squares.length; i++)
	    {
	    	squares[i].style.backgroundColor = colors[i];
	    	squares[i].style.display = "block";
	    }

	   
});
