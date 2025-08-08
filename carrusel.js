const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slides.length;
let intervalId = null;

// Mostrar imagen actual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

// Avanzar a la siguiente imagen
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

// Retroceder a la imagen anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Reinicia el temporizador del carrusel automático
function restartInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 5000);
}

// Configurar botones de navegación
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

if (btnNext && btnPrev) {
  btnNext.addEventListener('click', () => {
    nextSlide();
    restartInterval();
  });

  btnPrev.addEventListener('click', () => {
    prevSlide();
    restartInterval();
  });
}

// Iniciar carrusel automático
showSlide(currentIndex);
intervalId = setInterval(nextSlide, 5000);
