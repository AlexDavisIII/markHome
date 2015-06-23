$(document).ready(function(){
	var url1 = 'descriptions/description.html';

	$('#textContent').load(url1, function(){
		$(this).hide();
		$('#textContent #description').hide();
		console.log("this finished");
		$(this).show('slow', function(){
			$(this).ready(function(){
				$('#textContent #description').slideDown('slow');
			}); //end of ready function
		}); //end of show function
	});//end of the firstDescription load function
});//when the document is ready to go
