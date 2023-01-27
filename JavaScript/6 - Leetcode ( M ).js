var convert = function (s, numRows) {
  if (numRows === 1) return s;

  let newStr = "";
  let counter = 0;
  let counter2 = 0;
  let up = numRows * 2 - 2;
  let down = 0;
  let curr = 0;

  newStr += s[curr];

  for (let i = 0; i < s.length - 1; i++) {
    if (down === 0) curr += up;
    else if (up === 0) curr += down;
    else {
      if (counter2 % 2 === 0) curr += down;
      else {
        curr += up;
      }
    }

    if (curr >= s.length) {
      curr = ++counter;

      counter2 = 0;

      up -= 2;
      down += 2;
    }

    console.log(curr);

    newStr += s[curr];
    ++counter2;
  }

  return newStr;
};

console.log(convert("PAYPALISHIRING", 5));

// 2
// 0 2 4 6 8 10 12 1 3 5 7 9 11 13
//        2/0                 0/2

// 3
// 0 4 8 12 1 3 5 7 9 11 13 2 6 10
//     4/0         2/2             0/4

// 4
// 0 1 2   3 4 5  6   7  8 9 10 11  12 13
// 0 6 12  1 5 7 11 13   2 4 8 10   3 9
//   6       4/2          2/4    6

// 5
// 0 8 1 7 9 2 6 10 3 5 11 13 4 12
//  8   6/2    4       2/6     8

// 6
// 0 10 1 9 11 2 8 12 3 7 13 4 6 5
//  10     8/2  6/4    4/6   2/8   10
