var reverse = function (x) {
  let neg = false;
  let string = x.toString();
  if (x < 0) {
    neg = true;
    string = string.substring(1);
  }
  const res = +string.split("").reverse().join("");

  if (res > Math.pow(2, 31)) return 0;

  if (neg) return -res;

  return res;
};

console.log(reverse(-120));
