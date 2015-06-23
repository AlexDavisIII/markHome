$(document).ready(function(){
	var url1 = 'descriptions/description.html';

	$('#textContent').load(url1, function(){
		$(this).hide();//hides the content container
		$('#textContent #description').hide(); //hides the description in the container

		console.log("this finished");
		$(this).show('slow', function(){
			$(this).ready(function(){
				$('#textContent #description').slideDown('slow');
				console.log('show have executed');
			}); //end of ready function
		}); //end of show function
	});//end of the firstDescription load function
});//when the document is ready to go
