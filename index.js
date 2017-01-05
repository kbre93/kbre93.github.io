function changeContent(category) {
	//TODO: Make separate html files that are inserted into the tab content
	if (category == 'About') {
		document.getElementById('contentId').innerHTML = 'I am a Biomedical Engineering PhD Student from New Zealand working on Needle-free drug delivery';
	} 
	else if(category == 'Research') {
		document.getElementById('contentId').innerHTML = 'Testing2!';	
	}
	else {
		document.getElementById('contentId').innerHTML = 'Testing3!';
	}


}


$(document).ready(function() {
	

	$('.categoryCont div .category').click(function() {

		var toLoad = $(this).attr('href');  // Getting the content from the link to load
		$('#contentId').hide('fast',loadContent); 		// Hiding the current content then loading new

		function loadContent() {
			$('#contentId').load(toLoad,'',showNewContent);
		};

		function showNewContent() {
			$('#contentId').show('normal');
		}
		return false;
	});
});






changeContent('About');