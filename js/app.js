const sidenavOverlay = document.querySelector('.sidenav-overlay'),
icon = document.querySelector('.icon'),
header = document.querySelector('header'),
navBg = document.querySelector('.nav-bg'),
headerH = header.scrollHeight.toString() + 'px';
window.onload = function(){
	navBg.style.height = headerH;
};
icon.addEventListener('click', () => {
	header.classList.toggle('active');
	if (sidenavOverlay.classList.contains('sidenav-overlay-none')) {
		sidenavOverlay.classList.remove('sidenav-overlay-none');
	}else{
		sidenavOverlay.classList.add('sidenav-overlay-vanished');
		setTimeout(none, 500);
	}
});
sidenavOverlay.addEventListener('click', () => {
	header.classList.remove('active');
	sidenavOverlay.classList.add('sidenav-overlay-vanished');
	setTimeout(none, 500);
});
function none(){
	sidenavOverlay.classList.remove('sidenav-overlay-vanished');
	sidenavOverlay.classList.add('sidenav-overlay-none');
}