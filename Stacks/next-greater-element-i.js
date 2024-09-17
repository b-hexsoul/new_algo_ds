var nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  const stack = [];
  for (let i = 0; i < nums2.length; i++) {
    const num = nums2[i];
    while (stack.length > 0 && num > stack[stack.length - 1]) {
      map.set(stack.pop(), num);
    }
    stack.push(num);
    console.log("stack", stack);
  }

  while (stack.length > 0) {
    map.set(stack.pop(), -1);
  }
  console.log("map", map);
  return nums1.map((n) => map.get(n));
};

nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);
