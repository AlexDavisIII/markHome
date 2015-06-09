//When the document is fully loaded and ready to go
$(document).ready(function(){
	//set the current image source to the image in the first href
	$('img').attr('src',$('#option1').prop('href')); //used jQuery prop method o get the tagname of the first option	

	//if the left selector is clicked
		//access the closest sibling to the currently selected anchor	
	
	//When a list option has been clicked
	$('.optionList li a').click(function(e){
		e.preventDefault(); //prevents default action of opening a new window
		var $anchorHref= $(this).attr('href');
		
		//set that options' href attribute to to source of the image

		$('img').attr('src', $anchorHref); 
			
	}); //end of option1 click function
}); //end of document ready function


