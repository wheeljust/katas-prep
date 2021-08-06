/*
Kata 13 - take a date in one format and make it a more readable format as a string
*/

//Set up two arrays, one for all possible dates in the month, and one for all months in the year

const days = ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th','13th','14th','15th','16th','17th','18th','19th','20th','21st','22nd','23rd','24th','25th','26th','27th','28th','29th','30th','31st'];

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//Parse the date passed to the function and set it to an array, then convert the strings for "day" and "month" into integers
//Use these integers to find the correct index value in the predefined days & months arrays - return the final string
//In the parseInt() function, the second parameter is always 10 (means for base 10 numbers)

const talkingCalendar = function(date) {
  let dateArr = date.split('/');
  let monthInt = parseInt(dateArr[1],10);
  let dayInt = parseInt(dateArr[2],10);
  return months[monthInt - 1] + ' ' + days[dayInt - 1] + ', ' + dateArr[0];
};


//Test cases below
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));