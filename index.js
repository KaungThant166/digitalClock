const updateClock = () => {
  const time = new Date();
  let hours = time.getHours().toString().padStart(2, 0);
  hours = hours % 12 || 12;
  const meridiem = hours >= 12 ? "AM" : "PM";
  const minutes = time.getMinutes().toString().padStart(2, 0);
  const seconds = time.getSeconds().toString().padStart(2, 0);

  document.getElementById(
    "clock"
  ).textContent = `${hours}: ${minutes} : ${seconds}  ${meridiem}`;
};

updateClock();
setInterval(updateClock, 1000);
