function sum(a, b) {
  return a + b;
}

function calculateSum() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const result = sum(a, b);
  document.getElementById('result').textContent = 'Result: ' + result;
}

// Export for Node.js testing
if (typeof module !== 'undefined') {
  module.exports = sum;
}
