/*
Given a string s and an integer k, return the number of substrings in s of length k with no repeated characters.

 

Example 1:

Input: s = "havefunonleetcode", k = 5
Output: 6
Explanation: There are 6 substrings they are: 'havef','avefu','vefun','efuno','etcod','tcode'.
Example 2:

Input: s = "home", k = 5
Output: 0
Explanation: Notice k can be larger than the length of s. In this case, it is not possible to find any substring.
*/
var numKLenSubstrNoRepeats = function (s, k) {
  if (s.length < k) {
    return 0;
  }
  const charMap = new Map();
  let output = 0;
  for (let i = 0; i < k; i++) {
    if (charMap.has(s[i])) {
      charMap.set(s[i], charMap.get(s[i]) + 1);
    } else {
      charMap.set(s[i], 1);
    }
  }
  if (charMap.size === k) {
    output++;
  }

  for (let left = 0; left < s.length - k; left++) {
    const charCount = charMap.get(s[left]);
    if (charCount === 1) {
      charMap.delete(s[left]);
    } else {
      charMap.set(s[left], charCount - 1);
    }

    if (charMap.has(s[left + k])) {
      charMap.set(s[left + k], charMap.get(s[left + k]) + 1);
    } else {
      charMap.set(s[left + k], 1);
    }

    if (charMap.size === k) {
      output++;
    }
  }
  return output;
};
