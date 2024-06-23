const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
//append date display to clock-container
const clockElement = document.getElementById("clock");
const dateDisplay = document.createElement("p");
dateDisplay.classList.add("dateDisplay");
dateDisplay.id = "dateDisplay";
clockElement.appendChild(dateDisplay);

//append clockDisplay to clock-container
const clockDisplay = document.createElement("p");
clockDisplay.classList.add("clockDisplay");
clockElement.appendChild(clockDisplay);
//appending the div for showing text show alaram
const subHeading = document.createElement("div");
subHeading.classList.add("subHeading");
subHeading.textContent = "Set Alaram Time";
clockElement.appendChild(subHeading);
// creating form for setting alaram
const setAlaram = document.createElement("div");
setAlaram.classList.add("input-group", "my-2");
clockElement.appendChild(setAlaram);
//div for
const hourDiv = document.createElement("div");
hourDiv.classList.add("col");
setAlaram.appendChild(hourDiv);
//create input time

//input lable
const getHourslable = document.createElement("lable");
getHourslable.setAttribute("for", "hour");
getHourslable.classList.add("form-label", "col-md-2");
getHourslable.textContent = "Hours:";
hourDiv.appendChild(getHourslable);

const getHours = document.createElement("INPUT");
getHours.id = "hour";
getHours.classList.add("form-control", "col-md-2");
getHours.setAttribute("type", "number");
getHours.setAttribute("min", "1");
getHours.setAttribute("max", "12");
setAlaram.appendChild(getHours);

const minDiv = document.createElement("div");
minDiv.classList.add("col-md-1");
setAlaram.appendChild(minDiv);

const getMinlable = document.createElement("lable");
getMinlable.setAttribute("for", "Min");
getMinlable.classList.add("form-label", "col-md-2");
getMinlable.textContent = "Minuts:";
minDiv.appendChild(getMinlable);

const getMin = document.createElement("INPUT");
getMin.id = "Min";
getMin.classList.add("form-control", "col-md-2");
getMin.setAttribute("type", "number");
getMin.setAttribute("min", "0");
getMin.setAttribute("max", "59");
setAlaram.appendChild(getMin);

const secDiv = document.createElement("div");
secDiv.classList.add("col");
setAlaram.appendChild(secDiv);
//create input time

//input lable
const getSeclable = document.createElement("lable");
getSeclable.setAttribute("for", "sec");
getSeclable.classList.add("form-label", "col-md-2");
getSeclable.textContent = "Seconds:";
secDiv.appendChild(getSeclable);

const getSec = document.createElement("INPUT");
getSec.id = "sec";
getSec.classList.add("form-control", "col-md-2");
getSec.setAttribute("type", "number");
getSec.setAttribute("min", "0");
getSec.setAttribute("max", "59");
setAlaram.appendChild(getSec);

const ampmDiv = document.createElement("div");
ampmDiv.classList.add("col");
setAlaram.appendChild(ampmDiv);

const setAmpm = document.createElement("label");
// setAmpm.id = "getAmPm";
setAmpm.classList.add("form-label", "col-md-2");
setAmpm.setAttribute("for", "getAmPm");
setAmpm.textContent = "AM/PM :";
setAlaram.appendChild(setAmpm);

const selectOpt = document.createElement("select");
selectOpt.id = "getAmPm";
// selectOpt.setAttribute("size", 2);
setAmpm.appendChild(selectOpt);

const opt1 = document.createElement("option");
// opt1.classList.add("ampm");
opt1.setAttribute("value", "AM");
opt1.textContent = "AM";
selectOpt.appendChild(opt1);

const opt2 = document.createElement("option");
// opt1.classList.add("ampm");
opt2.setAttribute("value", "PM");
opt2.textContent = "PM";
selectOpt.appendChild(opt2);

const subbmitBtn = document.createElement("div");
subbmitBtn.classList.add("col-md-2");
setAlaram.appendChild(subbmitBtn);
const btn = document.createElement("button");
btn.setAttribute("type", "button");
btn.classList.add("btn", "btn-primary");
btn.addEventListener("click", addAlaranmList);
btn.textContent = "submit";
subbmitBtn.appendChild(btn);

const alaramUList = document.createElement("ul");
alaramUList.id = "alarms-list";
clockElement.appendChild(alaramUList);

function updateClock() {
  const now = new Date();
  const day = now.getDay();
  const date = now.getDate();
  //   console.log(day);
  const month = now.getMonth();
  //   console.log(month);
  const year = now.getFullYear();
  //   console.log(year);
  const hours = now.getHours() % 12 || 12;
  //   console.log(hours);
  const minutes = now.getMinutes().toString().padStart(2, "0");
  //   console.log(minutes);
  const seconds = now.getSeconds().toString().padStart(2, "0");
  //   console.log(seconds);
  const ampm = now.getHours() >= 12 ? "PM" : "AM";
  //   console.log(ampm);

  // clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

  dateDisplay.textContent = `${days[day]} ${date}-${monthNames[month]}-${year}`;
  clockDisplay.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

function addAlaranmList() {
  const hour = document.getElementById("hour").value;
  const minute = document.getElementById("Min").value;
  const second = document.getElementById("sec").value;
  const ampm = document.getElementById("getAmPm").value;

  //   console.log(hour);
  //   console.log(minute);
  //   console.log(second);
  //   console.log(ampm);
  if (hour === "" || minute === "" || second === "") {
    alert("Please fill out all fields");
    return;
  }
  if (hour > 12 || minute > 59 || second > 59) {
    alert("Invalid time");
    return;
  }
  const alarmTime = `${hour}:${minute.padStart(2, "0")}:${second.padStart(
    2,
    "0"
  )} ${ampm}`;
  const alaramList = document.getElementById("alarms-list");
  const alarmItem = document.createElement("li");
  alarmItem.classList.add("alaramIteam", "md-3");
  alarmItem.setAttribute("data-time", alarmTime);
  alarmItem.innerHTML = `${alarmTime} <button onclick="removeAlarm(this)">Delete</button>`;
  alaramList.appendChild(alarmItem);
}

function removeAlarm(button) {
  const alarmItem = button.parentElement;
  alarmItem.remove();
}

function checkAlarms() {
  const now = new Date();
  const currentTime = `${now.getHours() % 12 || 12}:${now
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${now.getSeconds().toString().padStart(2, "0")} ${
    now.getHours() >= 12 ? "PM" : "AM"
  }`;
  //   console.log(currentTime);

  const alarms = document.querySelectorAll("li");
  // console.log(alarms);
  alarms.forEach((alarm) => {
    if (alarm.getAttribute("data-time") === currentTime) {
      alert(`Alarm for ${currentTime} is ringing!`);
      alarm.remove(); // Remove the alarm after it rings
    }
    //console.log(alarm);
  });
}

const initClock = () => {
  updateClock();
  setInterval(updateClock, 1000);
  setInterval(checkAlarms, 1000);
};
updateClock();
window.onload = initClock;
