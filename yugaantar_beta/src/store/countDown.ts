import { create } from 'zustand';

interface CountdownStore {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  calculateTimeLeft: () => void;
}

const calculateTimeDifference = () => {
  const targetDate = new Date('January 1, 2025').getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000)
  };
};

export const useCountdownStore = create<CountdownStore>((set) => ({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  calculateTimeLeft: () => {
    const timeLeft = calculateTimeDifference();
    set(timeLeft);
  },
}));