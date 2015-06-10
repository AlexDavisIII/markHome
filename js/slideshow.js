//When the document is fully loaded and ready to go
$(document).ready(function(){
	var x = 0; //used for incremental purposes.

	//set the current image source to the image in the first href
	$('img').attr('src',$('#option1').prop('href')); //used jQuery prop method o get the tagname of the first option	
	//When the right arrow is clicked
		$('.rightSelect').on('click',function(){
			//select the next sibling to the currently selected option
			
 		 if(x <= 3){
			console.log($('.optionList li a')[x]);
			x++;
			} else if (x >= 4) {
				x = 0;
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


