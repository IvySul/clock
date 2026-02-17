const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

function updateClock() {
  const d = new Date();
  const s = d.getSeconds();
  const m = d.getMinutes();
  const h = d.getHours() % 12;
  hourHand.style.transform = `rotate(${h * 30 + m * 0.5}deg)`;
  minuteHand.style.transform = `rotate(${m * 6 + s * 0.1}deg)`;
  secondHand.style.transform = `rotate(${s * 6}deg)`;
}

updateClock();
setInterval(updateClock, 1000);
