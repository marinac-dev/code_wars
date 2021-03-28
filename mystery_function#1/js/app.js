// https://www.codewars.com/kata/531963f82dde6fc8c800048a

function solved(x) {
  return x
    .split("")
    .filter((x, i, arr) => {
      return arr.length - 1 !== i * 2;
    })
    .sort()
    .join("");
}
