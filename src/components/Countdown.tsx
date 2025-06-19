
import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-center mb-4">
        <Calendar className="w-5 h-5 md:w-6 md:h-6 mr-2" />
        <h3 className="text-lg md:text-xl font-semibold text-center">Competition Ends In</h3>
      </div>
      
      <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
        <div className="bg-white/20 rounded-lg p-2 md:p-3">
          <div className="text-xl md:text-2xl font-bold">{timeLeft.days}</div>
          <div className="text-xs md:text-sm opacity-80">Days</div>
        </div>
        <div className="bg-white/20 rounded-lg p-2 md:p-3">
          <div className="text-xl md:text-2xl font-bold">{timeLeft.hours}</div>
          <div className="text-xs md:text-sm opacity-80">Hours</div>
        </div>
        <div className="bg-white/20 rounded-lg p-2 md:p-3">
          <div className="text-xl md:text-2xl font-bold">{timeLeft.minutes}</div>
          <div className="text-xs md:text-sm opacity-80">Minutes</div>
        </div>
        <div className="bg-white/20 rounded-lg p-2 md:p-3">
          <div className="text-xl md:text-2xl font-bold">{timeLeft.seconds}</div>
          <div className="text-xs md:text-sm opacity-80">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
