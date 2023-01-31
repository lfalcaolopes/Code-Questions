/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const reverse = [...height].reverse();
  let area = 0;

  for (let i = 0; i < height.length; i++) {
    index = height.length - reverse.findIndex((x) => x >= height[i]);
    let dist = index - i - 1;

    if (height[i] * dist > area) {
      area = height[i] * dist;
    }

    index = height.length - height.findIndex((x) => x >= height[height.length - i - 1]);
    dist = index - i - 1;

    if (height[height.length - i - 1] * dist > area) {
      area = height[height.length - i - 1] * dist;
    }
  }

  return area;
};

console.log(maxArea([1, 1]));
