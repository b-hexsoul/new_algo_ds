var moveZeroes = function (nums) {
  let lastZeroIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log(nums);
    const item = nums[i];
    if (item !== 0) {
      [nums[lastZeroIndex], nums[i]] = [nums[i], nums[lastZeroIndex]];
      lastZeroIndex++;
    }
  }
  return nums;
};

moveZeroes([0, 1, 0, 3, 12]);
