"use client";
import { useTranslations } from "next-intl";
import React, { FC, useEffect, useState } from "react";

const StatsItem: FC<{
  targetNumberStr: string;
  incrementStr: string;
  suffix: string;
  text: string;
}> = ({ targetNumberStr, incrementStr, suffix, text }) => {
  const t = useTranslations();
  const [currentNumber, setCurrentNumber] = useState(0);
  const targetNumber = parseFloat(t(targetNumberStr)) || 2000;
  const increment = parseFloat(t(incrementStr)) || 100;
  // const duration = targetNumber / (increment * 10);
  const duration = 50;

  useEffect(() => {
    if (currentNumber >= targetNumber) return;

    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        const nextNumber = prevNumber + increment;
        return nextNumber >= targetNumber ? targetNumber : nextNumber;
      });
    }, duration);

    return () => clearInterval(interval);
  }, [currentNumber, targetNumber, increment]);

  return (
    <div className="text-center sm:w-full md:w-[47%] lg:w-[30%]">
      <p className="font-header text-5xl text-[--color-w-b900] pb-3">
        {Math.round(currentNumber)}
        {t(suffix)}
      </p>
      <p className="font-sans text-lg">{t(text)}</p>
    </div>
  );
};

export default StatsItem;
