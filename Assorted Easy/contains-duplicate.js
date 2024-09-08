var containsDuplicate = function (nums) {
  const hash = new Map();
  for (let num of nums) {
    if (!hash.has(num)) {
      hash.set(num, true);
    } else {
      return true;
    }
  }
  return false;
};

containsDuplicate([1, 2, 3, 1]);
