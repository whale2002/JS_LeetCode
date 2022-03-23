const isValid = function (s) {
  const length = s.length
  const stack = []

  for (let i = 0; i < length; i++) {
    if (stack.length == 0) stack.push(s[i])
    else {
      if (
        (s[i] == ')' && stack[stack.length - 1] == '(') ||
        (s[i] == ']' && stack[stack.length - 1] == '[') ||
        (s[i] == '}' && stack[stack.length - 1] == '{')
      )
        stack.pop()
      else stack.push(s[i])
    }
  }

  return stack.length === 0
}

console.log(isValid('[(({})}]'))
