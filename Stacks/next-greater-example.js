// [2,3,5,1,0,7,3]

function nextGreater(arr) {
  const stack = [];
  const result = Array(arr.length).fill(-1);
  for (let i = 0; i < arr.length; i++) {
    console.log("iteration", i);
    console.log("stack", stack);
    while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
      result[stack.pop()] = arr[i];
    }
    console.log("result", result);

    stack.push(i);
  }
  return result;
}

console.log(nextGreater([2, 3, 5, 1, 0, 7, 3]));
