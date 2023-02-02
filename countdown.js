var countDownDate = new Date("Apr 30, 2023 00:00:00").getTime();

var myFunction = setInterval(function() {
    
    var now = new Date().getTime();
    var timeLeft = countDownDate - now;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + " days "
    document.getElementById("hours").innerHTML = hours + " hours "
    document.getElementById("mins").innerHTML = minutes + " minutes "
    document.getElementById("secs").innerHTML = seconds + " seconds "
    document.getElementById("birthday").innerHTML = "until april 30th!"

    if (timeLeft < 0) {
        clearInterval(myFunction);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("birthday").innerHTML = ""
        document.getElementById("end").innerHTML = "HAPPY BIRTHDAY!!";
    };
}, 1000)