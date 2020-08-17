import React, { useState } from 'react';
import '../css/app.css';

function padTime(time) {
    return time.toString().padStart(2, '0');
}

function App() {
    const [title, setTitle] = useState(`Let's get cracking!`);
    const [timeLeft, setTimeLeft] = useState(25 * 60);

    function startTimer() {
        setInterval(() => {
            setTimeLeft((timeLeft) => {
                return timeLeft >= 1 ? timeLeft - 1 : 0;
            });
        }, 1000);
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
                <button onClick={startTimer}>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </div>
        </div>
    );
}

export default App;
