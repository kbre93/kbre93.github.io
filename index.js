// function changeContent(category) {
// 	//TODO: Make separate html files that are inserted into the tab content
// 	if (category == 'About') {
// 		document.getElementById('contentId').innerHTML = 'I am a Biomedical Engineering PhD Student from New Zealand working on Needle-free drug delivery';
// 	} 
// 	else if(category == 'Research') {
// 		document.getElementById('contentId').innerHTML = 'Testing2!';	
// 	}
// 	else {
// 		document.getElementById('contentId').innerHTML = 'Testing3!';
// 	}
// }

// $(document).ready(function() {
// 	$('.categoryCont div.category').click(function() { // When clicked
// 		var toLoad = $(this).attr('href');  			// Getting the content from the link to load
// 		$('#contentId').hide('fast',loadContent); 		// Hiding the current content then loading new

// 		function loadContent() {
// 			$('#contentId').load(toLoad,'',showNewContent);
// 		};

// 		function showNewContent() {
// 			$('#contentId').show('normal');
// 		}
// 		return false;
// 	});
// });

$(document).ready( function() {
    $(".tab").on("click", function() {
        $("#contentId").load($(this).attr('href'));
    });

    $("#contentId").load("about.html");
});


// load_page('about.html');