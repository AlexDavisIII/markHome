//When the user clicks on a link, change the image in the middle of the page
var $text = ("<div></div>"); //jquery object for div 

//when the user clicks on a choice
$(".optionList .testLink").click(function(){
	//change the image src attribute to the value of the image

	var $theImage = $("#boxWrap img"); //selects the image in the page	
	var $optionAttribute = $(this).attr("href"); //catures the href attribute of the option choice 

	$($theImage).attr("src", $optionAttribute);

});
