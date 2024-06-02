let Get = document.getElementById("get-name");
let pass = document.getElementById("day-pass");
let birthday = document.getElementById("birthday");
let greet = document.getElementById("greet");
let time1 = document.getElementById("time-1");
let time2 = document.getElementById("time-2");
let time3 = document.getElementById("time-3");
let tax = document.getElementById("tax");
let total = document.getElementById("total");

let input = document.getElementById("input");
let output = document.getElementById("output");

let inp = document.getElementById("btnInput");
let out = document.getElementById("btnOutput");

let original = new Date();
document.getElementById("original-data").innerHTML = original;

let Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function TellTime() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let fullTime = hour + ":" + minute + ":" + second;
  return fullTime;
}

Get.onclick = function () {
  let day = new Date();
  day = Days[day.getDay()];
  output.value = day + ", You Click @ " + TellTime();
};

pass.onclick = function () {
  let dateOfBirth = input.value;
  if (!dateOfBirth) {
    Toastify({
      text: "Please Enter Your Birth Date",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    return;
  }
  let NewTime = new Date();
  let bornTime = new Date(dateOfBirth).getTime();
  let todayTime = NewTime.getTime();
  let FullTime = todayTime - bornTime;
  FullTime = FullTime / (1000 * 60 * 60 * 24);
  output.value =
    Math.floor(FullTime) + " Your Pass Days Since You born @ " + TellTime();
};

birthday.onclick = function () {
  let dob = input.value;
  if (!dob) {
    Toastify({
      text: "Please Enter Your Next Birthday Date",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
    return;
  }

  let todayTime = new Date().getTime();
  let nextDate = new Date(dob).getTime();
  let Time = nextDate - todayTime;
  Time = Time / (1000 * 60 * 60 * 24);
  output.value =
    Math.floor(Time) + ", Days Left For Your Next Birthday. @ " + TellTime();
};

greet.onclick = function () {
  let name1 = prompt("Enter your name");
  let name2 = name1.charAt(0).toUpperCase();
  let name3 = name1.slice(1).toLowerCase();
  let Name = name2 + name3;
  let time = new Date();
  let newttime = time.getHours();
  let greeting = "Good ";

  if (newttime >= 4 && newttime < 12) {
    let html = greeting + "Morning " + Name;
    output.value = html;
  } else if (newttime >= 12 && newttime < 17) {
    let html = greeting + "Afternoon " + Name;
    output.value = html;
  } else if (newttime >= 17 && newttime < 20) {
    let html = greeting + "Evening " + Name;
    output.value = html;
  } else {
    let html = greeting + "Night " + Name;
    output.value = html;
  }
};

time1.onclick = function () {
  output.value = TellTime();
};

time2.onclick = function () {
  output.value = TellTime();
};

time3.onclick = function () {
  output.value = TellTime();
};

tax.onclick = function () {
  let num1 = +prompt("Enter Your Price");
  let tax = +prompt("Enter Your Tax");
  let Number = (num1 / 100) * tax;
  Number = Math.floor(Number);
  output.value = Number;
};

total.onclick = function () {
  let num1 = +prompt("Enter Your Price");
  let tax = +prompt("Enter Your Tax");
  let Number = (num1 / 100) * tax;
  let originalPrice = num1 + Number;
  originalPrice = Math.round(originalPrice);
  Number = Math.floor(Number);
  output.value =
    "Your Price: " +
    num1 +
    " " +
    "Your Tax: " +
    Number +
    " " +
    "Your Original Price is : " +
    originalPrice;
};

inp.onclick = function () {
  input.value = "";
};

out.onclick = function () {
  output.value = "";
};
