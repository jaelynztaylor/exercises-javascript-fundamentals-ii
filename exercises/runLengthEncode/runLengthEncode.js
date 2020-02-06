/**
 * Given a string that doesn't contain any numbers, returns a run-length
 * encoded copy of the input string.
 *
 * We're exluding numbers to avoid ambiguity. A string like '112211' would
 * be encoded as encoded as '212221', which could also mean twenty-one 2s
 * followed by twenty-two 1s.
 *
 * There are ways around this, but focus first on getting a version that
 * works strings that doesn't contain numbers.
 *
 *
 * @example
 * runLengthEncode('A'); // => '1A'
 * runLengthEncode('AB'); // => '1A1B'
 * runLengthEncode('Mississippi'); // => '1M1i2s1i2s1i2p1i'
 * runLengthEncode('WWWWWWAAAAAAWWWWWWAAAAAABBBBBB'); // => '6W6A6W6A6B'
 *
 * @param {string} input - A string that doesn't contain numbers
 * @returns {string} A run-length encoded copy of the input string
 */

function runLengthEncode(string) {
  let element = string[i]
  let newArray= []
  for (let i = 0; i < string.length; i++) {
    if {
      element = element[i +1]
      count++
    }
   else {
     element != 
   } 
  }
}

function stringtoArray(string) {
  let stringArray = [];
  for (let i of string) { stringArray.push(i); }

  return stringArray;
}

function arrayCounter(array) {

}

/*the code below is what's on Jalen's git as well! I wanted
to keep it so I can compare it with what I was trying to do
ABOVE
*/

function runLengthEncode(num) {
  let newArr=[];
  let count=1
  for (let i = 0; i < num.length; i++) {
    if (num[i]===num[i+1]){
  count+=1
  } else {
  newArr.push(count,num[i])
  count=1
  }
  }
  let newStr=''
  for (let i of newArr){
  newStr=newStr+i }
  console.log(newStr);
  return newStr
}

if (require.main === module) {
  console.log('Running sanity checks for runLengthEncode:');

  console.log(runLengthEncode('WWWWWWAAAAAAWWWWWWAAAAAABBBBBB') === '6W6A6W6A6B');
  console.log(runLengthEncode('A') === '1A');
  console.log(runLengthEncode('AB') === '1A1B');
  console.log(runLengthEncode('Mississippi') === '1M1i2s1i2s1i2p1i');
}

module.exports = runLengthEncode;
