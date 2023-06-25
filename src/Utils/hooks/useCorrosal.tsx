import * as React from "react";

export const useCorrosal = (count: number,delay?: number) => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(1);

  React.useEffect(() => {
    if(delay){
    const timeout = setTimeout(() => {
      setCurrentIndex((old) =>
        old === count - 1 ? old + 1 : (old + 1) % count
      );
    }, delay);
    return () => clearTimeout(timeout);}
  }, [count, currentIndex, delay]);
  const handlePrev = () => {
    setCurrentIndex(old => old === 1?count:(old-1)%count)
  }
  const handleNext = 
    () => setCurrentIndex(old => old === count-1?old+1:(old+1)%count)
  
  return {currentIndex, setCurrentIndex,handleNext,handlePrev};
};
