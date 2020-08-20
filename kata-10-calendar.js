// convert a date string like "2017/12/02" into readable strings like December 2nd, 2017
// date will always be formatted as YYYY/MM/DD

const talkingCalendar = function (date) {
  let dateObj = toObj(date.split('/'));
  let monthStr = '';
  let dayStr = '';
  switch (dateObj.month) {
    case 1: monthStr = 'January';
      break;
    case 2: monthStr = 'February';
      break;
    case 3: monthStr = 'March';
      break;
    case 4: monthStr = 'April';
      break;
    case 5: monthStr = 'May';
      break;
    case 6: monthStr = 'June';
      break;
    case 7: monthStr = 'July';
      break;
    case 8: monthStr = 'August';
      break;
    case 9: monthStr = 'September';
      break;
    case 10: monthStr = 'October';
      break;
    case 11: monthStr = 'November';
      break;
    case 12: monthStr = 'December';
      break;
  }
  switch (dateObj.day) {
    case 1:
    case 21:
    case 31:
      dayStr = `${dateObj.day}st`;
      break;
    case 2:
    case 22:
      dayStr = `${dateObj.day}nd`;
      break;
    case 3:
    case 23:
      dayStr = `${dateObj.day}rd`;
      break;
    default: dayStr = `${dateObj.day}th`;
  }
  return (`${monthStr} ${dayStr}, ${dateObj.year}`);
}

function toObj(arr) {
  let dateObj = {};
  for (let i = 0; i < arr.length; i++) {
    switch (i) {
      case 0: dateObj.year = arr[i];
        break;
      case 1: dateObj.month = parseInt(arr[i], 10);
        break;
      case 2: dateObj.day = parseInt(arr[i], 10); // remove leading zero
        break;
    }
  }
  return dateObj;
}

// testing

console.log(talkingCalendar("2017/12/02")); // December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987