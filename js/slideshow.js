//When the document is fully loaded and ready to go
$(document).ready(function(){
	var x = 0; //used as an incremental for the arrayOfimages

	//while the end of the array has not been reached
	/*
	while(x <= arrayLength){
		//so long as the x variable is equal to or greater than 0	
		if(x >= 0){	
			//if left arrow is clicked
			$('.leftSelect').on('click',function(){
				//choose the image before the current image
				$('img').attr('src',arrayOfImages[x-1]);
			});
		}
		
		if(x >= 0){
		$('.rightSelect').on('click',function(){
				//choose the image before the current image
				$('img').attr('src',arrayOfImages[x-1]);
			});

		}
	};*/	
		
	//When a list option has been clicked
	$('.optionList li a').click(function(e){
		e.preventDefault(); //prevents default action of opening a new window
		var $anchorHref= $(this).attr('href');
		
		//set that options' href attribute to to source of the image

		$('img').attr('src', $anchorHref); 
			
	}); //end of option1 click function
}); //end of document ready function


