import React, { useState, useEffect } from 'react';
import { koulen } from "../fonts";

const Timer = () => {
  const targetDate = new Date('2025-01-27T00:00:00');
  const calculateTimeLeft = () => Math.max(0, Math.floor((targetDate - new Date()) / 1000));

  const [time, setTime] = useState(calculateTimeLeft);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerInterval); 
  }, []);

  const days = Math.floor(time / (3600 * 24));
  const hours = Math.floor((time % (3600 * 24)) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className={`${koulen.className} flex flex-col items-center justify-center`}>
      <h1 className={` ${koulen.className} text-[40px] text-white mb-[10px] max-md:text-[25px] max-sm:text-[20px] max-sm:text-center`}>
        Exclusive VIP access coming soon.
      </h1>

      <div className="flex justify-center rounded-[20px] p-[5px] shadow-md bg-[#393939]/30 backdrop-blur-md">
        <div className="flex flex-col items-center py-[10px] w-[70px] max-md:w-[55px]">
          <span className="text-[40px] text-white max-md:text-[25px]">{String(days).padStart(2, '0')}</span>
          <span className="text-white font-thin text-[13px] max-md:text-[10px]">Days</span>
        </div>
        <p className="text-white text-[50px] max-md:text-[25px] max-md:pt-[5px]">:</p>
        <div className="flex flex-col items-center p-[10px] w-[70px] max-md:w-[55px]">
          <span className="text-[40px] text-white max-md:text-[25px]">{String(hours).padStart(2, '0')}</span>
          <span className="text-white font-thin text-[13px] max-md:text-[10px]">Hours</span>
        </div>
        <p className="text-white text-[50px] max-md:text-[25px] max-md:pt-[5px]">:</p>
        <div className="flex flex-col items-center p-[10px] w-[70px] max-md:w-[55px]">
          <span className="text-[40px] text-white max-md:text-[25px]">{String(minutes).padStart(2, '0')}</span>
          <span className="text-white font-thin text-[13px] max-md:text-[10px]">Minutes</span>
        </div>
        <p className="text-white text-[50px] max-md:text-[25px] max-md:pt-[5px]">:</p>
        <div className="flex flex-col items-center p-[10px] w-[70px] max-md:w-[55px]">
          <span className="text-[40px] text-white max-md:text-[25px]">{String(seconds).padStart(2, '0')}</span>
          <span className="text-white font-thin text-[13px] max-md:text-[10px]">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;