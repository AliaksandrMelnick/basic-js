const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date === null || date === undefined){
        return 'Unable to determine the time of year!';
  }

  let year = date.getFullYear();
  let month1 = date.getMonth();
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let msec = date.getMilliseconds();
  let originalDate = new Date(year, month1, day, hours, minutes, seconds, msec);
  
  let valueOfOriginal = originalDate.valueOf();
  let valueOfInput = date.valueOf();

  if(valueOfOriginal !== valueOfInput){
    throw new Error();
  }

  let month = date.getMonth()+",";
  let winter = 'dec,december,jan,january,feb,february,11,0,1,';
  let spring = 'mar,march,apr,april,may,2,3,4,';
  let summer = 'jun,june,jul,july,aug,august,5,6,7,';
  let autumn = 'sep,september,oct,october,nov,november,8,9,10,';
  let season = 'unknown';
  if (winter.indexOf(month) != -1) {
      season = 'winter';
  } else if (spring.indexOf(month) != -1) {
      season = 'spring';
  } else if (summer.indexOf(month) != -1) {
      season = 'summer';
  } else if (autumn.indexOf(month) != -1) {
      season = 'autumn';
  }
  return season;
};