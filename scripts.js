const countdownTimer = document.getElementById("countdown-timer");
const targetDate = new Date("2025-04-04T00:00:00"); // Fecha del festival

// Función para actualizar el contador cada segundo
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    countdownTimer.innerHTML = "¡El festival ya está aquí!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdownTimer.innerHTML = `
    <div class="countdown-item"><span>${days}</span><p>Días</p></div>
    <div class="countdown-item"><span>${hours}</span><p>Horas</p></div>
    <div class="countdown-item"><span>${minutes}</span><p>Minutos</p></div>
    <div class="countdown-item"><span>${seconds}</span><p>Segundos</p></div>
  `;
}

// Función para manejar navegación mediante clic o teclado
function goToLink(event, url) {
  // Detectar si es un clic o la tecla Enter/Espacio
  if (
    event.type === "click" ||
    (event.type === "keydown" && (event.key === "Enter" || event.key === " "))
  ) {
    // Navegar a la URL especificada
    window.location.href = url;
  }
}

// Llama a la función cada segundo
setInterval(updateCountdown, 1000);
