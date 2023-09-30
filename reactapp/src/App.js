import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleAdd = () => {
    if (!num1 || !num2) {
      setError('Error: Please enter both numbers');
      setResult('');
      return;
    }

    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(`Result: ${sum}`);
    setError('');
  };

  const handleSubtract = () => {
    if (!num1 || !num2) {
      setError('Error: Please enter both numbers');
      setResult('');
      return;
    }

    const difference = parseFloat(num1) - parseFloat(num2);
    setResult(`Result: ${difference}`);
    setError('');
  };

  const handleMultiply = () => {
    if (!num1 || !num2) {
      setError('Error: Please enter both numbers');
      setResult('');
      return;
    }

    const product = parseFloat(num1) * parseFloat(num2);
    setResult(`Result: ${product}`);
    setError('');
  };

  const handleDivide = () => {
    if (!num1 || !num2) {
      setError('Error: Please enter both numbers');
      setResult('');
      return;
    }

    if (parseFloat(num2) === 0) {
      setError('Error: Division by zero');
      setResult('');
      return;
    }

    const quotient = parseFloat(num1) / parseFloat(num2);
    setResult(`Result: ${quotient}`);
    setError('');
  };

  return (
    <div className="Calculator">
      <input
        data-testid="num1"
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        data-testid="num2"
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleMultiply}>Multiply</button>
      <button onClick={handleDivide}>Divide</button>
      {error && <div data-testid="result">{error}</div>}
      {result && <div data-testid="result">{result}</div>}
    </div>
  );
}

export default Calculator;
