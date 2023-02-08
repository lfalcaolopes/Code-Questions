var romanToInt = function (s) {
  const ar = s.split("");
  const roman = ["I", "V", "X", "L", "C", "D", "M"];
  let result = 0;
  let currentSum = 0;

  let lastIndex = roman.indexOf(ar[0]);

  ar.forEach((item) => {
    let currentIndex = roman.indexOf(item);

    if (currentIndex < lastIndex) {
      result += currentSum;
      currentSum = 0;
    }

    if (currentIndex > lastIndex) {
      switch (currentIndex) {
        case 1:
          result += 5 - currentSum;
          currentSum = 0;
          break;
        case 2:
          result += 10 - currentSum;
          currentSum = 0;
          break;
        case 3:
          result += 50 - currentSum;
          currentSum = 0;
          break;
        case 4:
          result += 100 - currentSum;
          currentSum = 0;
          break;
        case 5:
          result += 500 - currentSum;
          currentSum = 0;
          break;
        case 6:
          result += 1000 - currentSum;
          currentSum = 0;
          break;
      }
    } else {
      switch (currentIndex) {
        case 0:
          currentSum += 1;
          break;
        case 1:
          currentSum += 5;
          break;
        case 2:
          currentSum += 10;
          break;
        case 3:
          currentSum += 50;
          break;
        case 4:
          currentSum += 100;
          break;
        case 5:
          currentSum += 500;
          break;
        case 6:
          currentSum += 1000;
          break;
      }
    }

    lastIndex = currentIndex;
  });

  result += currentSum;

  return result;
};

console.log(romanToInt("MCMXCIV"));
