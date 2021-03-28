// https://www.codewars.com/kata/52a78825cdfc2cfc87000005
function calc(p) {
  function f(a) { return d[0] == a && d.shift(); }
  function k(a) { return (a.some((h) => { return h == d[0]; }) && d.shift() ); }
  function l(a, h, q) { return [(b, c) => {return b + c;}, (b, c) => { return b - c;}, (b, c) => {return b * c;}, (b, c) => {return b / c;},]["+-*/".indexOf(h)](a, q); }
  function g() { return f("(") ? ((e = sl()), f(")"), e) : !isNaN(d[0]) && d.shift(); }
  function n() {
    for (var a = f("-") ? -g() : g(); (op = k(["*", "/"])); a = l(a, op, f("-") ? -g() : g()));
    return a;
  }
  function sl() {
    for (var a = n(); (op = k(["+", "-"])); a = l(a, op, n()));
    return a;
  }
  var d = p.match(/\d+\.\d+|\d+|[-+*/\(\)]/g).map(function (a) {
    return isNaN(a) ? a : Number(a);
  });
  return sl();
}