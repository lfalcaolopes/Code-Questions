/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = "";
  let lowerLength = 300;

  for (let i in strs) {
    if (strs[i].length < lowerLength) lowerLength = strs[i].length;
  }

  for (let i = 0; i < lowerLength; i++) {
    result += strs[0][i];
    for (let j in strs) {
      if (strs[j][i] !== result[i]) return result.slice(0, -1);
    }
  }

  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
