// https://www.codewars.com/kata/59568be9cc15b57637000054
function elderAge(a, c, e, b) {
  for (var f = 0; 0 < a; ) {
    if (a < c) [a, c] = [c, a];

    for (d = 1; 2 * d <= a; d *= 2);
    c <= d
      ? ((f = (f + (c % b) * sumRng(0, d, e, b)) % b), (a -= d), (e -= d))
      : ((f = (f + (d % b) * sumRng(0, d, e, b)) % b),
        (f = (f + ((a + c - 2 * d) % b) * sumRng(0, d, e - d, b)) % b),
        (a -= d),
        (c -= d));
  }
  return f;
}

function sumRng(a, c, e, b) {
  a = a < e ? 0 : a - e;
  c = c < e ? 0 : c - e;
  return 0 === (c - a) % 2
    ? ((((c - a) / 2) % b) * ((c + a - 1) % b)) % b
    : ((((((c - a - 1) / 2) % b) * ((c + a) % b)) % b) + a) % b;
}
