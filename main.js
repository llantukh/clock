//getting the clock to work
var clock = function (){
  var time = new Date ();

  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();

  var showHour = document.getElementById("hours");
  if (hour >= 10) {
    showHour.innerHTML = hour + ":"
  } else {
    showHour.innerHTML = "0" + hour + ":"
  }

  var showMinute = document.getElementById("minutes");
  if (minute >= 10) {
    showMinute.innerHTML = minute + ":"
  } else {
    showMinute.innerHTML = "0" + minute +":"
  }

  var showSecond = document.getElementById("seconds");
  if (second >= 10) {
    showSecond.innerHTML = second
  } else {
    showSecond.innerHTML = "0" + second
  }

  var hexyColor = document.getElementById("hexy");
    hexyColor.innerHTML = "#" + hour + minute + second
    hexyColor.style.backgroundColor = "#" + hour + minute + second

};

setInterval (clock, 1000);
