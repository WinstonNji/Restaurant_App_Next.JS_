'use client'
import React, { useEffect, useState } from 'react';

function CountDown() {
  // Set your target date here
  const targetDate = new Date('2025-06-01T00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-flow-col gap-5 text-center font-bold auto-cols-max">
      <div className="flex flex-col">
        <span className="countdown text-amber-400 font-mono text-7xl">
          <span style={{ '--value': timeLeft.days }}>{timeLeft.days}</span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown text-amber-400 font-mono text-7xl">
          <span style={{ '--value': timeLeft.hours }}>{timeLeft.hours}</span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown text-amber-400  font-mono text-7xl">
          <span style={{ '--value': timeLeft.minutes }}>{timeLeft.minutes}</span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown  text-amber-400  font-mono text-7xl">
          <span style={{ '--value': timeLeft.seconds }}>{timeLeft.seconds}</span>
        </span>
        sec
      </div>
    </div>
  );
}

export default CountDown;
