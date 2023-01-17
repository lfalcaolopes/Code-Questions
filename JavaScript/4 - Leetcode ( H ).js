var findMedianSortedArrays = function (nums1, nums2) {
  const arr = nums1.concat(nums2).sort(function (a, b) {
    return a - b;
  });

  const middleIndex = Math.floor(arr.length / 2);

  if (arr.length % 2 === 1) {
    return arr[middleIndex].toFixed(5);
  } else {
    return ((arr[middleIndex] + arr[middleIndex - 1]) / 2).toFixed(5);
  }
};
