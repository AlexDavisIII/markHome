//When the document is fully loaded and ready to go
$(document).ready(function(){

setPageHeader('Insert Page Title Here'); //used to set the page title

/*GLOBAL VARIABLES*/
var END_OF_IMAGE_LIST = 3; //holds max number of images
var LEFT_RESET= 4; //used to reset the right arrow 
var RIGHT_RESET= -1; //used to reset the left arrow
var x = 0; //used for incremental purposes  				

//set the current image source to the image in the first href
$('img').attr('src',$('#option1').prop('href')); //used jQuery prop method o get the tagname of the first option	

/*FUNCTIONS*/


function getPageHeader(){
var textHeader = document.getElementById('pageHeader').textContent;

return textHeader;	
}

function setPageHeader(newHeader){
var newText = 	document.getElementById('pageHeader').textContent = newHeader;

return newText;
}


//changes the image of the current slideshow
function slider(){
//select the next sibling to the currently selected option
	var $options = $('.optionList li a');
	var $optionHref= $options[x].getAttribute("href");

//Fade into the next image over a period of time
/*TIP FOR ME: To go back to normal, just switch fadeOut to fadeIn on the top line*/
	$('img').fadeOut(500, function(){

		$(this).fadeIn(500);
		$(this).attr('src', $optionHref);
	}); 

}

/*If x value reaches the end of the list:
	Reset it so we are back to the start of the image list
 If x value has no reached the end of the array
	Continue to cycle through the list of images*/
function rightSelectClick(startingNumber){
	if(x == END_OF_IMAGE_LIST){
		x = RIGHT_RESET;
	}
	x++; //increments global x value by 1 to move up option list

	if(x>= 0 && x <= 3){
		slider();	
	}		
}; //end of rightSelectClick function

function leftSelectClick(startingNumber){
	//if x ever becomes a 0
	 //set x to become a 4 so that it may reset the cycle by capturing the image in index 3
	if(x == 0){
		x = LEFT_RESET; 	
	}
	x--; //decrements global x to move down option list

	if(x >= 0 && x <= 3){
		slider();
	} 
}; //end of leftSelectclick function

/*jQuery creations*/
//When a list option has been clicked
$('.optionList li a').click(function(e){
	e.preventDefault(); //prevents default action of opening a new window
	var $anchorHref= $(this).attr('href');

	//set that options' href attribute to to source of the image
	$('img').attr('src', $anchorHref); 

}); //end of option1 click function

//When the right arrow is clicked
$('.rightSelect').on('click',function(){
	rightSelectClick(x);	
}); //end of rightSelect onClick function

$('.leftSelect').on('click',function(){
	leftSelectClick(x);	
}); //end of leftSelect onClick function

}); //end of document ready function
