import { useEffect, useState } from "react";
import LaptopImage from "./assets/final.webp";
import logo from "./assets/logo-h.png";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = () => {
      const targetDate = new Date("2025-06-07T00:00:00Z").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      const newTime =
        difference > 0
          ? {
              days: Math.floor(difference / (1000 * 60 * 60 * 24)),
              hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((difference / (1000 * 60)) % 60),
              seconds: Math.floor((difference / 1000) % 60),
            }
          : { days: 0, hours: 0, minutes: 0, seconds: 0 };

      setTimeLeft(newTime);
    };

    const interval = setInterval(countdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen -z-30 bg-bg-purple text-center flex flex-col justify-center items-center overflow-hidden relative">
      {/* Animated background text */}

      <div className="absolute w-full sm:top-[30%] -z-10 animate-marquee whitespace-nowrap text-[6vw] font-semibold leading-12 sm:leading-20 2xl:leading-30 text-gray-400  opacity-10">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="mx-2 text-primary my-0">
            COMING <span className="text-text">SOON</span>
          </span>
        ))}
        <br className="h-[1px]" />
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="mx-2 text-primary my-0">
            SOON <span className="text-text">COMING</span>
          </span>
        ))}
      </div>
      {/* <br />
      <div className="absolute w-full sm:top-[40%] -z-10 animate-marquee whitespace-nowrap text-[6vw] font-semibold  text-gray-400  opacity-10 mt-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="mx-2 text-primary">
            SOON <span className="text-text">COMING</span>
          </span>
        ))}
      </div> */}

      {/* Logo */}
      <div className="mb-8">
        <img src={logo} alt="H platform logo" className="w-40" />
      </div>

      {/* Laptop image */}
      <div className="max-w-md w-full px-4">
        <img
          src={LaptopImage}
          alt="H-platform preview"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Countdown */}
      <div className="mt-8 flex justify-center gap-6 text-gray-900 text-lg font-semibold">
        <div className="text-center">
          <div className="text-2xl sm:text-4xl ">{timeLeft.days}</div>
          <div className="text-xs tracking-widest">DAYS</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-4xl ">{timeLeft.hours}</div>
          <div className="text-xs tracking-widest">HOURS</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-4xl ">{timeLeft.minutes}</div>
          <div className="text-xs tracking-widest">MINUTES</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-4xl ">{timeLeft.seconds}</div>
          <div className="text-xs tracking-widest">SECONDS</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 text-sm text-gray-500">
        DESIGNED BY <span className="text-primary">VEGUSCODE</span>, 2025, ALL
        RIGHTS RESERVED
      </footer>
    </div>
  );
}
