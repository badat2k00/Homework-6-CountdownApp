
import './App.css';
import React, { useState, useEffect } from "react";
function App() {

  const countdownDate = new Date("2023-04-16T16:50:39").getTime();
  const [countdownTime, setCountdownTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdownTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  return (
    <>
      <div className="bg-black flex justify-center items-center w-full h-[100vh] pt-[10vh]">
        <div className="bg-violet-950 flex justify-center items-center w-[800px] h-[400px] flex-wrap gap-2 rounded-xl">
          <h1 className=" w-[800px] text-white text-center flex justify-center items-center h-[100px] text-5xl font-mono">WE 'RE LAUNCHING SOON</h1>
          <div className="w-[190px] h-[200px] bg-violet-950 rounded-xl ">
            <div className="text-center bg-red-400 h-3/4  flex justify-center items-center rounded-xl text-8xl font-mono">{countdownTime.days}</div>
            <div className="text-center text-white h-1/4 bg-violet-950 flex justify-center items-center rounded-xl text-4xl font-mono">DAYS</div>
          </div>
          <div className="w-[190px] h-[200px]  rounded-xl">
            <div className="text-center bg-red-400 h-3/4  flex justify-center items-center rounded-xl text-8xl font-mono">{countdownTime.hours}</div>
            <div className="text-center text-white h-1/4 bg-violet-950 flex justify-center items-center rounded-xl text-4xl font-mono">HOURS</div>
          </div>
          <div className="w-[190px] h-[200px]  rounded-xl">
            <div className="text-center bg-red-400 h-3/4 flex justify-center items-center rounded-xl text-8xl font-mono">{countdownTime.minutes}</div>
            <div className="text-center text-white h-1/4 bg-violet-950 flex justify-center items-center rounded-xl text-4xl font-mono">MINUTES</div>
          </div>
          <div className="w-[190px] h-[200px]  rounded-xl">
            <div className="text-center bg-red-400 h-3/4 flex justify-center items-center rounded-xl text-8xl font-mono">{countdownTime.seconds}</div>
            <div className="text-center text-white h-1/4 bg-violet-950 flex justify-center items-center rounded-xl text-4xl font-mono">SECONDS</div>
          </div>
        </div>
      </div>

    </>


  );
}

export default App;
