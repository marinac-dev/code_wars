// https://www.codewars.com/kata/52cf02cd825aef67070008fa
device.decode = function (a) {
  function g(h, k) {
    var e = h;
    if (0 < k)
      for (var c = 0; 90 > c; c++)
        h == "bdfhjlnprtvxzBDFHJLNPRTVXZ13579, acegikmoqsuwyACEGIKOQSUWY024M6.?8!@#$%^&_+-/:;()*<>={}[]'"[c] &&
          ((e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.? ,!@#$%^&_+-/:;()*<>={}[]'"[c]),
          g(e, --k));
    else f += e;
  }
  var f = "";
  a = a.split("");
  for (var b = 0; b < a.length; ) {
    for (var d = 0; 90 > d; d++)
      if (a[b] == "bdfhjlnprtvxzBDFHJLNPRTVXZ13579, acegikmoqsuwyACEGIKOQSUWY024M6.?8!@#$%^&_+-/:;()*<>={}[]'"[d]) {
        g("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890.? ,!@#$%^&_+-/:;()*<>={}[]'"[d], b);
        break;
      } else if ("-" == a[b]) {
        f += a[b];
        break;
      }
    ++b;
  }
  return f;
};
