/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let roman = "";
  const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  while (num !== 0) {
    for (let i = 0; i < nums.length; i++) {
      if (num >= nums[i]) {
        roman += romans[i];
        num -= nums[i];
        break;
      }
    }
  }

  return roman;
};

console.log(intToRoman(1994));
