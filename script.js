// Ocultar Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
    startCounters(); // Iniciar contadores numéricos
  }, 1000);
});

// Generador de Destellos (Sparkles) de fondo
function createSparkles() {
  const container = document.getElementById('sparkles');
  const sparkleCount = 20;

  for (let i = 0; i < sparkleCount; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    
    // Posiciones y tamaños aleatorios
    const size = Math.random() * 8 + 4;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.left = `${Math.random() * 100}vw`;
    sparkle.style.animationDelay = `${Math.random() * 5}s`;
    sparkle.style.animationDuration = `${Math.random() * 4 + 4}s`;
    
    container.appendChild(sparkle);
  }
}

// Animación de Contadores Numéricos
function startCounters() {
  const counters = document.querySelectorAll('.stat-number');
  
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const speed = target / 30; // Velocidad de la cuenta

    const updateCount = () => {
      count += speed;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        setTimeout(updateCount, 40);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}

// Inicializar funciones
document.addEventListener('DOMContentLoaded', () => {
  createSparkles();
});