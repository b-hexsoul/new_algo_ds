/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
*/

// Trick here is to use bit manipulation and the XOR operation
// a ^ b
// if a is 0 then the result is b
// if both are same then 0 is returned
var singleNumber = function (nums) {
  let result = 0;
  for (let i of nums) {
    result = result ^ i;
  }
  return result;
};
