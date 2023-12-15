 // Agrega el script para el carrusel aquí Principal
 const sliderList = document.getElementById('slider-list');
 const prevButton = document.getElementById('prev-button');
 const nextButton = document.getElementById('next-button');

 let currentIndex = 0;

 function updateSlider() {
   sliderList.style.transform = `translateX(${-currentIndex * 100}%)`;
 }

 prevButton.addEventListener('click', () => {
   currentIndex = (currentIndex - 1 + 7) % 7; // 7 es el número de elementos en el carrusel
   updateSlider();
 });

 nextButton.addEventListener('click', () => {
   currentIndex = (currentIndex + 1) % 7;
   updateSlider();
 });


 
