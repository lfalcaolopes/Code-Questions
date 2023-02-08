/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let roman = "";
  const romans = ["M", "D", "C", "L", "X", "V", "I"];
  const nums = [1000, 500, 100, 50, 10, 5, 1];

  while (num !== 0) {
    for (let i = 0; i < nums.length; i++) {
      if (num >= nums[i] * 4) {
        roman += romans[i] + romans[i - 1];
        num -= nums[i] * 4;
      } else if (num >= nums[i]) {
        roman += romans[i];
        num -= nums[i];
        break;
      }
    }
  }
};

intToRoman(14);
