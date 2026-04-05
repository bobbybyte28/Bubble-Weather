// Script.js
const animations = [
  [
    "assets/Frame4.png",
  "assets/Frame5.png",
  "assets/Frame6.png",
  "assets/Frame7.png",
  "assets/Frame8.png",
  "assets/Frame9.png",
  "assets/Frame8.png",
  "assets/Frame10.png",
  "assets/Frame11.png",
  "assets/Frame12.png",
  "assets/Frame13.png",
  "assets/Frame14.png",
  "assets/Frame15.png"],

  [
    "assets/Frame17.png",
  "assets/Frame18.png",
  "assets/Frame19.png",
  "assets/Frame20.png",
  "assets/Frame21.png",
  "assets/Frame22.png",
  "assets/Frame21.png",
  "assets/Frame23.png",
  "assets/Frame24.png",
  "assets/Frame25.png",
  "assets/Frame26.png",
  "assets/Frame27.png",
  "assets/Frame28.png"
  ]

];

let lastUsedIndex = parseInt(localStorage.getItem("lastAnimationIndex")) || 0;
let nextIndex = (lastUsedIndex + 1) % animations.length;
localStorage.setItem("lastAnimationIndex", nextIndex);


const luffyFrames = animations[nextIndex];



let currentFrame = 0;
const luffyImg = document.getElementById("luffy");

setInterval(() => {
  currentFrame = (currentFrame + 1) % luffyFrames.length;
  luffyImg.src = luffyFrames[currentFrame];
}, 300);


const apiKey = "2e21e870888c46248fc143603250512"; //$
let currentTempC = null;

async function fetchWeather(city = 'Pune') {
  const res = await fetch(
     `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`//$
  );
  const data = await res.json();

const weatherMsg = data.current.condition.text;//$
  currentTempC = data.current.temp_c;//$

  document.getElementById("weatherMsg").textContent = weatherMsg;//$
  updateTemperature(currentTempC, "C");//$
}


// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// } $

document.getElementById('celsiusBtn').addEventListener('click', () => {
  if (currentTempC !== null) updateTemperature(currentTempC, 'C');
});

document.getElementById('fahrenheitBtn').addEventListener('click', () => {
  if (currentTempC !== null) updateTemperature(currentTempC, 'F');
});

fetchWeather(); // Initial call

function updateTemperature(temp, unit) {
  const tempVal = unit === 'C' ? `${Math.round(temp)}` : `${Math.round((temp * 9) / 5 + 32)}`;
  
  // Update both bubbles
  const bubble1 = document.getElementById('bubbleTemp1');
  const bubble2 = document.getElementById('bubbleTemp2');

  if (bubble1) bubble1.textContent = tempVal;
  if (bubble2) bubble2.textContent = tempVal;
}