const evaluateExpression = require('../src/sum');

test('Addition: 10 + 20 = 30', () => {
  expect(evaluateExpression("10 + 20")).toBe(30);
});

test('Subtraction: 50 - 15 = 35', () => {
  expect(evaluateExpression("50 - 15")).toBe(35);
});

test('Multiplication: 6 * 7 = 42', () => {
  expect(evaluateExpression("6 * 7")).toBe(42);
});

test('Division: 100 / 4 = 25', () => {
  expect(evaluateExpression("100 / 4")).toBe(25);
});

test('Combined operations: 10 + 20 * 3 = 70', () => {
  expect(evaluateExpression("10 + 20 * 3")).toBe(70);
});

test('Parentheses: (10 + 20) * 3 = 90', () => {
  expect(evaluateExpression("(10 + 20) * 3")).toBe(90);
});

test('Decimal result: 10 / 4 = 2.5', () => {
  expect(evaluateExpression("10 / 4")).toBe(2.5);
});

test('Division by zero: 10 / 0 = Invalid operation', () => {
  expect(evaluateExpression("10 / 0")).toBe("Invalid operation");
});

test('Invalid characters: 10 + abc = Invalid characters in expression', () => {
  expect(evaluateExpression("10 + abc")).toBe("Invalid characters in expression");
});

test('Syntax error: 10 + * 2 = Error in expression', () => {
  expect(evaluateExpression("10 + * 2")).toBe("Error in expression");
});
