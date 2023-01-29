var isPalindrome = function (x) {
  s = x.toString();

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(-121));
