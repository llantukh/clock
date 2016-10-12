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
};

setInterval (clock, 1000);

//getting the hex digits to change
var color = function (){
var time = new Date ();

var hour = time.getHours();
var minute = time.getMinutes();
var second = time.getSeconds();

  // var showHex = document.getElementById("hexColor");
  // showHex.innerHTML = "<p>#" + hour + minute + second + "</p>"
};
setInterval (color, 1000);


// getting the background color to change
var hexyNumber = 123456;

var hexyChange = function (){
  hexyNumber = hexyNumber + 10;
}

var hexyBackground = function (){
  var hexyColor = document.getElementById("hexy");
  hexyColor.innerHTML = "<div style = \"background-color:" + hexyNumber + ";\"> <p style=\"color:" + (1000000-hexyNumber) + ";\"> #" + hexyNumber + "</p></div>";
  hexyColor.style.backgroundColor = ("#" + hexyNumber);
};

setInterval (clock, 1000);
setInterval (hexyBackground, 500);
setInterval (hexyChange, 500);
