import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 35,
    days: 5
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const { days, hours, minutes, seconds } = prevTime;
        
        // Calculate new time
        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;
        let newDays = days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        // Stop timer when countdown finishes
        if (newDays < 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return { 
          days: newDays, 
          hours: newHours, 
          minutes: newMinutes, 
          seconds: newSeconds 
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }) => (
    <div className="w-10 h-10 md:w-16 md:h-16 bg-white p-4 rounded-full grid place-content-center text-center text-sm">
      <h4>{value.toString().padStart(2, '0')}</h4>
      <p className='md:text-sm text-[12px]'>{label}</p>
    </div>
  );

  return (
    <div className="absolute top-[54.6%] left-[5%] z-10 flex gap-4">
      <TimeBox value={timeLeft.days} label="Days" />
      <TimeBox value={timeLeft.hours} label="Hours" />
      <TimeBox value={timeLeft.minutes} label="Min" />
      <TimeBox value={timeLeft.seconds} label="Sec" />
    </div>
  );
};

const MidBanner = () => {
  return (
    <section className='section'>
      <div className="container relative">
        <img 
          src="/images/mid-banner.png" 
          alt="promotional banner" 
          width={1170} 
          height={500}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
        
        <CountdownTimer />
        
        <Link 
          to="/products" 
          className='absolute bg-button1 top-[75%] left-[5%] px-8 py-4 rounded-md text-white hover:bg-button1/90 transition-colors'
        >
          Buy Now!
        </Link>
      </div>
    </section>
  );
};

export default MidBanner;