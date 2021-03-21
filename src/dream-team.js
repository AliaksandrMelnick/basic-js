const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  }
  let tempArray = [];
  for(let item of members)
  {
    if(typeof(item) == 'string')
    {
      let trimmedText = item.trim();
      if(trimmedText.length > 0){
        let firstChar = trimmedText.toUpperCase().charAt(0);
        tempArray.push(firstChar);
      }
    }
  }
  let result = '';
  tempArray.sort();
  for(let item of tempArray)
  {
    result += item;
  }
  return result;
};
