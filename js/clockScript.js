// Checks the current date, formats it and displays it.
function startTime() {
  var today = new Date();
  let second = checkNumber(today.getSeconds());
  let minute = checkNumber(today.getMinutes());
  let hour = checkNumber(today.getHours());

  document.getElementById('time').innerHTML = hour + ":" + minute;
  document.getElementById('seconds').innerHTML = second;
}

// Checks the current date, formats it and displays it.
function startDate(){
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  var weekday = today.getDay();

  month = checkMonth(month);
  weekday = checkWeekday(weekday);

  document.getElementById('date').innerHTML = weekday + ", " + day + month + year;
}

// Checks the given weekday number "i" and returns the coherent day name as a string.
function checkWeekday(i){
  switch(i){
    case 0:
      i = "Sunday";
      break;
    case 1:
      i = "Monday";
      break;
    case 2:
      i = "Tuesday";
      break;
    case 3:
      i = "Wednesday";
      break;
    case 4:
      i = "Thursday";
      break;
    case 5:
      i = "Friday";
      break;
    case 6:
      i = "Saturday";
      break;
    default:
      i = "NaN";
      break;
  }
  return i;
}

// Checks the given month number "i" and returns the coherent month as a string.
function checkMonth(i){
  switch(i){
    case 1:
      i = " January ";
      break;
    case 2:
      i = " February ";
      break;
    case 3:
      i = " March ";
      break;
    case 4:
      i = " April ";
      break;
    case 5:
      i = " May ";
      break;
    case 6:
      i = " June ";
      break;
    case 7:
      i = " July ";
      break;
    case 8:
      i = " August ";
      break;
    case 9:
      i = " September ";
      break;
    case 10:
      i = " October ";
      break;
    case 11:
      i = " November ";
      break;
    case 12:
      i = " December ";
      break;
  }
  return i;
}

// Checks if a number is below 10 and then adds a zero in front of the number.
function checkNumber(i) {
  if (i < 10) {
    i = "0" + i;
  } return i;
}


// Timers
setInterval(startTime, 500);
setInterval(startDate, 500);