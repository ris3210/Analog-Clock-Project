let a = document.getElementById('hour');
let b = document.getElementById('min');
let c = document.getElementById('sec');

function displayTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hr = 30 * hh + mm / 2;
  let min = 6 * mm;
  let sec = 6 * ss;

  a.style.transform = `rotate(${hr}deg)`;
  b.style.transform = `rotate(${min}deg)`;
  c.style.transform = `rotate(${sec}deg)`;
}

setInterval(displayTime, 1000);
