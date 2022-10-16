function parentheses(string) {
  let arr = string.split("");
  let length = arr.length;
  return arr.slice(1, length - 1);
}
