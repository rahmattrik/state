import { useState } from "react";

const useSwitch = (length) => {
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection((currIndex) => (
      currIndex < length - 1 ? currIndex + 1 : currIndex
    ));
  };

  const previous = () => {
    setDirection((currIndex) => (
      currIndex > 0 ? currIndex - 1 : currIndex
    ));
  };

  return { direction, next, previous };
};

export default useSwitch;