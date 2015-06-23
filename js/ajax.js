$(document).ready(function(){
	var url1 = "test/description1.html";
	var url2 = "test/description2.html";

	$('#firstDescription').load(url1, function(){
		alert('cool');
		console.log("this finished");
	});//end of the firstDescription load function

	$('#secondDescription').load(url2, function(){
		alert('cools');
		console.log("now THIS one worked");
	});//end of secondDescription load function
});//when the document is ready to go