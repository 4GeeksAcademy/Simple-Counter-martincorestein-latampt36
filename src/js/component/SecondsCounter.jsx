
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SecondsCounter = ({ seconds }) => {
    const [count, setCount] = useState(seconds);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isRunning]);

    const handleStop = () => setIsRunning(false);
    const handleStart = () => setIsRunning(true);
    const handleReset = () => setCount(0);

    // Contador 6 dígitos
    const padNumber = (num, size) => {
        let s = "000000" + num;
        return s.substr(s.length - size);
    };
    
    const formattedCount = padNumber(count, 6).split("");

    return (
        <div className="counter">
            <div className="slot clock-icon">
                <i className="fas fa-clock"></i>
            </div>
            {formattedCount.map((digit, index) => (
                <div key={index} className="slot">{digit}</div>
            ))}
            <div className="controls">
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

SecondsCounter.propTypes = {
    seconds: PropTypes.number
};

export default SecondsCounter;
