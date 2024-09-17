var dietPlanPerformance = function (calories, k, lower, upper) {
  let points = 0;
  let currentCalorieTotal = 0;
  for (let i = 0; i < k; i++) {
    currentCalorieTotal += calories[i];
  }
  if (currentCalorieTotal < lower) {
    points--;
  }
  if (currentCalorieTotal > upper) {
    points++;
  }

  for (let left = 0; left < calories.length - k; left++) {
    currentCalorieTotal = currentCalorieTotal - calories[left] + calories[left + k];
    if (currentCalorieTotal < lower) {
      points--;
    }
    if (currentCalorieTotal > upper) {
      points++;
    }
  }
  return points;
};
