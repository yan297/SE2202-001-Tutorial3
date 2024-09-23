const { printPoint } = require('../Tutorial_3.js'); 
describe('printPoint Function', () => {
    test('printPoint should correctly log for multiple points', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  
        const points = [
        { x: 5, y: 7, z: 6 },
        { x: 0, y: 17, z: 10 },
        { x: 0, y: 0, z: 0 }
        ];
  
        points.forEach(point => {
        printPoint(point);
        });
  
        expect(consoleSpy).toHaveBeenNthCalledWith(1, 'x = 5, y = 7, z = 6');
        expect(consoleSpy).toHaveBeenNthCalledWith(2, 'x = 0, y = 17, z = 10');
        expect(consoleSpy).toHaveBeenNthCalledWith(3, 'x = 0, y = 0, z = 0');
  
        consoleSpy.mockRestore(); 
  });
});