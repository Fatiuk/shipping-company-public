"use client";
import { useTranslations } from "next-intl";
import React, { FC, useEffect, useState } from "react";

const StatsItem: FC<{
  targetNumberStr: string;
  increment: number;
  suffix: string;
  text: string;
}> = ({ targetNumberStr, increment, suffix, text }) => {
  const t = useTranslations();
  const [currentNumber, setCurrentNumber] = useState(0);
  const targetNumber = parseFloat(t(targetNumberStr));
  const duration = targetNumber / (increment * 10);

  useEffect(() => {
    if (currentNumber >= targetNumber) return;

    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        const nextNumber = prevNumber + increment;
        return nextNumber >= targetNumber ? targetNumber : nextNumber;
      });
    }, duration);

    return () => clearInterval(interval);
  }, [currentNumber]);

  return (
    <div className="text-center sm:w-full md:w-[47%] lg:w-[30%]">
      <p className="font-header text-5xl text-oblue-600 dark:text-oaccent-900 pb-3">
        {currentNumber}
        {t(suffix)}
      </p>
      <p className="font-sans text-lg">{t(text)}</p>
    </div>
  );
};

export default StatsItem;
