let index = 0;
const slides = document.querySelectorAll("#slider img");
const totalSlides = slides.length;
const slider = document.getElementById("slider");

function nextSlide() {
  index = (index + 1) % totalSlides; 
  slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextSlide, 3000); // Ganti gambar setiap 3 detik


const menu = document.getElementById('menu');
const navMobile = document.getElementById('nav-mobile');

menu.addEventListener('click', function (e) {
  e.stopPropagation(); // biar gak langsung kena event window
  menu.classList.toggle('active-menu');
  navMobile.classList.toggle('hidden');
});

navMobile.addEventListener('click', function (e) {
  e.stopPropagation(); // biar gak nutup nav saat kita klik isi nav-nya
});

window.addEventListener('click', function () {
  if (!navMobile.classList.contains('hidden')) {
    // kalau nav-nya lagi aktif (tidak hidden), kita tutup
    navMobile.classList.add('hidden');
    menu.classList.remove('active-menu');
  }
});
