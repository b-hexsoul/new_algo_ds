var removeDuplicates = function (nums) {
  let left = 1;
  for (let right = 1; right < nums.length; right++) {
    if (nums[right] !== nums[right - 1]) {
      nums[left] = nums[right];
      left++;
    }
    console.log(nums);
    console.log("left", left);
  }
  return left;
};

removeDuplicates([0, 0]);
