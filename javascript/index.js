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
    
    if(hours == 0 && distance != 0) {
        document.getElementById("time-thingy").setAttribute("style", "left: 28%;");
        document.getElementById("time-thingy").innerHTML = "Il reste " + minutesString + ":" + secondsString + " avant 2023!";
    }

    if(minutes == 0 && seconds > 0) {
        document.getElementById("time-thingy").setAttribute("style", "left: 20%;");
        document.getElementById("time-thingy").innerHTML = "Il reste " + secondsString + " secondes avant 2023!";
    }
    
    if(distance != 0) {
        document.getElementById("time-thingy").setAttribute("style", "left: 24%;");
        document.getElementById("time-thingy").innerHTML = "Il reste " + hoursString + ":" + minutesString + ":" + secondsString + " avant 2023!";
    }

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time-thingy").innerHTML = "Joyeuse année :)";
        document.getElementById("balloons").setAttribute("style", "visibility: visible;");
        document.getElementById("time-thingy").setAttribute("style", "left: 35%;");
    }
}, 1000);