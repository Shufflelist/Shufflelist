function plusSlides(n) {
	clearTimeout(timer);
  	showSlides(slideIndex += n);
}

function currentSlide(n) {
	clearTimeout(timer);
  	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slideshow-slide");
	var dots = document.getElementsByClassName("slideshow-dot");
	if (n==undefined){n = ++slideIndex}
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
	  	slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" slideshow-active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " slideshow-active";

	timer = setTimeout(showSlides, 7000);
}
