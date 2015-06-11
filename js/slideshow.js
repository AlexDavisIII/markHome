//When the document is fully loaded and ready to go
$(document).ready(function(){
		var LEFT_RESET= 4; //used to reset the right arrow 
		var RIGHT_RESET= -1; //used to reset the left arrow
		var x = 0; //used for incremental purposes 
		
		//set the current image source to the image in the first href
		$('img').attr('src',$('#option1').prop('href')); //used jQuery prop method o get the tagname of the first option	

		//When the right arrow is clicked
		$('.rightSelect').on('click',function(){

			if(x == 3){
			x = RIGHT_RESET;
			}

			x++;
			//so long as you have not reached the max number of option spots
			if(x>= 0 && x <= 3){
			//select the next sibling to the currently selected option
				var $options = $('.optionList li a');
				var $optionHref= $options[x].getAttribute("href");
				$('img').attr('src', $optionHref);
			}		
			});




		$('.leftSelect').on('click',function(){
			//so long as you have not reached the max number of option spots
			if(x == 0){
				x = LEFT_RESET; 	
			}
			x--;
			if(x >= 0 && x <= 3){
			//select the next sibling to the currently selected option
				var $options = $('.optionList li a');
				var $optionHref= $options[x].getAttribute("href");

				$('img').attr('src', $optionHref);
			} 
			});





		//When a list option has been clicked
		$('.optionList li a').click(function(e){
				e.preventDefault(); //prevents default action of opening a new window
				var $anchorHref= $(this).attr('href');

				//set that options' href attribute to to source of the image
				$('img').attr('src', $anchorHref); 

				}); //end of option1 click function
}); //end of document ready function


