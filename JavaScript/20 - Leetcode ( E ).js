/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  s = s.split("");
  if (s.length === 1) return false;
  const closing = [")", "}", "]"];
  let expected = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (closing.includes(s[i + 1]) && s[i + 1] !== ")") return false;
      expected.unshift(")");
    } else if (s[i] === "{") {
      if (closing.includes(s[i + 1]) && s[i + 1] !== "}") return false;
      expected.unshift("}");
    } else if (s[i] === "[") {
      if (closing.includes(s[i + 1]) && s[i + 1] !== "]") return false;
      expected.unshift("]");
    } else {
      if (s[i] !== expected.shift()) return false;
    }
  }
  if (expected.length > 0) return false;
  return true;
};
