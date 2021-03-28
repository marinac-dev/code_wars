// https://www.codewars.com/kata/58c5577d61aefcf3ff000081
function encodeRailFenceCipher(d, f) {
  for (var e = d.split(""), c = [], b = 0; b < f; ++b) {
    c[b] = [];
    for (var a = 0; a < d.length; ++a) c[b][a] = "\n";
  }
  b = !1;
  for (var h = (a = 0), g = 0; g < d.length; ++g) {
    if (0 == a || a == f - 1) b = !b;
    c[a][h++] = e[g];
    b ? a++ : a--;
  }
  e = "";
  for (b = 0; b < f; ++b) for (a = 0; a < d.length; ++a) "\n" != c[b][a] && (e += c[b][a]);
  return e;
}

function decodeRailFenceCipher(c, g) {
  var d = [];
  c.split("");
  for (var b = 0; b < g; ++b) {
    d[b] = [];
    for (var a = 0; a < c.length; ++a) d[b][a] = "\n";
  }
  var f, e = (a = 0);
  for (b = 0; b < c.length; ++b) 0 == a && (f = !0), a == g - 1 && (f = !1), (d[a][e++] = "*"), f ? a++ : a--;
  for (b = e = 0; b < g; ++b) for (a = 0; a < c.length; ++a) "*" == d[b][a] && e < c.length && (d[b][a] = c[e++]);
  var h = "";
  for (b = e = a = 0; b < c.length; b++)
    0 == a && (f = !0), a == g - 1 && (f = !1), "*" != d[a][e] && (h += d[a][e++]), f ? a++ : a--;
  return h;
}
