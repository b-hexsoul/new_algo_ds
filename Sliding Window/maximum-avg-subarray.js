// initialize window
// we already know the sum of the window, so we can slide it by adding and subtracting values.

var findMaxAverage = function (nums, k) {
  let result = 0;
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }
  result = currentSum;

  let left = 0;
  for (let right = 0; right < nums.length - k; right++) {
    currentSum = currentSum - nums[right] + nums[right + k];
    result = Math.max(result, currentSum);
  }
  return result / k;
};
