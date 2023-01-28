var myAtoi = function (s) {
  const string = s.trim();
  let neg = false;
  let num = "";

  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      if (string[i] === "-") neg = true;
      if (string[i] !== "-" && string[i] !== "+" && isNaN(parseInt(string[i])) === true) break;
    } else {
      if (isNaN(parseInt(string[i])) === true) break;
    }

    if (isNaN(parseInt(string[i])) === false) num += string[i];
  }

  if (num === "") return 0;

  if (neg) {
    num = -parseInt(num);
  } else {
    num = parseInt(num);
  }

  if (num > Math.pow(2, 31) - 1) num = Math.pow(2, 31) - 1;
  if (num < -Math.pow(2, 31)) num = -Math.pow(2, 31);

  return num;
};

console.log(myAtoi("     -8912373asfdasdfas"));
