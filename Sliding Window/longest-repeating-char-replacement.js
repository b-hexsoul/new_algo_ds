var characterReplacement = function (s, k) {
  const charMap = new Map();
  let output = 0;
  let left = 0;
  let maxFrequency = 0;
  for (let right = 0; right < s.length; right++) {
    console.log("right", right, "left", left);
    const rightLetter = s[right];
    if (charMap.has(rightLetter)) {
      const rightCount = charMap.get(rightLetter);
      charMap.set(rightLetter, rightCount + 1);
    } else {
      charMap.set(rightLetter, 1);
    }
    console.log("right letter", rightLetter, charMap.get(rightLetter));
    maxFrequency = Math.max(maxFrequency, charMap.get(rightLetter));
    console.log("max frequency", maxFrequency);
    const isValid = right - left + 1 - maxFrequency <= k;
    console.log("is valid?", isValid);
    if (!isValid) {
      charMap.set(s[left], charMap.get(s[left]) - 1);
      left++;
    }

    output = Math.max(output, right - left + 1);
    console.log("output", output);
    console.log("-------END ITERATION-------");
  }
  return output;
};

characterReplacement("AABABBA", 1);
