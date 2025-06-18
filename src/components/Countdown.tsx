
import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-2">
          <Calendar className="w-6 h-6 text-bni-amber mr-2" />
          <h2 className="text-2xl font-bold">Games End In</h2>
        </div>
        <p className="text-lg opacity-90">August 1, 2025</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center hover:bg-opacity-30 transition-all duration-300">
          <div className="text-4xl font-bold text-bni-amber mb-2 font-inter">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="text-sm opacity-80 font-medium">DAYS</div>
        </div>
        
        <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center hover:bg-opacity-30 transition-all duration-300">
          <div className="text-4xl font-bold text-bni-amber mb-2 font-inter">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-sm opacity-80 font-medium">HOURS</div>
        </div>
        
        <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center hover:bg-opacity-30 transition-all duration-300">
          <div className="text-4xl font-bold text-bni-amber mb-2 font-inter">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-sm opacity-80 font-medium">MINUTES</div>
        </div>
        
        <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center hover:bg-opacity-30 transition-all duration-300">
          <div className="text-4xl font-bold text-bni-amber mb-2 font-inter animate-pulse">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-sm opacity-80 font-medium">SECONDS</div>
        </div>
      </div>

      <div className="text-center mt-6">
        <div className="flex items-center justify-center text-sm opacity-80">
          <Clock className="w-4 h-4 mr-1" />
          Live countdown updates every second
        </div>
      </div>
    </div>
  );
};

export default Countdown;
