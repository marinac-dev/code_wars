// https://www.codewars.com/kata/57f46250bd7b5434b7000ab8
function NSApuzzle(c, d) {
  return c
    .split("")
    .map((a, e) => {
      var b = +a - +d[e];
      return 0 > b ? b + 10 : b;
    })
    .join("")
    .match(/../g)
    .map((a) => {
      return "abcdefghijklmnopqrstuvwxyz"[(+a - 1) % 26];
    })
    .join("");
}
