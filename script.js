function updateMyClock() {
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  let now = new Date();
  let hour = (now.getHours() % 12 || 12).toString().padStart(2, "0");
  let min = now.getMinutes().toString().padStart(2, "0");
  let sec = now.getSeconds().toString().padStart(2, "0");
  let ampm = now.getHours() >= 12 ? "PM" : "AM";

  timeElement.innerText = `${hour}:${min}:${sec} ${ampm}`;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let date = now.toLocaleDateString(undefined, options);

  dateElement.innerText = `${date}`;
}
setInterval(updateMyClock, 1000);

function darkLightMode() {
  const themeToggle = document.querySelector(".themeToggle");
  const container = document.querySelector(".container");
  const moonIcon = document.querySelector(".ri-lightbulb-line");

  themeToggle.addEventListener("click", () => {
    container.classList.toggle("light");
    moonIcon.classList.toggle("light");
  });
}

darkLightMode();
updateMyClock();
