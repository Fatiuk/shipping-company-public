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
    <div className="text-center">
      <h2 className="font-h1-h2-h3 my-0 font-bold text-[color-b900-w]">
        {Math.round(currentNumber)}
        {t(suffix)}
      </h2>
      <p className="font-b1-b2 text-[color-b900-w] whitespace-pre">
        {t(text)}
      </p>
    </div>
  );
};

export default StatsItem;
