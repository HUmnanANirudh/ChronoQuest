"use client"
import { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [Day, setDay] = useState<number|null>(null);
  const [Hour, setHour] = useState<number|null>(null);
  const [Min, setMin] = useState<number|null>(null);
  const [Sec, setSec] = useState<number|null>(null);

  const prevDay = useRef<number|null>(Day);
  const prevHour = useRef<number|null>(Hour);
  const prevMin = useRef<number|null>(Min);
  const prevSec = useRef<number|null>(Sec);

  const TargetDate:Date = new Date("April 18, 2025 00:00:00 GMT+0530");

  const calculateTime = () => {
    const TimeDifference = TargetDate.getTime() - Date.now();

    const NewDay = Math.floor(TimeDifference / (1000 * 60 * 60 * 24));
    const NewHour = Math.floor(
      (TimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const NewMin = Math.floor(
      (TimeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const NewSec = Math.floor((TimeDifference % (1000 * 60)) / 1000);

    if (TimeDifference <= 0) {
      setDay(0);
      setHour(0);
      setMin(0);
      setSec(0);
      return
    }

    if (NewDay !== prevDay.current) {
      setDay(NewDay);
      prevDay.current = NewDay;
    }
    if (NewHour !== prevHour.current) {
      setHour(NewHour);
      prevHour.current = NewHour;
    }
    if (NewMin !== prevMin.current) {
      setMin(NewMin);
      prevMin.current = NewMin;
    }
    if (NewSec !== prevSec.current) {
      setSec(NewSec);
      prevSec.current = NewSec;
    }
  };
  useEffect(() => {
    const Timer = setInterval(() => {
      calculateTime();
    }, 1000);
    return () => clearInterval(Timer);
  }, []);

  return (
    <div className="flex justify-center items-center font-mono">
      <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-1">
            <span className="text-lg font-semibold">
              {Day!==null ?(Math.floor(Day / 10)):"0"}
            </span>
            <span className="text-lg font-semibold">
              {Day!==null?(Day % 10):"0"}
            </span>
          </div>
          <div className="text-xs sm:text-sm font-normal ">DAYS</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center gap-1">
            <span className="text-lg font-semibold">
              {Hour!==null ? (Math.floor(Hour / 10)):"0"}
            </span>
            <span className="text-lg font-semibold">
              {Hour!==null ?( Hour % 10):"0"}
            </span>
          </div>
          <div className="text-xs sm:text-sm font-normal ">HRS</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center  gap-1">
            <span className="text-lg font-semibold">
              {Min!==null?(Math.floor(Min / 10)):"0"}
            </span>
            <span className="text-lg font-semibold">
              {Min!==null ?(Min % 10):"0"}
            </span>
          </div>
          <div className="text-xs sm:text-sm font-normal ">MIN</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center  gap-1">
            <span className="text-lg font-semibold">
              {Sec!==null ?(Math.floor(Sec / 10)):"0"}
            </span>
            <span className="text-lg font-semibold">
              {Sec!==null ?(Sec % 10):"0"}
            </span>
          </div>
          <div className="text-xs sm:text-sm font-normal ">SEC</div>
        </div>
      </div>
    </div>
  );
};
export default Timer;