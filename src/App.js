//react app for a date countdown
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
//import './timer.css';

const App = () => {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const setTimer = new Date('April 17,2024 00:00:00').getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = setTimer - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  },[]);
  return (
    <section className="timer-container">
      <div>
        <h2>Countdown to April 17, 2024</h2>
        <p>Till enjoy</p>
      </div>
      <section className="timer">
        <div>
          <section>
            <div className='component'>
              <p>{days}</p>
              <p><small>Days</small></p>
            </div>
          </section>
          <span> </span>
          <section>
            <div className='component'>
              <p>{hours}</p>
              <p><small>Hours</small></p>
            </div>
          </section>
          <span> </span>
          <section>
            <div className='component'>
              <p>{minutes}</p>
              <p><small>Minutes</small></p>
            </div>
          </section>
          <span> </span>
          <section>
            <div className='component'>
              <p>{seconds}</p>
              <p><small>Seconds</small></p>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
  
}
export default App;