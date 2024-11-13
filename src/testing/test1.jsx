import React, { useState } from 'react';

const Calculator = () => {// Changed from test1 to Calculator (uppercase)
        const [display, setDisplay] = useState('0');
        const [firstNumber, setFirstNumber] = useState(null);
        const [operation, setOperation] = useState(null);
        const [newNumberStarting, setNewNumberStarting] = useState(true);

    const handleNumber = (number) => {
        if (newNumberStarting) {
            setDisplay(String(number));
            setNewNumberStarting(false);
        } else {
            if (display === '0') {
                setDisplay(String(number));
            } else if (display.length < 12) {
                setDisplay(display + number);
            }
        }
    };

    const handleDecimal = () => {
        if (newNumberStarting) {
            setDisplay('0.');
            setNewNumberStarting(false);
        } else if (!display.includes('.')) {
            setDisplay(display + '.');
        }
    };

    const handleOperation = (op) => {
        const currentNumber = parseFloat(display);

        if (firstNumber === null) {
            setFirstNumber(currentNumber);
        } else if (operation) {
            const result = calculate(firstNumber, currentNumber, operation);
            setFirstNumber(result);
            setDisplay(String(result));
        }

        setOperation(op);
        setNewNumberStarting(true);
    };

    const calculate = (first, second, op) => {
        switch (op) {
            case '+': return first + second;
            case '-': return first - second;
            case '×': return first * second;
            case '÷': return second !== 0 ? first / second : 'Error';
            default: return second;
        }
    };

    const handleEquals = () => {
        if (operation && firstNumber !== null) {
            const currentNumber = parseFloat(display);
            const result = calculate(firstNumber, currentNumber, operation);
            setDisplay(String(result));
            setFirstNumber(null);
            setOperation(null);
            setNewNumberStarting(true);
        }
    };

    const handleClear = () => {
        setDisplay('0');
        setFirstNumber(null);
        setOperation(null);
        setNewNumberStarting(true);
    };

    return (
        <div className="max-w-xs mx-auto bg-gray-800 p-4 rounded-xl shadow-lg">
            <div className="bg-gray-700 p-4 rounded-lg mb-4">
                <div className="text-right text-white text-3xl font-mono overflow-hidden">
                    {display}
                </div>
            </div>

            <div className="grid grid-cols-4 gap-2">
                <button onClick={handleClear} className="col-span-2 bg-red-500 text-white p-4 rounded hover:bg-red-600">
                    C
                </button>
                <button onClick={() => handleOperation('÷')} className="bg-yellow-500 text-white p-4 rounded hover:bg-yellow-600">
                    ÷
                </button>
                <button onClick={() => handleOperation('×')} className="bg-yellow-500 text-white p-4 rounded hover:bg-yellow-600">
                    ×
                </button>

                {[7, 8, 9].map((num) => (
                    <button
                        key={num}
                        onClick={() => handleNumber(num)}
                        className="bg-gray-600 text-white p-4 rounded hover:bg-gray-700"
                    >
                        {num}
                    </button>
                ))}
                <button onClick={() => handleOperation('-')} className="bg-yellow-500 text-white p-4 rounded hover:bg-yellow-600">
                    -
                </button>

                {[4, 5, 6].map((num) => (
                    <button
                        key={num}
                        onClick={() => handleNumber(num)}
                        className="bg-gray-600 text-white p-4 rounded hover:bg-gray-700"
                    >
                        {num}
                    </button>
                ))}
                <button onClick={() => handleOperation('+')} className="bg-yellow-500 text-white p-4 rounded hover:bg-yellow-600">
                    +
                </button>

                {[1, 2, 3].map((num) => (
                    <button
                        key={num}
                        onClick={() => handleNumber(num)}
                        className="bg-gray-600 text-white p-4 rounded hover:bg-gray-700"
                    >
                        {num}
                    </button>
                ))}
                <button onClick={handleEquals} className="row-span-2 bg-blue-500 text-white p-4 rounded hover:bg-blue-600">
                    =
                </button>

                <button
                    onClick={() => handleNumber(0)}
                    className="col-span-2 bg-gray-600 text-white p-4 rounded hover:bg-gray-700"
                >
                    0
                </button>
                <button onClick={handleDecimal} className="bg-gray-600 text-white p-4 rounded hover:bg-gray-700">
                    .
                </button>
            </div>
        </div>
    );
};

export default Calculator;