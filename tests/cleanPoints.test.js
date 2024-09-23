const { cleanPoints } = require('../Tutorial_3.js');
describe('cleanPoints Function', () => {
  test('cleanPoints should clean and normalize points correctly', () => {
    const inputPoints = [
      {x:5, y:7, z:6},
      {y:17, z:10},
      {y:17},
      {y:17, dist:10},
      {x:5, y:7, z:6, w:9},
      {a:5, b:7, c:6},
      {c:6, x:8, y:5},
      {}
    ];

    const expectedPoints = [
      { x: 5, y: 7, z: 6 },
      { x: 0, y: 17, z: 10 },
      { x: 0, y: 17, z: 0 },
      { x: 0, y: 17, z: 0 },
      { x: 5, y: 7, z: 6 },
      { x: 0, y: 0, z: 0 },
      { x: 8, y: 5, z: 0 },
      { x: 0, y: 0, z: 0 },
    ];

  expect(cleanPoints(inputPoints)).toEqual(expectedPoints);
});
});
