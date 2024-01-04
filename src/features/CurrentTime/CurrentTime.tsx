import { useState } from "react";

export const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  return <span>{currentTime.toLocaleTimeString()}</span>;
};
