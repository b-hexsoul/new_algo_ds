// start with window of size k and test its average against the threshold
// keep moving the window by one element maintaining its size k until you cover the whole array.

var numOfSubarrays = function (arr, k, threshold) {
  let result = 0;
  let currentWindowSum = 0;
  for (let i = 0; i < k; i++) {
    currentWindowSum += arr[i];
  }
  if (currentWindowSum / k >= threshold) {
    result++;
  }

  for (let right = 0; right < arr.length - k; right++) {
    currentWindowSum = currentWindowSum - arr[right] + arr[right + k];
    if (currentWindowSum / k >= threshold) {
      result++;
    }
  }
  return result;
};
