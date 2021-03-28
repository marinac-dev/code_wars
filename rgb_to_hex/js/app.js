// https://www.codewars.com/kata/513e08acc600c94f01000001
function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b);
}

function toHex(c) {
  c = c > 255 ? 255 : c;
  c = c < 0 ? 0 : c;
  var hex = c.toString(16).toUpperCase();
  return hex.length == 1 ? "0" + hex : hex;
}
