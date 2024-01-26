import { useEffect, useState } from "react";

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentTime]);

  return <span>{currentTime.toLocaleTimeString()}</span>;
};
