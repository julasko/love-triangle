/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;
  for (let i = 0; i <= preferences.length; i += 3) {
    let c = preferences[i] - 1;
    let c2 = preferences[c] - 1;
    let c3 = preferences[c2] - 1;
    if (c3 === i && c != c2 != c3) {
      counter++;
    }
  }
  return counter;
};
