//GO TO LINE 26 for function you are currently working on

/*
var colors = ['#009900', '#007F00', '#006600', '#004c00'];
*/

//When the document is fully loaded and ready to go
$(document).ready(function(){



/*GLOBAL VARIABLES*/
var START_OF_IMAGE_LIST = 0; //placeholder for the start of the image list
var END_OF_IMAGE_LIST = 3; //represents the end of the list 
var LEFT_RESET= 4; //used to reset the right arrow 
var RIGHT_RESET= -1; //used to reset the left arrow
var x = 0; //used for incremental purposes  				
var colorIterator = 0; //used for color iterator for bgColorChange function
var interval; //holds the interval value


setPageHeader('Insert Page Title Here'); //used to set the page title. Go ahead and add some text in the () and watch it work!

/*After about 500 milliseconds choose a new color*/
/*
interval = window.setInterval(bgColorChange, 5000); //end of interval's setInterval function
*/

//set the current image source to the image in the first href
$('img').attr('src',$('#option1').prop('href')); //used jQuery prop method o get the tagname of the first option	

/*FUNCTIONS*/

/*Slide Up the text areas a few seconds after the document is done loading*/

/*
$('#part1, #part2').hide();


$('#part1, #part2').slideDown('1500',function(){
	console.log('function completed');
});
*/

//Changes the background color of elements over a period of time
/*
function bgColorChange(){
	//change the colors of an element
	$("#head").css('background-color', function(color){
		/*Transition to the next color if:
			the colorIterator variable is less than or equal to the length of the array
			*/
/*
		console.dir('Position: '+ colorIterator +' Color: ' + colors[colorIterator]);
		console.dir(colors.length);
		if(colorIterator >= colors.length){
			colorIterator = 0;
		}else if(colorIterator < colors.length){
			color =	colors[colorIterator];
			colorIterator++;	
			return color;

		}//if-else statement
	});//end of #head color change function	
}//end of bgColorChange function 

*/

//gets what the current header is (the one at the top)
function getPageHeader(){
var textHeader = document.getElementById('pageHeader').textContent;

return textHeader;	
}


//Set the main header of the page (the one at the top of the page)
function setPageHeader(newHeader){
var newText = 	document.getElementById('pageHeader').textContent = newHeader;

return newText;
}


//changes the image of the current slideshow when arrow button is clicked
//selects the next sibling to the currently selected option
function slider(){
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

	if(x>= START_OF_IMAGE_LIST && x <= END_OF_IMAGE_LIST){
		slider();	
	}		
}; //end of rightSelectClick function


/*if x value is the start of the image list
	Reset value so that the next image is the final image*/
function leftSelectClick(startingNumber){
	if(x == START_OF_IMAGE_LIST){
		x = LEFT_RESET; 	
	}
	x--; //decrements global x (4) to move down option list (3)

	if(x >= START_OF_IMAGE_LIST && x <= END_OF_IMAGE_LIST){
		slider();
	} 
}; //end of leftSelectclick function

/*jQuery creations*/

/*After a list option has been clickedL
	Change the main image to the selected options' href attribute*/
$('.optionList li a').click(function(e){
	e.preventDefault(); //prevents default action of opening new window
	var $anchorHref= $(this).attr('href'); //gets options' href
	$('img').attr('src', $anchorHref); //set attribute to image 

}); //end of image click function

/*When the right arrow is clicked
	Choose the image after the current*/
$('.rightSelect').on('click',function(){
	rightSelectClick(x);	
}); //end of rightSelect onClick function


/*When the left arrow is clicked
	Chose the image before the current image*/
$('.leftSelect').on('click',function(){
	leftSelectClick(x);	
}); //end of leftSelect onClick function

}); //end of document ready function
