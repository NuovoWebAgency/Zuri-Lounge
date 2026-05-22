function updateStatus() {
  const now = new Date();
  const hour = now.getHours();

  const isOpen = hour >= 11 && hour < 21;

  const dot = document.getElementById("statusDot");
  const text = document.getElementById("statusText");

  if (isOpen) {
    dot.classList.add("open");
    dot.classList.remove("closed");
    text.textContent = "OPEN • CLOSES 9PM";
  } else {
    dot.classList.add("closed");
    dot.classList.remove("open");
    text.textContent = "CLOSED • OPENS 11AM";
  }
}

updateStatus();
setInterval(updateStatus, 60000);

