var lengthOfLongestSubstring = function(s) {
  let arr = [];
  const sArr = s.split("");
  let largeString = 0;

  for (let i = 0; i < sArr.length; i++) {
  if (arr.indexOf(sArr[i]) === -1) {
      arr.push(sArr[i]);

      if (arr.length > largeString) {
      largeString = arr.length;
      }
  } else {
      arr = arr.slice(arr.indexOf(s[i]) + 1);
      arr.push(sArr[i]);
  }
  }

  return largeString
};

console.log(lengthOfLongestSubstring('abcabacbb'))