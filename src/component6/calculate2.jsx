import React, { useState } from 'react';

const Calculator = () => {
    const [display, setDisplay] = useState('0');
    const [equation, setEquation] = useState('');
    const [isNewNumber, setIsNewNumber] = useState(true);

    const handleNumber = (num) => {
        if (isNewNumber) {
            setDisplay(num);
            setIsNewNumber(false);
        } else {
            setDisplay(display + num);
        }
    };

    const handleOperator = (operator) => {
        setEquation(display + ' ' + operator + ' ');
        setIsNewNumber(true);
    };

    const handleEqual = () => {
        try {
            // Get the full expression
            const fullExpression = equation + display;

            // Split the expression into numbers and operators
            const tokens = fullExpression.match(/(-?\d*\.?\d+)|[+\-*/]/g) || [];

            if (tokens.length === 0) {
                throw new Error('Invalid expression');
            }

            // Convert string numbers to actual numbers
            const processedTokens = tokens.map(token => {
                if (['+', '-', '*', '/'].includes(token)) return token;
                return parseFloat(token);
            });

            // Handle multiplication and division first
            let i = 0;
            while (i < processedTokens.length) {
                if (['*', '/'].includes(processedTokens[i])) {
                    const prev = processedTokens[i - 1];
                    const next = processedTokens[i + 1];
                    let computedValue;

                    if (processedTokens[i] === '*') {
                        computedValue = prev * next;
                    } else if (processedTokens[i] === '/') {
                        if (next === 0) throw new Error('Division by zero');
                        computedValue = prev / next;
                    }

                    processedTokens.splice(i - 1, 3, computedValue);
                    i = i - 1;
                } else {
                    i++;
                }
            }

            // Handle addition and subtraction
            let result = processedTokens[0];
            for (i = 1; i < processedTokens.length; i += 2) {
                const operator = processedTokens[i];
                const nextNum = processedTokens[i + 1];

                if (operator === '+') {
                    result += nextNum;
                } else if (operator === '-') {
                    result -= nextNum;
                }
            }

            if (!Number.isFinite(result)) {
                throw new Error('Invalid calculation');
            }

            const formattedResult = parseFloat(result.toFixed(8)).toString();

            setDisplay(formattedResult);
            setEquation('');
            setIsNewNumber(true);

        } catch (error) {
            setDisplay('Error');
            setEquation('');
            setIsNewNumber(true);
        }
    };

    const handleClear = () => {
        setDisplay('0');
        setEquation('');
        setIsNewNumber(true);
    };

    const buttonStyle = {
        width: '50px',
        height: '50px',
        margin: '5px',
        fontSize: '18px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f0f0f0',
        cursor: 'pointer'
    };

    const displayStyle = {
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        margin: '10px',
        textAlign: 'right',
        fontSize: '24px',
        minHeight: '40px'
    };

    const calculatorStyle = {
        width: '280px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#f8f9fa'
    };

    return (
        <div style={calculatorStyle}>
            <div style={displayStyle}>
                <div style={{ fontSize: '14px', color: '#666' }}>{equation}</div>
                <div>{display}</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '5px' }}>
                <button style={{ ...buttonStyle, gridColumn: 'span 2' }} onClick={handleClear}>Clear</button>
                <button style={buttonStyle} onClick={() => handleOperator('/')}>÷</button>
                <button style={buttonStyle} onClick={() => handleOperator('*')}>×</button>

                {[7, 8, 9].map((num) => (
                    <button key={num} style={buttonStyle} onClick={() => handleNumber(String(num))}>
                        {num}
                    </button>
                ))}
                <button style={buttonStyle} onClick={() => handleOperator('-')}>-</button>

                {[4, 5, 6].map((num) => (
                    <button key={num} style={buttonStyle} onClick={() => handleNumber(String(num))}>
                        {num}
                    </button>
                ))}
                <button style={buttonStyle} onClick={() => handleOperator('+')}>+</button>

                {[1, 2, 3].map((num) => (
                    <button key={num} style={buttonStyle} onClick={() => handleNumber(String(num))}>
                        {num}
                    </button>
                ))}
                <button style={{ ...buttonStyle, backgroundColor: '#007bff', color: 'white' }} onClick={handleEqual}>=</button>

                <button style={{ ...buttonStyle, gridColumn: 'span 2' }} onClick={() => handleNumber('0')}>0</button>
                <button style={buttonStyle} onClick={() => handleNumber('.')}>.</button>
            </div>
        </div>
    );
};

export default Calculator;