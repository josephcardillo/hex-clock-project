function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var numSign = "#";
    m = checkTime(m);
    s = checkTime(s);
    var color = numSign+h+m+s;
    document.getElementById('time').innerHTML =
    numSign + "" + h + "" + m + "" + s;
    var t = setTimeout(startTime, 1000);
    console.log(color);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
