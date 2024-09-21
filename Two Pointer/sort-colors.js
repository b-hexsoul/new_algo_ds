var sortColors = function (nums) {
  let p0 = 0;
  let p1 = 0;
  let p2 = nums.length - 1;
  while (p1 <= p2) {
    console.log(p0, p1, p2);
    console.log(nums[p1]);
    if (nums[p1] === 2) {
      console.log("p1 equals 2");
      [nums[p1], nums[p2]] = [nums[p2], nums[p1]];
      p2--;
    } else if (nums[p1] === 0) {
      console.log("p1 === 0");
      [nums[p1], nums[p0]] = [nums[p0], nums[p1]];
      p0++;
    }
    p1++;
    console.log(nums);
  }
};

sortColors([1, 2, 0]);
