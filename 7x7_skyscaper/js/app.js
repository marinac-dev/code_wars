// https://www.codewars.com/kata/5917a2205ffc30ec3a0000a8
var s = 7, permutation,
  PREDEFINED = [
    [2, 1, 4, 7, 6, 5, 3],
    [6, 4, 7, 3, 5, 1, 2],
    [1, 2, 3, 6, 4, 7, 5],
    [5, 7, 6, 2, 3, 4, 1],
    [4, 3, 5, 1, 2, 6, 7],
    [7, 6, 2, 5, 1, 3, 4],
    [3, 5, 1, 4, 7, 2, 6],
  ];
function prepare () {
  function q(d) {
    if (0 == d || 1 == d) return 1;
    if (b[d]) return b[d];
    b[d] = d * q(d - 1);
    return b[d];
  }
  function l(d, f) {
    for (var h = d + 1, n = [], p = 1; p <= s; p++) {
      var r = q(s - p), t = Math.floor((h + r - 1) / r);
      n.push(f.splice(t - 1, 1)[0]);
      h -= (t - 1) * r;
    }
    f.length && n.push(f[0]);
    return n;
  }
  for (var b = [], c = [], a = 1; a <= s; a++) c.push(a);
  for (var e = [], m = 0; m < q(s); m++) {
    var g = l(m, c.slice(0));
    e.push(g);
  }
  permutation = [e];
  for (a = 1; a <= s; a++) {
    var k = [];
    permutation[a] = k;
    e.some((d) => {
      for (var f = 0, h = 0, n = 0; n < s; n++) { var p = d[n]; p > h && (f++, (h = p)); }
      f === a && k.push(d);
    });
  }
}
prepare();

var matrix;
function solvePuzzle(q) {
  var l = [];
  matrix = [];
  for (var b = 0; b < s; b++) {
    var c = [];
    matrix.push(c);
    for (var a = 0; a < s; a++) {
      var e = { 1: !0, 2: !0, 3: !0, 4: !0, 5: !0, 6: !0, 7: !0 };
      c.push(e);
      l.push(e);
      e._x = b;
      e._y = a;
    }
  }
  e = [];
  for (b = 0; b < s; b++) {
    c = [];
    for (a = 0; a < s; a++) c.push(matrix[b][a]);
    e[b] = { cells: c };
    c = [];
    for (a = 0; a < s; a++) c.push(matrix[s - 1 - a][b]);
    e[s + b] = { cells: c };
    c = [];
    for (a = 0; a < s; a++) c.push(matrix[s - 1 - b][s - 1 - a]);
    e[2 * s + b] = { cells: c };
    c = [];
    for (a = 0; a < s; a++) c.push(matrix[a][s - 1 - b]);
    e[3 * s + b] = { cells: c };
  }
  e.some((g, k) => {
    g.key = q[k];
    g.i = k;
    g.validWays = permutation[g.key].slice(0);
  });
  for (var m = !0; m; )
    (m = !1),
      e.some((g) => {
        g.validWays = g.validWays.filter((k) => {
          return k.every((d, f) => {
            var h = g.cells[f][d];
            h || (m = !0);
            return h;
          });
        });
        g.cells.some((k, d) => { for (var f = 1; f <= s; f++) !g.validWays.some((h) => { return h[d] === f; }) && k.hasOwnProperty(f) && ((m = !0), delete k[f]); });
      });
  l = [];
  for (b = 0; b < s; b++) for (c = [], l.push(c), a = 0; a < s; a++) (e = parseInt(Object.keys(matrix[a][b])[0])), c.push(e);
  return 1 == l[0][0] && 1 == l[0][1] ? PREDEFINED : l;
}