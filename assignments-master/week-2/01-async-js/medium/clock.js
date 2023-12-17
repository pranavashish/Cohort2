function updateTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let amOrPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const time12Hour = `${hours}:${minutes}:${seconds} ${amOrPm}`;
  const time24Hour = `${hours}:${minutes}:${seconds}`;

  console.log("12-Hour Format:", time12Hour);
  console.log("24-Hour Format:", time24Hour);
}

setInterval(updateTime, 1000);

updateTime();
