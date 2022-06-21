import {
  useState, useEffect, useRef
} from 'react';

const initialValues = {
  days: '0',
  hours: '0',
  minutes: '0',
  seconds: '0',
};
const useCountDown = (countdownDate: number) => {
  const [valueCountDown, setValueCountDown] = useState(initialValues);

  const [stop, setStop] = useState(false);
  const increment = useRef<any>(null);

  useEffect(() => {
    if (countdownDate && countdownDate !== 0) {
      increment.current = setInterval(() => setNewTime(), 1000);
    }

    return () => {
      clearInterval(increment.current);
      setValueCountDown(initialValues);
    };
  }, [countdownDate, stop]);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = (countdownDate + 2000) - currentTime;

      if (distanceToDate <= 0) {
        stopCountdown(true);
        return;
      }

      const days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
      );
      const seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const daysString = days < 10 ? `0${ days }` : days.toString();
      const hoursString = hours < 10 ? `0${ hours }` : hours.toString();
      const minutesString = minutes < 10 ? `0${ minutes }` : minutes.toString();
      const secondsString = seconds < 10 ? `0${ seconds }` : seconds.toString();

      setValueCountDown({
        days: daysString,
        hours: hoursString,
        minutes: minutesString,
        seconds: secondsString
      });
    }
  };

  const stopCountdown = (isTimeEnd = false) => {
    setStop(isTimeEnd);
    clearInterval(increment.current);
    setValueCountDown(initialValues);
  };

  return {
    valueCountDown,
    stop,
    stopCountdown
  };
};

export default useCountDown;
