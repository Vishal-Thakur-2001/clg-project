document.getElementById("hamburgur_click").addEventListener("click" , function(){
	document.getElementById("mob-menu").style.transform = "translateX(10px)";
})
document.getElementById("close_img_mob").addEventListener("click" , function(){
	document.getElementById("mob-menu").style.transform = "translateX(500px)";
})
document.querySelector('.search__input').addEventListener('input', function() {
	const searchTerm = this.value.toLowerCase();
	const images = document.querySelectorAll('#wallpapers .col');

	images.forEach(col => {
		const img = col.querySelector('img');
		const match = img.alt.toLowerCase().includes(searchTerm);
		col.style.display = match ? '' : 'none';  // Hide or show the column
	});
});