var menu = document.getElementById('header-container');
var hamburger = document.getElementById('hamburger-menu');

hamburger.addEventListener('click', function(){
	menu.classList.toggle('large-screen');
});
