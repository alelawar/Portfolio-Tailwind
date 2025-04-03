let index = 0;
const slides = document.querySelectorAll("#slider img");
const totalSlides = slides.length;
const slider = document.getElementById("slider");

function nextSlide() {
  index = (index + 1) % totalSlides; 
  slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextSlide, 3000); // Ganti gambar setiap 3 detik