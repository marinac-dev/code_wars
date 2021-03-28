// https://www.codewars.com/kata/5266876b8f4bf2da9b000362
function likes(a) {
  var b = a[0], c = a[1], d = a[2];
  return b
    ? c
      ? d
        ? 3 < a.length
          ? b + ", " + c + " and " + (a.length - 2) + " others like this"
          : b + ", " + c + " and " + d + " like this"
        : b + " and " + c + " like this"
      : b + " likes this"
    : "no one likes this";
}
