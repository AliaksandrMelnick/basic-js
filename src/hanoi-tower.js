const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = Math.pow(2,disksNumber) - 1;
  let turnSpeedInMinutes = turnsSpeed/60;
  let turnSpeedInSeconds = turnSpeedInMinutes/60;
  let seconds = Math.floor(turns/turnSpeedInSeconds);
  return {turns, seconds};
};
