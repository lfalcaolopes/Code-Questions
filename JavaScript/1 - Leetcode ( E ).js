var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    var currNum = nums[i];
    nums[i] = "a";
    var secIndex = nums.indexOf(target - currNum);
    if (secIndex !== -1) {
      return [i, secIndex];
    }
  }
};
console.log(twoSum([3, 2, 4], 6));
