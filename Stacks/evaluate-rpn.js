var evalRPN = function (tokens) {
  const operatorMap = {
    "+": true,
    "-": true,
    "*": true,
    "/": true,
  };
  const stack = [];
  let runningValue;
  for (let i = 0; i < tokens.length; i++) {
    if (!operatorMap[tokens[i]]) {
      stack.push(Number(tokens[i]));
    } else {
      if (runningValue === undefined) {
        runningValue = stack.pop();
      }
      runningValue = applyOperation(runningValue, stack.pop(), tokens[i]);
    }
  }
  return runningValue;
};

// num1 should be running value
function applyOperation(num1, num2, operand) {
  if (operand === "+") {
    return num1 + num2;
  }
  if (operand === "-") {
    return num1 - num2;
  }
  if (operand === "*") {
    return num1 * num2;
  }
  if (operand === "/") {
    return Math.round(num2 / num1);
  }
}
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
