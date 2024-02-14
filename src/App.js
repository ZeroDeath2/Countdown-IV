//react app for a date countdown
import React, { useEffect, useRef, useState } from 'react';
//import './App.css';
import './timer.css';
import './imgs/backgound.jpg';

const App = () => {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [likeCount, setLikeCount] = useState(0);
  const [showHeart, setShowHeart] = useState(false);
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
  const incrementLikes = () => {
    setLikeCount(likeCount + 1);
    setShowHeart(true); 
    setTimeout(() => setShowHeart(false), 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  },[]);
  return (
    <div className='container'>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
      <div className='confetti'></div>
    <section className="timer-container">
      <div>
        <h2>GOA</h2>
        <h4>Oru theerthayathra !</h4>
      </div>
      <section className="timer">
            <div className='component'>
              <p>{days}</p>
              <p><small>Days</small></p>
            </div>            
            <div className='component'>
              <p>{hours}</p>
              <p><small>Hours</small></p>
            </div>
            <div className='component'>
              <p>{minutes}</p>
              <p><small>Minutes</small></p>
            </div>
            <div className='component'>
              <p>{seconds}</p>
              <p><small>Seconds</small></p>
            </div>
      </section>
      <button className="like-button" onClick={incrementLikes}>
        <span className="heart-icon">{likeCount}{showHeart && <span className="heart-pop">&hearts;</span>}</span>
      </button>
    </section>    
    </div>
  );
}
export default App;