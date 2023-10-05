
var userName = prompt("Kullanici adi giriniz:");
document.getElementById("user").innerHTML = userName;

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    const daysOfWeek = [
        'Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'
      ];
    const dayOfWeek = daysOfWeek[today.getDay()];
   
    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('current_time').innerHTML = h + ":" + m + ":" + s + " " + dayOfWeek;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };  
    // add zero in front of (numbers < 10)
    return i;
  }

  startTime();

