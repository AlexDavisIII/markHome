//When the document is fully loaded and ready to go
$(document).ready(function(){

setPageHeader('Insert Page Title Here'); //used to set the page title

/*GLOBAL VARIABLES*/

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

		function rightSelectClick(startingNumber){
			//if x becomes a 3
			 // set the x variable to -1 so it may be changed to a 0 immediately after.
			if(x == 3){
				x = RIGHT_RESET;
			}
			x++; //increments global x value by 1 to move up option list

			//so long as you have not reached the max number of option spots
			if(x>= 0 && x <= 3){
				//select the next sibling to the currently selected option
				var $options = $('.optionList li a');
				var $optionHref= $options[x].getAttribute("href");
				$('img').attr('src', $optionHref);
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
				//select the next sibling to the currently selected option
				var $options = $('.optionList li a');
				var $optionHref= $options[x].getAttribute("href");
				$('img').attr('src', $optionHref);
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
