function evaluateExpression(input) {
  // Trim input for safety
  input = input.trim();

  // Validate only allowed characters (digits, operators, parentheses, decimals, spaces)
  if (!/^[0-9+\-*/().\s]+$/.test(input)) {
    return "Invalid characters in expression";
  }

  try {
    // Use eval to calculate result
    const result = eval(input);

    // Check for Infinity, -Infinity, NaN
    if (!Number.isFinite(result)) {
      return "Invalid operation";
    }

    return result;
  } catch {
    // Syntax errors, etc
    return "Error in expression";
  }
}

// Export for Jest testing
if (typeof module !== 'undefined') {
  module.exports = evaluateExpression;
}
