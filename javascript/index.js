var countDownDate = new Date("Jan 1, 2023 0:0:0").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

    var distance = countDownDate - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var hoursString = hours.toString();
    var minutesString = minutes.toString();
    var secondsString = seconds.toString();

    if(hours < 10)
        hoursString = "0" + hours.toString();
    if(minutes < 10)
        minutesString = "0" + minutes.toString();
    if(seconds < 10)
        secondsString = "0" + seconds.toString();


    document.getElementById("time-thingy").innerHTML = "There's currently " + hoursString + ":"
    + minutesString + ":" + secondsString + " until 2023!";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time-thingy").innerHTML = "HAPPY NEW YEAR :)";
        document.getElementById("balloons").setAttribute("style", "visibility: visible;");
        document.getElementById("time-thingy").setAttribute("style", "left: 30%;");
    }
}, 1000);