// https://www.codewars.com/kata/5526fc09a1bbd946250002dc
function findOutlier(integers) {
  let odd = [], even = [];
  for (let i = 0; i < integers.length; i++) {
    integers[i] % 2 == 0 ? even.push(integers[i]) : odd.push(integers[i]);
  }
  return odd.length == 1 ? odd[0] : even[0];
}
