const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  for(let i = 0; i<matrix.length; i++)
  {
    for(let j = 0; j<matrix[i].length;j++)
    {
        if(typeof(matrix[i][j])==='string')
        {
            var text = matrix[i][j];
            if(text.length == 2 && text === '^^')
            {
              result++;
            }
        }
    }
  }
  return result;
};
