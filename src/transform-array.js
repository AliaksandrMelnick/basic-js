const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error();
  }
  let controlSequesnce = new Map();
  for(let i=0; i<arr.length; i++){
    if(typeof(arr[i]) === 'string'){
      controlSequesnce.set(i, {count: 0});
      switch(arr[i]){
        case '--discard-next':
          if(i+1 < arr.length){
            controlSequesnce.set(i+1, {count: 0});
            i++;
          }
          break;
        case '--discard-prev':
          if(i-1 > 0){
            if(controlSequesnce.has(i-1)){
              let item = controlSequesnce.get(i-1);
              if(item.count > 0){
                item.count--;
                controlSequesnce.set(i-1, item);
              }
            }
          }
          break;
        case '--double-next':
          if(i+1 < arr.length){
            controlSequesnce.set(i+1, {item: arr[i+1], count:2});
            i++;
          }
          break;
        case '--double-prev':
          if(i-1 > 0){
            if(controlSequesnce.has(i-1)){
              let item = controlSequesnce.get(i-1);
              if(item.count > 0){
                item.count++;
                controlSequesnce.set(i-1, item);
              }
            }
          }
          break;
        default:
          controlSequesnce.set(i, {item: arr[i], count: 1});
          break;
      }
    }else{
      controlSequesnce.set(i, {item: arr[i], count: 1});
      continue;
    }
  }
  let result = [];
  for(let controlItem of controlSequesnce){
    if(controlItem[1].count > 0){
      for(let i=0; i<controlItem[1].count; i++){
        let addItem = controlItem[1].item;
        result.push(addItem);
      }
    }
  }
  return result;
};