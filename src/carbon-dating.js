const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) !== "string")
  {
    return false;
  }
  var activity = +sampleActivity;
  if(isNaN(sampleActivity) || activity < 1 || activity > 15)
  {
    return false;
  }
  let k = Math.log(2)/HALF_LIFE_PERIOD;
  let result = Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k);
  return result;
};
