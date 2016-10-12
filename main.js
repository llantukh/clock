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
};

setInterval (clock, 1000);


var color = function (){
var time = new Date ();

var hour = time.getHours();
var minute = time.getMinutes();
var second = time.getSeconds();

  var showHex = document.getElementById("hexColor");
  showHex.innerHTML = "<p>#" + hour + minute + second + "</p>"
};
setInterval (color, 1000);

// hexy.style="background-color:#f5b405"
// hexy.animate({ backgroundColor: '#f5b405' }, 'fast');
