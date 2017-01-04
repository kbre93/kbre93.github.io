function changeContent(category) {
	//TODO: Make separate html files that are inserted into the tab content
	if (category == 'About') {
		document.getElementById('tabContentId').innerHTML = 'I am a biomedical engineering, completing my PhD at The University of Auckland, New Zealand on Needle-free drug delivery';
	} 
	else if(category == 'Research') {
		document.getElementById('tabContentId').innerHTML = 'Testing2!';	
	}
	else {
		document.getElementById('tabContentId').innerHTML = 'Testing3!';
	}


}

changeContent('About');