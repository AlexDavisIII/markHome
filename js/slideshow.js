//When the document is fully loaded and ready to go
$(document).ready(function(){
	//set the current image source to the image in the first href
	$('img').attr('src',$('#option1').prop('href')); //used jQuery prop method o get the tagname of the first option	

/*
	//if the left selector is clicked
		$('.leftSelect').on('click',function(){
			//make the image source assigned to the image of the nearest sibling of the current anchor
			$('img').attr('src', function(){
				 $('.optionList li a').attr('href').next();
			});
		}); 	
*/	
	//When a list option has been clicked
	$('.optionList li a').click(function(e){
		e.preventDefault(); //prevents default action of opening a new window
		var $anchorHref= $(this).attr('href');
		
		//set that options' href attribute to to source of the image
		$('img').attr('src', $anchorHref); 
			
	}); //end of option1 click function
}); //end of document ready function


