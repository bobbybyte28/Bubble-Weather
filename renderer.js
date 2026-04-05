// renderer.js
window.addEventListener('DOMContentLoaded', () => {
  // Example: Animate Luffy on hover
  const luffyImg = document.getElementById('luffy');
  if (luffyImg) {
    luffyImg.addEventListener('mouseenter', () => {
      luffyImg.classList.add('animate');
    });

    luffyImg.addEventListener('mouseleave', () => {
      luffyImg.classList.remove('animate');
    });
  }

  // Example: Fetch weather on button click
  const btn = document.getElementById('getWeather');
  if (btn) {
    btn.addEventListener('click', async () => {
      const city = document.getElementById('cityInput').value;

      // Dummy data or replace with real API call
      document.getElementById('weatherOutput').innerText =
        `Weather in ${city}: Sunny ☀️ 27°C`;
    });
  }
});

//this is added now
const { ipcRenderer } = require('electron');

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("min-btn").addEventListener("click", () => {
        ipcRenderer.send("minimizeWindow");
    });

    document.getElementById("close-btn").addEventListener("click", () => {
        ipcRenderer.send("closeWindow");
    });
});
