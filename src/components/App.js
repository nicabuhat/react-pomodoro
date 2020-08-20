import React, { useState, useRef } from 'react';
import '../css/app.css';

function padTime(time) {
    return time.toString().padStart(2, '0');
}

function App() {
    const [title, setTitle] = useState(`Pomodoro`);
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    function startTimer() {
        if (intervalRef.current !== null) return;
        setTitle(`Let's get cracking!`);
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setTimeLeft((timeLeft) => {
                if (timeLeft >= 1) return timeLeft - 1;
                resetTimer();
                return 0;
            });
        }, 1000);
    }

    function stopTimer() {
        if (intervalRef.current === null) return;
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTitle(`Don't give up now!`);
        setIsRunning(false);
    }

    function resetTimer() {
        clearInterval(intervalRef.current);
        intervalRef.current = null;

        setTitle(`Let's keep going!`);
        setTimeLeft(25 * 60);
        setIsRunning(false);
    }

    const minutes = padTime(Math.floor(timeLeft / 60));
    const seconds = padTime(timeLeft - minutes * 60);

    return (
        <div className="app">
            <h1>{title}</h1>

            <div className="timer">
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>

            <div className="buttons">
                {!isRunning && <button onClick={startTimer}>Start</button>}
                {isRunning && <button onClick={stopTimer}>Stop</button>}
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
}

export default App;
